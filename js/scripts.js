//scripts.js
$(function(){
	console.log('DOM loaded - you can have fun');
});

var btn = document.getElementsByClassName('button');
for ( var i = 0 ; i < btn.length ; i++) {
var buttonText = btn[i].innerText;
console.log(buttonText);
} 