/*## La estructura podría ser la siguiente:

- Opciones en un array
- Variables puntos usuario
- Variables puntos ordenador
- Capturar los botones para usarlos (plantea usar un forEach) y hacer evento click
- Capturar resultados
- Capturar contador-usuario
- Capturar contador-ordenador
- Crear una función obtenerResultado
- Crear una función mostrarResultado
- Crear una función actualizarPuntuacion*/



const opciones = ['piedra', 'papel', 'tijera'];

const puntosUsuario = document.getElementById('contador-usuario');
const puntosOrdenador = document.getElementById('contador-ordenador');
const botones = document.querySelectorAll('.boton-jugada');
const resultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');


function iniciarTurno(e) {
    let eleccionPc = Math.floor(Math.random()*3);
    let eleccionUsuario = e.currentTarget.id;
    if (eleccionPc === 0) { eleccionPc = 'piedra';
    } else if (eleccionPc === 1) { eleccionPc = 'papel';
    } else { eleccionPc = 'tijera';}
}

/*if
(eleccionUsuario === 'piedra' && eleccionPc === 'tijera')
|| (eleccionUsuario === 'papel' && eleccionPc === 'piedra')||
(eleccionUsuario === 'tijera'&& eleccionPc === 'papel')
{ganaUsuario();}
else if
(eleccionPc === 'piedra'&& eleccionUsuario === 'tijera') || (eleccionPc === 'papel' && eleccionUsuario === 'piedra') ||
(eleccionPc === 'tijera'&& eleccionUsuario === 'papel')
{ganaPc();}
else {empate();}*/



