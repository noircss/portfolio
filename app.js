const text = document.getElementById('welcome-text');

$(document).ready(function () {
    // the page has finished loading
    setTimeout(function () {
        change()
    }, 4000);
})

function change() {
    text.innerHTML = "Scroll for more";
}