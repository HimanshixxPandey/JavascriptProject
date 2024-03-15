const passwordField=document.getElementById("Password");
const btn=document.querySelector(".btn");
const copyBtn=document.querySelector("[data-copy-btn]")
const copyMsg=document.querySelector("[data-copy-msg]");
let len=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()-+{}[]";

const allChar=upperCase+lowerCase+symbol;

function generatePassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
     
    while(len>password.length)
    {
        password+= allChar[Math.floor(Math.random()*allChar.length)];

    }
    passwordField.value=password;


}



async function copyContent(){
    try {
        
      await navigator.clipboard.writeText(passwordField);
      copyMsg.innerText="Copied!"
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
btn.addEventListener('click',generatePassword)

copyBtn.addEventListener('click',copyContent);