function mostrar()
{
	var numero;
	var bandera=true;
	var contador=0;
	var max=0;
	var min=0;
	// declarar variables
	
	var respuesta='si';

	while (respuesta=="si")
	{

		contador++;
    	numero=prompt("Ingrese el numero " + contador);
    	numero=parseInt(numero);
    	
	
		if (bandera)
		{
			bandera=false;
			max=numero;
			min=numero;
		}
		else
		{
			if(numero>max)
			{
				max=numero;
			}
			if (numero<min)
			{
				min=numero;
			}
		}
		respuesta=prompt("Desea ingresar mas numeros? Ingrese si para continuar");
	}

	maximo.value=max;
	minimo.value=min;
	


}//FIN DE LA FUNCIÓN