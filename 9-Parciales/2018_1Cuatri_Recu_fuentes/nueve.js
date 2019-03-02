function mostrar()
{
    var contador=0;
    var respuesta="si";
    var nombreanimal;
    var pesoanimal;
    var temphabitat;
    var cantanimales=0;
    var canttemppares=0;
    var animalmaspesado=1;
    var animalmaspesadonombre;
    var animalmaspesadotemp=30;
    var cantanimalesbajo0grados=0;
    var promediopesoanimales;
    var acumuladorpeso=0;
    var pesomaxbajocero=1;
    var nombreanimalmaxbajocero;
    var pesominbajocero=1000;
    var nombreanimalminbajocero;
    var pesomaxfinalbajocero=0;
    var pesominfinalbajocero=0;

    while (respuesta!="no")
    {   
        contador++;
        nombreanimal=prompt("Ingrese el nombre del animal:");   
        while (isNaN(nombreanimal)==false)
        {
            nombreanimal=prompt("Error, Ingrese el nombre del animal");
        }
        pesoanimal=prompt("Ingrese el peso del animal: ");
        pesoanimal=parseInt(pesoanimal);
        while (isNaN(pesoanimal)==true || pesoanimal<1 || pesoanimal>1000)
        {
            pesoanimal=prompt("Error, Ingrese un numero entre 1 y 1000");
            pesoanimal=parseInt(pesoanimal);    
        }
        temphabitat=prompt("Ingrese la temperatura del habitat: ");
        temphabitat=parseInt(temphabitat);
        while (isNaN(temphabitat)==true || temphabitat<-30 || temphabitat>30)
        {
            temphabitat=prompt("Error, Ingrese un numero entre -30 y 30");
            temphabitat=parseInt(temphabitat);  
        }
        respuesta=prompt("Desea ingresar mas datos?");

        if(temphabitat % 2 == 0)
        {
            canttemppares++;
        }

        if (temphabitat<0)
        {
            cantanimalesbajo0grados++;
            if (pesomaxbajocero<pesoanimal)
            {
                pesomaxfinalbajocero=pesoanimal;
                nombreanimalmaxbajocero=nombreanimal;
            }
            if (pesominbajocero>pesoanimal)
            {
                pesominfinalbajocero=pesoanimal;
                nombreanimalminbajocero=nombreanimal;
            }
        }

        if(pesoanimal>animalmaspesado)
        {   
            animalmaspesado=pesoanimal;
            animalmaspesadonombre=nombreanimal;
            animalmaspesadotemp=temphabitat;
        }

    cantanimales++;
    acumuladorpeso+=pesoanimal; 
    promediopesoanimales=acumuladorpeso/cantanimales;
    }
    document.write("La cantidad de temperaturas pares es: "+canttemppares+" El nombre del animal mas pesado y su temperatura de habitat son: "+animalmaspesadonombre+"  "+animalmaspesadotemp+" La cantidad de animales que viven en menos de 0 grados son: "+cantanimalesbajo0grados+" El promedio de peso de todos los animales es: "+promediopesoanimales+" El peso maximo y minimo de los animales en temperaturas menores a 0 grados son: Maximo= "+pesomaxfinalbajocero+" Minimo= "+pesominfinalbajocero);
}
