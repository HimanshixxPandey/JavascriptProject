let popup=document.getElementById("popup");
let submitBtn=document.querySelector(".btn");
let okBtn=document.getElementById("ok");
submitBtn.addEventListener('click',openPopup);
okBtn.addEventListener('click'.closePopup);
console.log(popup);
function openPopup() {
    console.log('djsd');
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}