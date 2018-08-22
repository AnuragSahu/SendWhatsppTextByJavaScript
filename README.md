# Send Whatspp Text By JavaScript
Here is small JS Script for sending a message in a loop.

Steps to Do it:-

1. Open Whatsapp web on your browser Chrome (https://web.whatsapp.com/)
2. Scan the QR Code
3. Select the person you want to send the text
4. press clt + shift + j
5. In developer Console paste the code
6. Change the text "Sample Texts" in the code by your message like "Hey Bro!!"
7. Send Enter
Note Make sure your mobile has Internet Connection


<code>
var count = 100 // Change the Number to change <br>
var looper = 0 <br>
for(looper=0;looper<count;looper++) <br>
{ <br>
	window.InputEvent = window.Event || window.InputEvent; <br>
	var d = new Date(); <br>
	var event = new InputEvent('input', {bubbles: true}); <br>
	var textbox= document.querySelector('#main > footer >  div._3pkkz > div._1Plpp > div > div._2S1VP.copyable-text.selectable-text');	<br>
	textbox.textContent = "Sample Text"; <br>
	textbox.dispatchEvent(event); <br>
	document.querySelector("#main > footer > div._3pkkz > div > button > span").click(); <br>
} <br>
				    </code>
