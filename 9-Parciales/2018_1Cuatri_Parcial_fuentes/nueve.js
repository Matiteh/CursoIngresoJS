function mostrar()
{
	var contador=0;
	var respuesta="si";
	var nombreproducto;
	var pesoproducto;
	var tempproducto;
	var cantproductos=0;
	var canttemppares=0;
	var productomaspesado=1;
	var productomaspesadonombre;
	var productomaspesadotemp=30;
	var cantproductosbajo0grados=0;
	var promediopesoproductos;
	var acumuladorpeso=0;
	var	pesomaxbajocero=1;
	var nombreproductomaxbajocero;
	var pesominbajocero=1000;
	var nombreproductominbajocero;
	var	pesomaxfinalbajocero=0;
	var	pesominfinalbajocero=0;

	while (respuesta!="no")
	{	
		contador++;
    	nombreproducto=prompt("Ingrese el nombre del producto:");	
    	while (isNaN(nombreproducto)==false)
    	{
    		nombreproducto=prompt("Error, Ingrese el nombre del producto");
    	}
    	pesoproducto=prompt("Ingrese el peso del producto: ");
    	pesoproducto=parseInt(pesoproducto);
    	while (isNaN(pesoproducto)==true || pesoproducto<1 || pesoproducto>100)
    	{
    		pesoproducto=prompt("Error, Ingrese un numero entre 1 y 100");
    		pesoproducto=parseInt(pesoproducto);	
    	}
    	tempproducto=prompt("Ingrese la temperatura del producto: ");
    	tempproducto=parseInt(tempproducto);
    	while (isNaN(tempproducto)==true || tempproducto<-30 || tempproducto>30)
    	{
    		tempproducto=prompt("Error, Ingrese un numero entre -30 y 30");
    		tempproducto=parseInt(tempproducto);	
    	}
    	respuesta=prompt("Desea ingresar mas datos?");

    	if(tempproducto % 2 == 0)
    	{
    		canttemppares++;
    	}

    	if (tempproducto<0)
    	{
    		cantproductosbajo0grados++;
    		if (pesomaxbajocero<pesoproducto)
    		{
    			pesomaxfinalbajocero=pesoproducto;
    			nombreproductomaxbajocero=nombreproducto;
    		}
    		if (pesominbajocero>pesoproducto)
    		{
    			pesominfinalbajocero=pesoproducto;
    			nombreproductominbajocero=nombreproducto;
    		}
    	}

    	if(pesoproducto>productomaspesado)
    	{	
    		productomaspesado=pesoproducto;
    		productomaspesadonombre=nombreproducto;
    		productomaspesadotemp=tempproducto;
    	}

    cantproductos++;
    acumuladorpeso+=pesoproducto;	
	promediopesoproductos=acumuladorpeso/cantproductos;
	}
	document.write("La cantidad de temperaturas pares es: "+canttemppares+" El nombre del producto mas pesado y su temperatura son: "+productomaspesadonombre+"  "+productomaspesadotemp+" La cantidad de productos que se mantienen en temperaturas menores a 0 grados son: "+cantproductosbajo0grados+" El promedio de peso de todos los productos es: "+promediopesoproductos+" El peso maximo y minimo de los productos en temperaturas menores a 0 grados son: Maximo= "+pesomaxfinalbajocero+" Minimo= "+pesominfinalbajocero);
}