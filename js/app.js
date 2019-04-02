// la calculadora debe realizar
// el cuadrado de un numero

//1. Recuperar la referencia del boton utilizando $
//2. Agregar el evento click al boton
//3. Crear la funcion para realizar el calculo
//4. El resultado se debe mostar en el elemento adecuado

// Recupera el elemento btn1
$ ("#btn1").click(function(ev){
	ev.preventDefault(); // evita que el formulario se envie al servidor
	//logica para resolver el problema
	//1. Recuperar lo que ingreso el usuario y guardar en una variable
	// o let result = Math.pow(numIngresado,2); el objeto Math tiene varias funciones matematica
	//2. Crear una variable para el resultado del calculo
	let numIngresado = $("#n1").val();
	let result = numIngresado*numIngresado;

	console.log(result);

	$(".res1")
	.html(`${numIngresado}<sup>2</sup> = ${result}`);

	$ (".res1").css("border","red solid 3px");

});

// segundo section
$("#btn2").click(function() {
	//recuperar la palabra que ingreso el usuario
	//mostrar en el div cuantas letras tiene la palabra
	let palabra = $("#palabra").val();
	console.log(palabra.length);

	$(".res2").text(palabra.length);
})

