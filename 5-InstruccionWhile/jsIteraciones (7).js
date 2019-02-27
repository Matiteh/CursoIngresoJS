function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeros;
	while (respuesta!="no")
	{
	contador++;
    numero=prompt("Ingrese el numero " + contador);
    numero=parseInt(numero);
    acumulador+= numero;
    respuesta=prompt("Desea ingresar mas numeros?");
	}
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN