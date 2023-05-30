//Obtenemos los elementos de salida entrada ubicados en FORMA
var contenedor = document.getElementById("forma"),
  input_num = ["nombre", "secreto", "navegador", "email", "usuario", "url",
    "telefono", "verso"],
  out_num = ["salidaNombre", "salidaSecreto", "salidaNavegador", "salidaEmail",
    "salidaUsuario", "salidaUrl", "salidaTelefono", "salidaVerso"];

//Funcion que recorre el ArrayList de los elementos
function dat_out() {
  //Definimos el limite para nuestro iterador
  let limite = input_num.length;

  for (var i = 0; i < limite; i++) {
    var campo = contenedor[input_num[i]];
    var salida = document.getElementById(out_num[i]);
    //Recupera el valor de cada entrada y se lo asigna como valor a la salida
    salida.value = campo.value;

  }
}

contenedor.addEventListener("submit", dat_out, false);