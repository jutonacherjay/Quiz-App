const createButton = document.querySelector(".create-btn");
const notesContainer = document.querySelector(".notes-container");

function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("note");
}

shownotes();

// Set data on local storage 
function updatestorage() {
    localStorage.setItem("note", notesContainer.innerHTML);
}

createButton.addEventListener('click', () => {
    let inputbox = document.createElement("p");
    inputbox.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    img.src = "./icon/del.png";
    img.onload = function () {
        // Force a reflow
        img.style.display = 'none';
        img.offsetHeight; // Trigger reflow
        img.style.display = '';
    };

    notesContainer.appendChild(inputbox).appendChild(img);
    updatestorage(); // Update storage after creating a new note
});

// Delete notes
notesContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "IMG") { // Tag name should be capital letters
        e.target.parentElement.remove();
        updatestorage();
    } else if (e.target.tagName === "P") {
        let note = document.querySelectorAll(".input-box");
        note.forEach(nt => {
            nt.onkeyup = function() {
                updatestorage();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});