/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var valor;
	var res;

	valor=importe.value;

	valor=parseInt(valor);

	res=valor-(valor*25/100);

	resultado.value=res;
}
