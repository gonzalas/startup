const button = document.getElementById("alert-button");

function showAlert() {
    alert("Alert button clicked!");
}

//button.addEventListener("click", showAlert);

button.onclick = function() {
    const api = "http://api.icndb.com/jokes/random";
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let section = document.getElementById("section");

            section.innerHTML = `<h1>Joke Random</h1> 
                            </br> 
                            <p>${data.value.joke}</p>`;
        })
        .catch(err => console.log(err));
};