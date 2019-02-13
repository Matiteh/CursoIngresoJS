
function mostrar()
{
	var nombre1;
	var nombre2;
	var edad1;
	var edad2;
	var sumaedades;

	nombre1=prompt("Ingrese el primer nombre");
	edad1=prompt("Ingrese su edad");
	edad1=parseInt(edad1);
	nombre2=prompt("Ingrese el segundo nombre");
	edad2=prompt("Ingrese su edad");
	edad2=parseInt(edad2);

	sumaedades=edad1+edad2;

	alert("Ustedes son "+nombre1+" y "+nombre2+", sus edades son "+edad1+" y "+edad2+",y la suma de sus edades es: "+sumaedades);
}
