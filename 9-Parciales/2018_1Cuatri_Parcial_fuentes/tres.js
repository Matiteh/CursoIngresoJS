function mostrar()
{
	var precio;
	var desc;
	var prefinal;
	var descfinal;

	precio= prompt("ingrese el precio");
	desc= prompt("ingrese % de descuento");

	descfinal= (precio*desc)/100;
	prefinal= precio-descfinal;

	elPrecioFinal.value= prefinal;
}
