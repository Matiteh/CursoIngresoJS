function mostrar()
{
	var precio;
	var desc;
	var prefinal;

	precio= prompt("ingrese el precio");
	desc= prompt("ingrese % de descuento");

	prefinal= (precio*desc)/100;

	elPrecioFinal.value= prefinal;
}
