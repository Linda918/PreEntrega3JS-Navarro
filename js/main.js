//JavaScript//

const sencillo = 50;
const extra = 55;
let cliente;

//Pregunta para saber si se le puede dar servicio
function preguntaInicial() {
  let opcion = Number(
    prompt(
      "Bienvenido a El Inge Waffles \nRecuerda que solo damos servicio en San Pablo \n¿Usted es de San Pablo? \nSeleccione un numero \n1.- Si  \n 2.- No"
    )
  );
  if (opcion > 2) {
    alert(
      "INGRESE UN NUMERO VALIDO, INTENTE NUEVAMENTE"
    );
  } else {
    return opcion;
  }
}

// Ingresara los datos del usuario
function ingresoCliente() {
  
  //Nombre del usuario
  const NOMBRE = prompt(
    "Para procesar tu compra necesitamos los siguientes datos, ingresa tu nombre:"
  );

  //Edad del usuario
  let EDAD = prompt(
    "Ingresa tu edad:"
  );

  //Numero de telefono del usuario
  let NUMERO = prompt(
    "Ingresa tu numero de telefono:"
  );

  //Correo electronico del usuario
  let CORREO = prompt(
    "Por favor ingresa tu correo electrónico:"
  );

  //Se guardan los datos del cliente
  class nuevoCliente {
    constructor(nombre, edad, numero, correo) {

      this.nombre = nombre;
      this.edad = edad;
      this.numero = numero;
      this.correo = correo;
    }
  }
  
  cliente = new nuevoCliente(NOMBRE,EDAD,NUMERO,CORREO);
  console.log(cliente);

  // Muestra los datos del cliente
  datosCliente(cliente);

  //Muestra el mensaje de bienvenida
  presentacionCliente(cliente);

}

// Muestra los datos cargados por el usuario
function datosCliente(cliente) {
  alert('- Nombre: ' + cliente.nombre + '\n- Edad: ' + cliente.edad + '\n- Numero de telefono: ' + cliente.numero +
    '\n- Correo: ' + cliente.correo 
  );
}

// Brinda un mensaje de bienvenida el sitio
function presentacionCliente(cliente) {
  alert(
    'Bienvenid@ ' + cliente.nombre + 
    ' es un placer atenderte, nos encantan los waffles y nos apasiona la ingeniería esperamos que te gusten ya que son hechos con mucho amor'
  );
}

function ingresarWaffles() {
  let waffles = Number(
    prompt("¿Quiere comprar un waffle sencillo o con igreiente extra?: \n1.-Sencillo \n2.-Extra")
  );
  if (waffles < 2) {
    return waffles;
  } else {
    alert(
      "INGRESE UN NUMERO VALIDO, INTENTE NUEVAMENTE"
    );
  }
}

function ingresarCantidad() {
  let cantidad = Number(prompt("¿Cuántos Waffles desea comprar?: \nRecuerde que solo es un máximo de 5"));
  if (!isNaN(cantidad)) {
    return cantidad;
  } else {
    alert(
      "INGRESE UN NUMERO VALIDO, INTENTE NUEVAMENTE"
    );
  }
}

function waffleTotal(cant, waff) {
  let total = 0;
  if (waff === 1) {
    total = cant * sencillo;
  }
  if (waff === 2) {
    total = cant * extra;
  }
  return total;
}

let operacion = preguntaInicial();

if (!isNaN(operacion)) {
  if (operacion != 2) {
    ingresoCliente();
    let waffles = ingresarWaffles();
    let cantidad = ingresarCantidad();
    let total = waffleTotal(cantidad, waffles);
    alert("Su monto total a pagar es de: " + total + "\nLa espera maxima es de 20 minutos");
  } else {
    alert("Disculpa si no eres de San Pablo no podemos darte un servicio, busca la más cercana a tu domicilio");
  }
} else {
  alert("Recuerda que los mejores Waffles están en INGE Waffles");
}