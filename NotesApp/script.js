const notesContainer=document.querySelector(".notes-container");
const btn=document.querySelector(".btn");
let notes=document.querySelector(".inputbox");

// Event will trigger when click on the create button
btn.addEventListener('click',createNotes)

function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML);
    
}

//It will call whenever browser will refresh
function showNotes() {
    // localStorage.removeItem("notes");
    notesContainer.innerHTML=localStorage.getItem("notes");
    
}
showNotes();

// Functionality of  the createButton
function createNotes(e) {
    
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className="inputbox";
    inputbox.setAttribute('contenteditable','true');
    img.src="notes-app-img/images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
   
};

// Event will trigger when click on the notes-container div.
notesContainer.addEventListener("click", function(event) {
    // Check if clicked element is the delete image
    console.log(event);
    if (event.target.tagName=="IMG") {
       
        event.target.parentElement.remove();
    }
    else if(event.target.tagName=== 'P') {
        
        notes=document.querySelectorAll(".inputbox");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                 updateStorage();
            }
        })
    }

});

document.addEventListener("keydown",(event)=>{
        if(event.key=='Enter') {
            document.execCommand('insertLineBreak');
            event.preventDefault();
        }
}
)