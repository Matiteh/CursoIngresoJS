/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var resultado;

	num1=numeroDividendo.value;
	num2=numeroDivisor.value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	resultado=num1%num2;

	alert("El resto de esta division es "+resultado);
	
	
}
