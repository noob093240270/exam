let opr = 0;


function addMes() {
	var newMes = document.createElement('div');
	newMes.className = 'message-block' + toString(opr);
	newMes.innerHTML = `${document.querySelector('.enter-text').value}`;
	document.getElementsByClassName("chat_text")[0].appendChild(newMes);
}



