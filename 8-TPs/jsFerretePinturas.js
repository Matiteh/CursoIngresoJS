/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temp;
	var res;

	temp=Temperatura.value;
	temp=parseInt(temp);
	res=temp-32;

	alert("La temperatura en Centigrados es: "+res);

}

function CentigradosFahrenheit () 
{
	var temp;
	var res;

	temp=Temperatura.value;
	temp=parseInt(temp);
	res=temp+32;

	alert("La temperatura en Fahrenheit es: "+res);
}
