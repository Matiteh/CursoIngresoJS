function mostrar()
{
	var contador=0;
	var respuesta="si";
	var letra;
	var numero;
	var cantpares=0;
	var cantimpares=0;
	var cantceros=0;
	var promediopositivo=0;
	var sumanegativos=0;
	var acumulador=0;
	var cantpositivos=0;
	var nummin=100;
	var nummax=-100;
	var letramin;
	var letramax;

	while (respuesta!="no")
	{	
		contador++;
    	letra=prompt("Ingrese la letra:");	
    	while (isNaN(letra)==false)
    	{
    		letra=prompt("Error, Ingrese la letra");
    	}
    	numero=prompt("Ingrese el numero entre -100 y 100:");
    	numero=parseInt(numero);
    	while (isNaN(numero)==true || numero<-100 || numero>100)
    	{
    		numero=prompt("Error, Ingrese un numero entre -100 y 100");
    		numero=parseInt(numero);	
    	}
    	respuesta=prompt("Desea ingresar mas datos?");

    	if(numero % 2 == 0)
    	{
    		cantpares++;
    	}
    	else
    	{
    		cantimpares++;
    	}

    	if(numero>0)
    	{
    		acumulador=acumulador+numero;
    		cantpositivos++;
    		
    	}
    	else
    	{
    		if(numero<0)
    		{
    			sumanegativos=sumanegativos+numero;
    		}
    		else
    		{
    			cantceros=cantceros+1;
    		}
    	}

        if (nummax<numero)
        {
            nummax=numero;
            letramax=letra;
        }
       
        if (nummin>numero)
        {
            nummin=numero;
            letramin=letra;
        }

    	
	promediopositivo=acumulador/cantpositivos;
	}
	document.write("La cantidad de números pares son: "+cantpares+" La cantidad de números impares son: "+cantimpares+" La cantidad de ceros son: "+cantceros+" El promedio de todos los números positivos ingresados son: "+promediopositivo+" La suma de todos los números negativos son: "+sumanegativos+" El número  máximo "+nummax+" y su letra "+letramax+" el numero minimo "+nummin+" y su letra "+letramin);
}