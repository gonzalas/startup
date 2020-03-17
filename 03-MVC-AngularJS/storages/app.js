const textarea = document.getElementById('textarea');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');

//=======================================
// LOCAL STORAGE SAVE AND CLEAR FUNCTIONS
//=======================================

//SAVE

function saveLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

//CLEAR

function clearLocalStorage() {
    localStorage.clear();
}

//=======================================
// INDEXED DB SAVE AND CLEAR FUNCTIONS
//=======================================

//SAVE

const indexedDb = window.indexedDB;
const request = indexedDb.open('textarea', 1);
let db;

request.onsuccess = () => {
    db = request.result;
};

request.onupgradeneeded = e => {
    db = e.target.result;
    db.createObjectStore('textarea', { autoIncrement: true });
};

request.onerror = error => {
    console.log('Error:', error);
};

function saveIndexedDb(key, value) {
    const transaction = db.transaction([key], 'readwrite');
    const store = transaction.objectStore(key);
    store.add(value);
}

//CLEAR

function clearIndexedDb(key) {
    const transaction = db.transaction([key], 'readwrite');
    const store = transaction.objectStore(key);
    store.clear();
}

//===================
// EVENTS LISTENERS
//===================

const saveData = e => {
    e.preventDefault();

    const key = 'textarea';
    const value = textarea.value;

    saveLocalStorage(key, value);
    saveIndexedDb(key, value);
};

const clearData = e => {
    e.preventDefault();

    clearLocalStorage();
    clearIndexedDb('textarea');
};

saveButton.addEventListener('click', saveData);
clearButton.addEventListener('click', clearData);