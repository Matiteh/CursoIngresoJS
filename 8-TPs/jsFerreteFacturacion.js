/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var produno;
	var proddos;
	var prodtres;
	var res;

	produno=PrecioUno.value;
	proddos=PrecioDos.value;
	prodtres=PrecioTres.value;

	produno=parseInt(produno);
	proddos=parseInt(proddos);
	prodtres=parseInt(prodtres);

	res=produno+proddos+prodtres;

	alert("La suma del precio de los 3 productos es: "+res);



}
function Promedio () 
{
	var produno;
	var proddos;
	var prodtres;
	var res;

	produno=PrecioUno.value;
	proddos=PrecioDos.value;
	prodtres=PrecioTres.value;

	produno=parseInt(produno);
	proddos=parseInt(proddos);
	prodtres=parseInt(prodtres);

	res=(produno+proddos+prodtres)/3;

	alert("El promedio del precio de los 3 productos es: "+res);

}
function PrecioFinal () 
{
	var produno;
	var proddos;
	var prodtres;
	var resparcial;
	var resfinal;
	var IVA;

	produno=PrecioUno.value;
	proddos=PrecioDos.value;
	prodtres=PrecioTres.value;

	produno=parseInt(produno);
	proddos=parseInt(proddos);
	prodtres=parseInt(prodtres);

	resparcial=produno+proddos+prodtres;
	IVA=(resparcial*21)/100;
	resfinal=resparcial+IVA;


	alert("La suma del precio de los 3 productos es: "+resfinal);
}