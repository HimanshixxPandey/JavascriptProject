const btn=document.getElementById("Generate");
const qrText=document.getElementById("qrtext");
const imgDiv=document.querySelector(".img-box");
const qrImage=document.getElementById("qr-image");

const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hello"

btn.addEventListener('click',generateQR);


function generateQR() {
    console.log(qrText.value.length);
    if(qrText.value.length>0) {
        qrImage.src="https://quickchart.io/qr?text="+qrText.value;
        imgDiv.classList.add('showimg');

    }

    else{
        qrText.classList.add("error");
        console.log(qrText);
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
   

}