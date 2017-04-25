function convertirF(){
	var cel = parseFloat(document.getElementById('celsius').value);//recibe el numero ingresado
	var res = ((cel * 9 / 5) + 32).toFixed(2);//realiza calculo
	document.getElementById('fa').value=res;//se imprime resultado en cuadrado.

};