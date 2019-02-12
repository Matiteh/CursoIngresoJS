function mostrar()
{
	var valor;
	var maxymin;

	maxymin= 11-1
	
	valor=Math.random()*maxymin;
	
	valor=Math.round(valor);

	if(valor>=9 && valor<=10)
	{
		alert("EXCELENTE: "+valor);
	}	
	if(valor>=4 && valor<9)
	{
		alert("APROBÒ: "+valor);
	}
	if(valor<4 && valor>=1)
	{
		alert("Vamos,la proxima se puede: "+valor);
	}

	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN