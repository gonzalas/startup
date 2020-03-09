const button = document.getElementById("alert-button");

function showAlert() {
    alert("Alert button clicked!");
}

button.addEventListener("click", showAlert);