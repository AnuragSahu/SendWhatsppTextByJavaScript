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
var count = 100 // Change the Number to change 
</code>
<code>
var looper = 0 
</code>
<code>

for(looper=0;looper<count;looper++) 
</code>
<code>
{ 
</code>
<code>
	window.InputEvent = window.Event || window.InputEvent; 
</code>
<code>
	var d = new Date(); 
</code>
<code>
	var event = new InputEvent('input', {bubbles: true});
</code>
<code>
	var textbox= document.querySelector('#main > footer >  div._3pkkz > div._1Plpp > div > div._2S1VP.copyable-
text.selectable-text');	
</code>
<code>
	textbox.textContent = "Sample Text";
</code>
<code>
	textbox.dispatchEvent(event);
</code>
<code>
	document.querySelector("#main > footer > div._3pkkz > div > button > span").click();
</code>
<code>
} 
</code>
