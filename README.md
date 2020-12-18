# Send Whatspp Text By JavaScript
Here is small JS Script for sending a message in a loop.

Steps to Do it:-

1. Open Whatsapp web on your browser Chrome (https://web.whatsapp.com/)
2. Scan the QR Code
3. Select the person you want to send the text
4. press clt + shift + j
5. In developer Console paste the code and press Enter.
6. Enter the text you want to send repeatedly in the alert box.
7. Now enter the number of times you want to send it.

Note Make sure your mobile has Internet Connection

```
var message = prompt("Enter the message");
var count = prompt("Enter the Number of times"); // Change the Number to change 
var looper = 0;
for(looper=0;looper<count;looper++)
{
	window.InputEvent = window.Event || window.InputEvent;
	var d = new Date();
	var event = new InputEvent('input', {bubbles: true});
	var textbox= document.querySelector('#main > footer > div._3SvgF._1mHgA.copyable-area > div.DuUXI > div > div._1awRl.copyable-text.selectable-text');
	
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	var b = document.querySelectorAll('#main > footer > div._3SvgF._1mHgA.copyable-area > div:nth-child(3) > button')[0]
	b.click();
}
```
