const userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split('T')[0];
const btn=document.getElementById("btn");
const p=document.getElementById("age")

btn.addEventListener('click',calculateAge);

function calculateAge() {
   let birthDate = new Date(userInput.value);
   let currentDate = new Date();

   let y3 = currentDate.getFullYear() - birthDate.getFullYear();
   let m3 = currentDate.getMonth() - birthDate.getMonth();
   let d3 = currentDate.getDate() - birthDate.getDate();

   if (m3 < 0 || (m3 === 0 && currentDate.getDate() < birthDate.getDate())) {
       y3--;
       m3 = 12 + m3;
   }
   p.innerHTML = `Your age is <span>${d3}</span> Days <span>${m3}</span> months <span>${y3}</span> year`;
   p.style.display = 'block';
   
}




function getDaysInMonth(year,month) {
    return new Date(year,month,0).getDate();
}