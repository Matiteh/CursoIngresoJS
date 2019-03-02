
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	
	ancho=prompt("Ingrese el ancho del rectangulo");
	ancho=parseInt(ancho);
	largo=prompt("Ingrese el largo del rectangulo");
	largo=parseInt(largo);
	
	perimetro= (largo+ancho)*2;

	alert("El perimetro del rectangulo ingresado es de: "+perimetro);
}
