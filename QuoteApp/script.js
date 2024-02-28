const url='https://api.quotable.io/random'
const newQuote=document.getElementById("newquote");
const tweet=document.getElementById("tweet");
const quoteBox=document.querySelector('.quotebox');
const block=document.getElementById('block')
 
tweet.addEventListener('click',sendTweet)
newQuote.addEventListener('click',generateQuote);
async function generateQuote() {
    let data= await fetch(url);
    let response= await data.json();
    let blockQuoteTag=quoteBox.getElementsByTagName('blockquote')[0];
    blockQuoteTag.innerHTML=response.content;
    let spanTag=quoteBox.getElementsByTagName('span')[0];
    spanTag.innerHTML=response.author;


   
}


function sendTweet() {
    window.open("https://twitter.com/intent/tweet?text=" + block.innerHTML, 'tweetwindow', "width=600,height=300");
}