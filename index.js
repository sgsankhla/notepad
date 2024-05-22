const noteContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll(".input-box")


function showNote(){
    noteContainer.innerHTML = localStorage.getItem("notes")
}
showNote()

function updateStorae(){
    localStorage.setItem("notes" , noteContainer.innerHTML);
}

createBtn.addEventListener('click' , ()=>{
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click" ,function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorae();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-boc");
        notes.forEach(nt =>{
            nt.onKeyup = function(){
                updateStorae();
            }
        })
    }
})