function mostrar()
{
	var cantproductos;
	var precioproductostotal;
	var mediopago;
	var desc1;
	var desc2;
	var recargo;
	var preciofinal;
	var preciofinal2;

	cantproductos=prompt("Ingrese la cantidad de productos que compró");
	cantproductos=parseInt(cantproductos);
	precioproductostotal=prompt("Ingrese el precio total de los productos");
	precioproductostotal=parseInt(precioproductostotal);
	mediopago=prompt("Pagara con 1.Tarjeta o 2.Efectivo?");
	mediopago=parseInt(mediopago);

	if(cantproductos>2)
	{
		desc1=(precioproductostotal*10)/100;
		preciofinal=precioproductostotal-desc1;

		if(precioproductostotal>=2000)
		{
			desc2=(preciofinal*15)/100;
			preciofinal=preciofinal-desc2;
		}
			
		if(mediopago==1)
		{
			recargo=(preciofinal*10)/100;
			preciofinal2=preciofinal+recargo;	
			alert("El precio total a pagar es de: $"+preciofinal2);	
		}
		else
		{
			if(mediopago==2)
			{
			alert("El precio total a pagar es de: $"+preciofinal);
			}
		} 
		
	}
	else
	{
		if(mediopago==1)
		{
			recargo=(precioproductostotal*10)/100;
			preciofinal=precioproductostotal+recargo;
			alert("El precio total a pagar es de: $"+preciofinal);
		}
		else
		{
			if(mediopago==2)
			{
				alert("El precio total a pagar es de: $"+precioproductostotal);
			}
		}
	} 


}
