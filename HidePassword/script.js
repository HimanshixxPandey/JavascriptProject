const eyeIcon=document.getElementById('eyeIcon');
const password=document.getElementById('password');
eyeIcon.addEventListener('click' ,Show);
function Show() {
    if(password.type =="password") {
        password.type="text";
        eyeIcon.src="Images/eye-open.png"
    }
    else {
        password.type="password"
        console.log(password.type);
        eyeIcon.src="Images/eye-close.png"
    }
}