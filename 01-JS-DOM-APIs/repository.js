const element = document.getElementById("aside");

const param = "javascript";

fetch(`https://api.github.com/search/repositories?q=${param}`)
    .then(res => res.json())
    .then(data => {})
    .catch(err => {
        element.innerHTML = `<h2>ERROR</h2>
                            </br>
                            <p>${err}</p>`;
    });

/*
    element.innerHTML = `<h2>REPOSITORIES</h2>
                            </br>
                            <ul>
                            <li>${data.items[0].url}</li>
                            <li>${data.items[1].url}</li>
                            <li>${data.items[2].url}</li>
                            </ul>`;
                            
*/