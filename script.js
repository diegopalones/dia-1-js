// alert("Javascript funcionando correctamente")
// console.log(alert)

let variablesinvalor
console.log(variablesinvalor)

let booleano1 = true
console.log(booleano1)

let booleano2 = false
console.log(booleano2)

const pi=3.14
console.log(pi)

const tau=2*(pi)
console.log(tau)

const minombre ="Diego"
console.log(minombre)

const miNumeroFav=4
console.log(miNumeroFav)

let pruebaBooleano = "true"
console.log(pruebaBooleano)

console.log(minombre.length)

console.log(typeof miNumeroFav)

let nombre = "Eulalio";
let numberEulalio = 7
console.log("Mi nombre es " + nombre + " y mi número favorito es " + numberEulalio)

let frase = "Seré un crack en Javascript al terminar el bootcamp"
console.log(frase.toUpperCase())

let crack = "Hola soy un crack"
console.log(crack.substring(0, 6))

const tostring = miNumeroFav.toString()
console.log(toString)
console.log(typeof miNumeroFav)

const today="lunes"
console.log(`${today} es el primer día de la semana`);
const templateLiteral = `${today} es el primer día de la semana`
console.log(templateLiteral)

console.log( pi.toFixed(2))

//ARRAYS

const arrayVacio = ['']
console.log(arrayVacio)

const arrayNumeros = [1,2,3,4,5,6,7,8,9]

const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const arrayNumerosPares = [0,2,4,6,8]

const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

const holaMundo = ['Hola','mundo']

const loGuardoTodo = ['Hola','que',23,42.33,'tal']

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

console.log(loGuardoTodo.length)

loGuardoTodo[5] = ('choriso')
console.log(loGuardoTodo)

console.log(loGuardoTodo[1])

loGuardoTodo[6] = ('Euralio')
console.log(loGuardoTodo)

// Objetos

const coche = {
    marca: "Renault",
    modelo: "Megane",
    matricula: "0123 LMN",
  }

const casa = {
    codPostal: 28140,
    calle: "Martina García",
    portal: 10,
    piso: 2,
  };

  const fullStackDeveloper = {
    arrayLenguajes: ["html", "css","js"],
    arrayProyectos: ["carta en html", "página web", "tablas"],
  };  


const perro = {
    nombre: "Megan",
    raza: "setter",
    color: "blanco",
    edad: 20,
  };

  const noticia = {
    titular: "Abascal y Sanchez de copas por Chueca",
    cuerpo:
      "Vistos por Madrid en plan colegueo despues del fin de semana del orgullo celebrado en la capital",
  }; 

  const persona = {
    nombre: "Juan",
    apellidos: "Nadie",
    edad: 75,
  }; 

  console.log(persona.nombre)

console.log(fullStackDeveloper.arrayLenguajes[2])

const portatil = {
    marca: "Toshiba"
}

console.log(portatil.marca)

const concierto = {
    grupos: ["Bachoqueta Rock","El nom es lo de menos","si no cague rebente"]
}
console.log(concierto.grupos[1])

const led = {
    RGB:  ["rojo","verde","azul"]
}
console.log(led.RGB)

const O_ERROR = {
    codigo: ["Fatal error"]
}
console.log(O_ERROR.codigo)

const grupo = {
    integrantes: ["Mortadelo", "Filemón","Bacterio","Irma","Vicente","Ofelia"]
}
console.log(grupo.integrantes[3])

const Impresora = {
    tinta : {rojo: "sangre", verde: "oliva", azul: "añil"}
   
}

const nivelesDeTinta = Impresora.tinta;
console.log(nivelesDeTinta)

const Movil ={
    especificaciones:'pantalla amoled',
}

const especificaciones = Movil['especificaciones'];

console.log(especificaciones);

portatil.marca = "MSI"
console.log(portatil.marca)

concierto.grupos.push = ("Guns N' Roses")
console.log(concierto.grupos)

concierto.push = ["Nueva Fecha"]
console.log(concierto)

grupo.integrantes.pop();
console.log(grupo.integrantes.length);

 







