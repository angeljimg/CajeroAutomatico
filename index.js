/*Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
Consultar saldo
Ingresar monto
Retirar Monto
Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.*/
let cliente1 = {
  nombre: "Angel JG",
  user: "angeljimg",
  password: "contrasena",
  saldo: 120
}

let cliente2 = {
  nombre: "Flor IBB",
  user: "florivo",
  password: "password",
  saldo: 150
}

let cliente3 = {
  nombre: "Mauricio TJG",
  user: "mtomas",
  password: "ingresa",
  saldo: 160
}

let clientes = [cliente1,cliente2,cliente3]

  const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    evaluar (usuario, password)
  })

let pag1 = document.getElementById("pag1")
let pag2 = document.getElementById("pag2")
let clienteOK, monto;
let consultar = document.getElementById("consulta")
let banca = document.getElementById("banca")

function evaluar(usuario, password){
  clienteOK = clientes.find((persona) => persona.user == usuario)
  if(clienteOK != undefined){
    if(clienteOK.password == password){
      swal.fire(
        'Acceso Exitoso!',
        'Bienvenid@',
        'success'
      )   
      pag2.classList.remove("hide")
      pag1.classList.add("hide")
      banca.innerHTML = "B@nk@: "+ clienteOK.nombre
    }else{
      swal.fire(
        'Acceso Erroneo!',
        'Intente de nuevo',
        'error'
      )
    }
  }else{
    swal.fire('Datos incorrectos o faltantes',
    'Intente de nuevo',
    'error')
  }
}

function consulta(){
  consultar.innerHTML = "Su saldo es de " + clienteOK.saldo;
}

function depositar(){
  monto = parseFloat(document.getElementById("input").value)
  if((clienteOK.saldo + monto) > 990){
    swal.fire('No es posible tener mas de $990',
    'Intenta otro monto',
    'error')
  }else{
    clienteOK.saldo += monto;
    consulta();
    
  }
}

function retirar(){
  monto = parseFloat(document.getElementById("input").value)
  if((clienteOK.saldo - monto) < 10){
    swal.fire('No es posible tener menos de $10',
    'Intenta otro monto',
    'error')
  }else{
    clienteOK.saldo -= monto;
    consulta();
  }
}

function salir(){
  pag1.classList.remove("hide")
  pag2.classList.add("hide")
  consultar.innerHTML = "";
}