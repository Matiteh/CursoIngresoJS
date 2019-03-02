function mostrar()
{
	var numero1;
	var numero2;
	var mensaje;
	var resultadoresta;
	var resultadosuma;

	numero1=prompt("ingrese el primer numero: ");
	numero1=parseInt(numero1);
	numero2=prompt("ingrese el segundo numero: ");
	numero2=parseInt(numero2);

	if (numero1==numero2)
	{
		alert(numero1+"  "+numero2);
	}
	else
	{
		if(numero1>numero2)
		{
			resultadoresta=numero1-numero2;
			alert(resultadoresta);
		}
		else
		{
			resultadosuma=numero1+numero2;
			if(resultadosuma>10)
			{
				alert("la suma es: "+resultadosuma+" y supero el 10");
			}
		}
	}
}
