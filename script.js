/*VUELO

Madrid: 
1 cuota $210.000
6 cuotas + 15% interes
12 cuotas + 30% interes
*/

/*let madridprecio= 210000
let destino= "Madrid"
alert("Vuelo a" + " " + destino +" " + "ida y vuelta")
let cuotas= parseInt(prompt("Ingrese cantidad de cuotas: 1, 6 o 12"))

while (cuotas == 1 || cuotas == 6 || cuotas == 12){
    

    if(cuotas==1){
        console.log("El precio final es $"+ madridprecio)
    }
    else if(cuotas==6){
        console.log("El precio total es $"+ madridprecio*1.15)
    }
    else if(cuotas==12){
        console.log("El precio final es $" + madridprecio*1.30)
    }

    cuotas= parseInt(prompt("Ingrese cantidad de cuotas: 1, 6 o 12"))
}*/


let madridprecio= 210000
let destino= "Madrid"
alert("Vuelo a" + " " + destino +" " + "ida y vuelta")
let cuotas= parseInt(prompt("Ingrese cantidad de cuotas: 1, 6 o 12"))

do{
    if(cuotas==1){
        console.log("El precio final es $"+ madridprecio)
    }
    else if(cuotas==6){
        console.log("El precio total es $"+ madridprecio*1.15)
    }
    else if(cuotas==12){
        console.log("El precio final es $" + madridprecio*1.30)
    }

    cuotas= parseInt(prompt("Ingrese cantidad de cuotas: 1, 6 o 12"))

}while(cuotas == 1 || cuotas == 6 || cuotas == 12)




















