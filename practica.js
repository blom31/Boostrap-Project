/*console.log("lo que quiera mostrar en la consola")
let num = 34;
let edad = "años 34";
let anios ="34 años" //con parseInt me convierte a numero los primeros caractaeres numericos nada mas
//let anios = "34 años" // con Number no me devuelve un valor nuimerico, devuel NaN, not a Number, no es un número

document.write("<br>El tipo de boleano es: " + typeof(edad))// con el typeof investigamos que tipo de variable vamos a manipuylar
//en Js no se declaran las variables por tipo
console.log(anios);
//anios = parseInt(anios)
anios = Number(anios);
console.log(anios);*/

let edad = "23 años";
document.write(edad)
document.write("<br> soy de tipo  " + typeof(edad));
//edad = parseInt(edad);
//document.write("<br> ahora soy de tipo  "+typeof(edad));
//document.write("el tipo de datos de edad  es " + typeof(edad));
/*if((isNaN(parseInt(edad)))){
    document.write("<br> entre en el if soy de tipo " + typeof(edad));
    //edad = parseInt(edad);
    document.write("<br> entre en el if despues del parseo soy " + typeof(edad));
    document.write("<br>ERROR¡¡");
}else{
    document.write("<br> no entre en el if soy de tipo " + typeof(edad));
    document.write("<br>   Su edad es:" + edad);
   
}*/
if(typeof(edad)!="number"&&(isNaN(parseInt(edad)))){
    //document.write("<br> entre al if soy de tipo  " + typeof(edad));
    //edad = parseInt(edad);
    //document.write("<br> soy de tipo  " + typeof(edad)+"  " +edad);
    document.write("ERROR¡¡")
}else{
    //document.write("<br> estoy en el else soy de tipo  " + typeof(edad));
    edad = parseInt(edad);
   // document.write("<br> soy de tipo  " + typeof(edad));
document.write("<br>su edad es "+ edad + " años")
}
// crear una variable string que reciba "Años 34"
// verificar con un condicional que tipo de dato es esa variable
// si esa variable es string entonces tratar de parsear 
// si se puede parsear mostrarlo con document.write su edad es : edad;
// si es NaN, mostrar un error en pantalla con document.write