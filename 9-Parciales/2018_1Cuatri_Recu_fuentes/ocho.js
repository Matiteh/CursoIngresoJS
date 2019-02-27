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
	var nummin;
	var nummax;
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
    	while (isNaN(numero)==true || numero<(-100) && numero>100)
    	{
    		numero=prompt("Error, Ingrese un numero enter -100 y 100");
    		numero=parseInt(numero);	
    	}
    	respuesta=prompt("Desea ingresar mas datos?");

    	if(numero % 2 == 0)
    	{
    		cantpares=cantpares+1;
    	}
    	else
    	{
    		cantimpares=cantimpares+1;
    	}

    	if(numero>0)
    	{
    		acumulador=acumulador+numero;
    		cantpositivos=cantpositivos+1;
    		
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

    	if(contador==0)
    	{
    		nummin=numero;
    		letramin=letra;
    	}
    	else
    	{
    		if (nummin>numero)
    		{
    			nummin=numero;
    			letramin=letra;
    		}
    	}

    	if(contador==0)
    	{
    		nummax=numero;
    		letramax=letra;
    	}
    	else
    	{
    		if (nummax<numero)
    		{
    			nummax=numero;
    			letramax=letra;
    		}
    	}
	promediopositivo=acumulador/cantpositivos;
	}
	document.write(cantpares+""+cantimpares+""+cantceros+""+promediopositivo+""+sumanegativos+""+nummin+""+letramin+""+nummax+""+letramax);
}
