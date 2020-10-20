function calc(event){
	var firstElement = document.getElementById("first");
	var secondElement = document.getElementById("second");
	var resultElement = document.getElementById("result");
	
	result = Number(firstElement.value) + Number(secondElement.value);
	resultElement.innerHTML = result;
}

