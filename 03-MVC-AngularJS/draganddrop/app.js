const startText = document.getElementById('start-text');
const finishText = document.getElementById('finish-text');

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