const vuelos = [
    { pais: "madrid", precio: 250000 },
    { pais: "los angeles", precio: 350000 },
    { pais: "new York", precio: 310000 },
    { pais: "tailandia", precio: 410000 },
    { pais: "australia", precio: 470000 },
    { pais: "tokio", precio: 510000 },
]

let elegirprecio = parseInt(prompt("Ingrese el precio máximo a pagar por su vuelo."))

let vuelosEconomicos = vuelos.filter(vuelo => vuelo.precio <= elegirprecio)

let salida = ''
for (const vueloEconomico of vuelosEconomicos) {
    salida = salida + vueloEconomico.pais + " " + vueloEconomico.precio + "\n"
}
alert("Los vuelos disponibles son: " + "\n" + salida)





/*let pais1= "madrid"
let pais2= "los angeles"
let pais3= "new york"
let pais4= "tailandia"
let pais5= "australia"
let pais6= "tokio"

let paisesconcatenados = pais1 + pais2 + pais3 + pais4 + pais5 + pais6*/




    /*if (elegirprecio == economicos){
        alert("Los vuelos mas economicos son " economicos
        );
        
    } else(elegirprecio == "z"){
        alert("Nuestros destinos son Madrid: $250.000, New York: $310.000, Los Angeles: $350.000, Tailandia: $410.000, Australia: $470.000, Tokio: $510.000");
    }
}

precioeconomico()
alert("Los vuelos mas economicos son Madrid: $250.000, New York: $310.000 y Los Angeles: $350.000")*/










