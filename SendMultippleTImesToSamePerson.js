// This piece of code is written by Anurag Sahu
// Code for sending a text to someone on whatsapp via Whatsapp web multiple time

// Steps to do it
// 1. Open Whatsapp web on your browser Chrome (https://web.whatsapp.com/)
// 2. Scan the QR Code
// 3. Select the person you want to send the text
// 4. press clt + shift + j
// 5. In developer Console paste the code
// 6. Change the text "Sample Texts" in the code by your message like "Hey Bro!!"
// 7. Send Enter
// Note Make sure your mobile has Internet Connection


var message = prompt("Enter the message");
var count = prompt("Enter the Number of times"); // Change the Number to change 
var looper = 0;
for(looper=0;looper<count;looper++)
{
	window.InputEvent = window.Event || window.InputEvent;
	var d = new Date();
	var event = new InputEvent('input', {bubbles: true});
	var textbox= document.querySelector('#main >footer>div._2i7Ej>div._13mgZ>div._3FeAD>div._3u328 ');
	
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	var b = document.querySelectorAll('#main >footer>div._2i7Ej>div.hnQHL')[1];
	b.querySelector('button	').click();
}
