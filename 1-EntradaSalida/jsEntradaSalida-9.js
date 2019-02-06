/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var res;

	importe=sueldo.value;

	importe=parseInt(importe);

	res=(importe*10/100)+importe;

	resultado.value=res;





	
}
