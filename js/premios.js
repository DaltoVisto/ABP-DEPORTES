const preguntaDiv = document.getElementById('pregunta');
const opcionesDiv = document.getElementById('opciones');

let preguntaActual = 0;

async function mostrarPregunta() {
    const response = await fetch('../json/premio.json');
    const data = await response.json();

    if (preguntaActual < data.preguntas.length) {
        const pregunta = data.preguntas[preguntaActual];

        preguntaDiv.textContent = pregunta.pregunta;

        opcionesDiv.innerHTML = '';

        pregunta.opciones.forEach((opcion, index) => {
            const boton = document.createElement('button');
            boton.textContent = opcion;
            boton.addEventListener('click', () => comprobarRespuesta(index, pregunta));
            opcionesDiv.appendChild(boton);
        });
    } else {
        preguntaDiv.textContent = '¡Todas las preguntas han sido respondidas!';
        opcionesDiv.innerHTML = '';
    }
}

function comprobarRespuesta(opcionSeleccionada, pregunta) {
    if (opcionSeleccionada === pregunta.opciones.indexOf(pregunta.respuesta_correcta)) {
        opcionesDiv.innerHTML = '¡Correcto!';
        setTimeout(() => {
            opcionesDiv.innerHTML = '';
            preguntaActual++;
            mostrarPregunta();
        }, 2000);
    } else {
           opcionesDiv.innerHTML = 'Incorrecto. Intenta nuevamente.';
           setTimeout(() => {
            mostrarPregunta();
        }, 2000);
       
    }
}

mostrarPregunta();
