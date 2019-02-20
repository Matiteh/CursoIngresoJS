function mostrar()
{
	//ingresa 4 importes, mostrar el mayor, mostrar cuanto es el total y si supera 100 un desc 10% , si supera los 50 un desc 5% de desc, si es menos de 50 recargo 15%

	var import1;
	var import2;
	var import3;
	var import4;
	var totalimport;
	var desc10;
	var desc5;
	var recargo15;
	var valorfinal;
	var msjdescorec;
	var importemayor;

	import1=prompt("Ingrese el primer importe");
	import1=parseInt(import1);
	import2=prompt("Ingrese el segundo importe");
	import2=parseInt(import2);
	import3=prompt("Ingrese el tercer importe");
	import3=parseInt(import3);
	import4=prompt("Ingrese el cuarto importe");
	import4=parseInt(import4);

	totalimport=import1+import2+import3+import4;

	//Buscamos el mayor importe
	if (import1>import2 && import1>import3 && import1>import4)
	{
		importemayor=import1;
	}
	else
	{
		if (import2>import1 && import2>import3 && import2>import4)
		{
			importemayor=import2;
		}
		else
		{
			if (import3>import1 && import3>import2 && import3>import4)
			{
				importemayor=import3;
			}
			else
			{
				importemayor=import4;
			}
		} 	
	} 
	
	

	//Realizamos las operaciones de descuento y recargo
	if (totalimport>100)
	{
		desc10=(totalimport*10)/100;
		valorfinal=totalimport-desc10;
		msjdescorec=("con un descuento del 10%")
	}
	else
	{
		if (totalimport<100 && totalimport>50)
		{
			desc5=(totalimport*5)/100;
			valorfinal=totalimport-desc5;
			msjdescorec=("con un descuento del 5%")
		}
		else
		{
			if (totalimport<50)
			{
				recargo15=(totalimport*15)/100;
				valorfinal=totalimport+recargo15;
				msjdescorec=("con un recargo del 15%")
			}
		}
	}
	
		
	alert("El mayor importe es de: $"+importemayor+", el total de los importes es: $"+totalimport+" y el total final de la compra "+msjdescorec+" es de: $"+valorfinal);

}
