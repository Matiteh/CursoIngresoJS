function mostrar()
{
	var precioprod;
	var recargo;
	var preciofinal;

	precioprod=prompt("Ingrese el precio del producto");
	precioprod=parseInt(precioprod);
	recargo=(precioprod*10)/100;
	preciofinal=precioprod+recargo;

	alert("El precio del producto en efectivo es: $"+precioprod+", con tarjeta tiene un recargo del 10% que seria $"+recargo+" de recargo, costandole final: $"+preciofinal);

  
}
