const button = document.getElementById("alert-button");

const section = document.getElementById("section");

function showAlert() {
    alert("Alert button clicked!");
}

//button.addEventListener("click", showAlert);

button.onclick = function() {
    const api = "http://api.icndb.com/jokes/random";
    fetch(api)
        .then(res => res.json())
        .then(data => {
            section.innerHTML = `<h1>Joke Random</h1> 
                            </br> 
                            <p>${data.value.joke}</p>`;
        })
        .catch(err => {
            section.innerHTML = `<h1>ERROR</h1>
                                </br>
                                <p>${err}</p>`;
            section.style.backgroundColor = "#FF0000";
        });
};