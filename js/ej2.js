var anio, edad;

anio = parseInt(prompt("Ingrese anio de nacimiento: "));
edad = 2024-anio;
if(edad >=18){
    alert("Mayor de edad");
}else{
    alert("Menor de edad");
}

var dia;
dia = parseInt(prompt("ingrese un dua entre 1 y 7 : "));

switch(dia){
    case 1: alert("Lun");break;
    case 2: alert("Martes");break;
    case 3: alert("Miercoles");break;
    case 4: alert("Jueves");break;
    case 5: alert("Viernes");break;
    case 6: alert("Sabado");break;
    case 7: alert("Domingo");break;
    default: alert("FUERA DE RANGO");
}