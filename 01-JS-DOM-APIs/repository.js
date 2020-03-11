const element = document.getElementById("aside");

let param = "javascript";

function getValue() {
    param = document.getElementById("search-input").value;

    fetch(`https://api.github.com/search/repositories?q=${param}`)
        .then(res => res.json())
        .then(data => {
            element.innerHTML = `<h2>REPOSITORIES</h2></br>`;
            const ul = document.createElement("ul");
            ul.id = "lista";
            document.body.appendChild(element);
            element.appendChild(ul);
            data.items.forEach(i => {
                let newElement = document.createElement("li");
                ul.appendChild(newElement);
                newElement.innerHTML = i.url;
            });
        })
        .catch(err => {
            element.innerHTML = `<h2>ERROR</h2>
                            </br>
                            <p>${err}</p>`;
        });
}