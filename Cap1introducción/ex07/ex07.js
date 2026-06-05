/*CONDICIONALES
Funcionalidades que permiten mejorar la toma de decisiones en la ejecución del código, Estás decisiones se basan en evaluar si una o más condiciones son verdaderas o falsas, es decir, si se cumple algo en ciertas situaciones, parámetros o codiciones específicas.
Ahora bien, se puede verificar si se cumple una condición determinada tiene un resultado específico, el programa se ejecutará dentro de las instrucciones dadas.
*/

//condicional if () else {}

let nombre, edad;
nombre = prompt ("ingresa tu nombre:");
edad= prompt (( "ingresa tu edad:"));
//edad = parseInt(edad); // convertir el dato a un entero.

if (edad >= 18) {
    document.writeln("tu eres mayor de edad");
    console.log("edad digitada: ", edad, "mayor de edad")
} else {
     document.writeln("tu eres menor de edad");
    console.log("edad digitada: ", edad, "menor de edad")

}