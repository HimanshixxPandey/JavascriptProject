const success=document.getElementById("success");
const error=document.getElementById("error");
const invalid=document.getElementById("invalid")
let toastbox=document.getElementById("toastBox")
let successMsg='<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let erorMsg='<i class="fa-solid fa-circle-xmark"></i>Please fix  the  error';
let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid input,Check again';
console.log(success,error,invalid);
success.addEventListener('click',()=>{showToast(successMsg)});
error.addEventListener('click',()=>{showToast(erorMsg)});
invalid.addEventListener('click',()=>{showToast(invalidMsg)});

function showToast(msg) {
    //   console.log(e);
    let divELement=document.createElement('div');
    divELement.classList.add("toast");
    divELement.innerHTML=msg;
    toastbox.appendChild(divELement);

    if(msg.includes('error')) {
        divELement.classList.add('error');
    }
    else if(msg.includes('Invalid')) {
        divELement.classList.add('invalid');
    }

    setTimeout(()=>{
         divELement.remove();
    },6000);
}