// variables

var a; // declarando variable
a = 10; // asignando valor

var b = 20; // declarando y asignando valor
b = "hola mundo" // reasignar valor 

var a = "aaaa" // redeclaración 



// GLOGAL SCOPE 

//cualquier variable que se encuentre en el documento 
//podran ser accedidas en cualquier parte del código


let fruit = "Apple"; // global 

function bestFruit () {
    console.log(fruit);
}

bestFruit() // Apple




function countries () {
    country = "Polombia"; // variable sin declarar 
    console.log(country);
}

 countries();
 console.log(country); 

//En este caso la variable country se puede acceder 
// aunque esta este localmente dentro de la funcion 
//Esto se debe a que no se a declarado la variable 
// con alguno let, var o const 


