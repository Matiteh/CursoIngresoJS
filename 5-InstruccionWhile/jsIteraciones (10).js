function mostrar()
{

	//declarar contadores y variables 
	
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=0;
	var respuesta="si";
	var cantnegativos=0;
	var cantpositivos=0;
	var cantceros=0;
	var cantpares=0;
	var prompositivos=0;
	var promnegativos=0;
	var diferencia=0;

	while (respuesta!="no")
	{
		contador++;
    	numero=prompt("Ingrese el numero " + contador);
    	numero=parseInt(numero);
    	respuesta=prompt("Desea ingresar mas numeros?");
    		
    	if (numero>0)
    	{
    		positivo=positivo+numero;
    		cantpositivos=cantpositivos+1;
    		prompositivos=(positivo/cantpositivos);
    	}
    	else
    	{
    		if (numero<0)
	    	{
	    		negativo=negativo+numero;
    			cantnegativos=cantnegativos+1;
    			promnegativos=(negativo/cantnegativos);
    		}
    		else
    		{
    			cantceros=cantceros+1;
    		}
    	}
    }
    if(numero % 2 == 0)
    {
    	cantpares=cantpares+1;
    }
    diferencia=(positivo-negativo);
    document.write("Suma positivos: "+positivo+", Suma negativos: " +negativo+", Cantidad negativos: "+cantnegativos+", Cantidad positivos: "+cantpositivos+", Cantidad ceros: "+cantceros+", Cantidad pares: "+cantpares+", Promedio positivos: "+prompositivos+", Promedio negativos: "+promnegativos+", Diferencia: "+diferencia);
}//FIN DE LA FUNCIÓNs