function mostrar()
{	
	var contador=0;
	var notas;
	var sexo;
	var sumanotas=0;
	var promedionotas;
	var notaminima;
	var sexonotaminima;
	var cantvaronesmayora6=0;

	while (contador<5)
	{	
		notas=prompt("Ingrese la nota");
		notas=parseInt(notas);
		while (isNaN(notas)==true || notas<0 && notas>10)
		{
			notas=prompt("Error, Ingrese la nota");
			notas=parseInt(notas);
		}
		sexo=prompt("Ingrese el sexo");
		while (isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, Ingrese el sexo");
		}

		if (contador==0)
		{
			notaminima=notas;
			sexonotaminima=sexo;
		}
		else
		{
			if (notaminima>notas)
			{
				notaminima=notas;
				sexonotaminima=sexo;
			}
		}

		if (notas>5 && sexo=="m")
		{
			cantvaronesmayora6=cantvaronesmayora6+1;
		}

		sumanotas+=notas
		promedionotas=sumanotas/5
		contador++;
	}
	alert("Promedio notas: "+promedionotas+", Nota mas baja: "+notaminima+" y su sexo: "+sexonotaminima+", Cantidad de varones con nota mayor o igual a 6: "+cantvaronesmayora6);
}
