// Gauti modalinį elementą
var modal = document.getElementById('simple-modal');

// Paleisti modalą su mygtuku
var modalbtn = document.getElementById('modalbtn');

// Uždarymo mygtukas

var closebtn = document.getElementById('closebtn');

// Listen for button
modalbtn.addEventListener('click', openModal)

// Modalo atidarymas

function openModal() {
    modal.style.display = 'block';
}