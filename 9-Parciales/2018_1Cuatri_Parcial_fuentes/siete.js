function mostrar()
{
	var nota;
	var numeronota=0;
	var sexo;
	var contador=0;
	var acumuladornotas=0;
	var promedionotastotal;
	var notaminima=10;
	var sexonotaminima;
	var cantvaronesnotamayoroigual6=0;

	while(contador<5)
	{
		contador++;
		numeronota++;
		nota=prompt("ingrese la nota "+numeronota);
		nota=parseInt(nota);

		while(isNaN(nota)==true || nota<0 || nota>10)
		{
			nota=prompt("Error, ingrese la nota correctamente");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese el sexo");
		
		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, ingrese el sexo correcto");
		}

		if (contador==0)
		{
			notaminima=nota;
			sexonotaminima=sexo;
		}
		else
		{
			if (notaminima>nota)
			{
				notaminima=nota;
				sexonotaminima=sexo;
			}
		}

		if (nota>=6 && sexo=="m")
		{
			cantvaronesnotamayoroigual6++;
		}

		acumuladornotas+=nota;
		promedionotastotal=acumuladornotas/5;
	}
	alert("El promedio de notas total es: "+promedionotastotal+" La nota mas baja y el sexo de esa persona son: "+notaminima+" "+sexonotaminima+" La cantidad de varones que su nota fue mayor o igual a 6 es de: "+cantvaronesnotamayoroigual6);
}
