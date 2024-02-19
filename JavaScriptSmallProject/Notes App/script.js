const notesContainer = document.querySelector(".Note-container");
const createNotes = document.querySelector("#createNotes");
let notes = document.querySelectorAll(".input-box");

createNotes.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "notes-app-img/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
