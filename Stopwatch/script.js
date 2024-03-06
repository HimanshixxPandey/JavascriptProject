const dTime=document.getElementById('displayTime')
const startBtn=document.getElementById('start');
const stopBtn=document.getElementById('stop');
const resetBtn=document.getElementById('reset');

let [s,m,h]=[0,0,0];
let timer=null;

startBtn.addEventListener('click',watchStart);
resetBtn.addEventListener('click',watchReset);
stopBtn.addEventListener('click',watchStop);

// Every second this function call 
function stopwatch() {
    s++;
    if(s==60) {
        s=0;
        m++;
        if(m==60) {
            m=0;
            h++;
        }
    } 

    let hours=h<10?"0"+h:h;
    let min=m<10?"0"+m:m;
    let sec=s<10?"0"+s:s;
    dTime.innerHTML=hours+":"+min+":"+sec;
}


//  Start the timer
function watchStart() {

    if(timer !=null) {
       clearInterval(timer);
    }
    timer =setInterval((stopwatch), 1000);

}
//Reset the timer
function watchReset() {
    clearInterval(timer);
    [s, m, h] = [0, 0, 0]; 
    dTime.innerHTML = '00:00:00'; 
}

// Stop the timer
function watchStop() {
    clearInterval(timer);
    
}

