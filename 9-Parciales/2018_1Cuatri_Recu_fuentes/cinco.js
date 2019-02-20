function mostrar()
{
	/*cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago, si es con tarjeta visa 10%
	, si es por paypal 15%, si es por mercado pago 10%, en efectivo 20%, cualquier otro medio 5%.
	si compraste el paquete "todo incluido" y pagas con paypal, se te suma un 10% al descuento. si pagas en efectivo,
	tenes varias opciones, el paquete "solo desayunos" te suma un 10% el descuento, si el paquete es "todo incluido" te suna un 15%
	y para el resto de los paquetes no tiene descuento adicional*/

	var preciohabitacion;
	var paquete;
	var metododepago;
	var desc1;
	var descfinal;
	var preciofinal;
	


	preciohabitacion=prompt("Ingrese el precio de la habitacion");
	paquete=prompt("Ingrese el paquete que eligiò");
	preciohabitacion=parseInt(preciohabitacion);
	metododepago=prompt("Ingrese el metodo de pago");

	switch (metododepago)
	{
		case "visa":
		case "mercado pago":
			desc1=10;
			break;
		case "paypal":
			switch (paquete)
			{
				case "todo incluido":
					desc1=25;
					break;
				default:
					desc1=15;
					break;
			}
		case "efectivo":
			switch(paquete)
			{
				case "solo desayunos":
					desc1=30;
					break;
				case "todo incluido":
					desc1=35;
					break;
				case "otro paquete":
					desc1=20;
					break;
			}
		case "otro medio":
			desc1=5;
			break;
	}

	descfinal=(preciohabitacion*desc1)/100;
	preciofinal=preciohabitacion-descfinal;

	alert(preciofinal);

}
