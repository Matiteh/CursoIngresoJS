function mostrar()
{
	var edads;
	var estado;

	edads=edad.value;
	edads=parseInt(edads);
	estado=estadoCivil.value;

	if(edads<18)
	{
		if(estado!="Soltero")
		{
			alert("usted es muy pequeño como para no ser soltero");

		}

	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN