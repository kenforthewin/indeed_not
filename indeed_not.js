//copy this code into your browser console

var bs_indeed = document.querySelectorAll('span.sdn'); 
for (i = 0; i < bs_indeed.length; i++) { 
	//No I don't want to work at Amazon
	var element = bs_indeed[i]; element.parentElement.style.display = 'none'; 
}