function mostrar()
{
	var planeta;
	planeta=prompt("Ingrese un planeta del sistema solar");

	switch (planeta)
	{
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluto":
		alert("Acá hace mas frio");
		break;

		case "mercurio":
		case "venus":
		alert("Aca hace mas calor");
		break;

		default:
		alert(planeta+" No es un planeta valido");
		break;
	}
}
