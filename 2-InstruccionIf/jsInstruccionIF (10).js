function mostrar()
{
	var valor;
	
	valor=Math.floor((Math.random()*11)+1);
	

	if(valor>=9)
	{
		alert("EXCELENTE: "+valor);
	}	
	else
	{
		if(valor>=4)
		{
		alert("APROBÓ: "+valor);
		}
		else
		{
			if(valor<=3)
			{
			alert("Vamos,la proxima se puede: "+valor);
			}
		}
	
	}
	
		
	

	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN