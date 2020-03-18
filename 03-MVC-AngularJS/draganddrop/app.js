const startText = document.getElementById('start-text');
const finishText = document.getElementById('finish-text');
const dropFile = document.getElementById('drop-file');

startText.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

finishText.addEventListener('dragover', e => {
    e.preventDefault();
});

finishText.addEventListener('drop', e => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');
    finishText.appendChild(startText.removeChild(element));
});

//***************************/

dropFile.addEventListener('dragover', e => {
    e.preventDefault();
});

dropFile.addEventListener('drop', e => {
    e.preventDefault();
    e.stopPropagation();

    let files = e.dataTransfer.files;
    if (files[0].type === 'text/plain') {
        const reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = fileRecieved();
    }
});

function fileRecieved() {
    const text = document.getElementById('drop-text');
    text.innerHTML = 'File .txt recieved';
}