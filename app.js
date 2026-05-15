function analizarDol(){

    const texto = document
    .getElementById("textoUsuario")
    .value
    .toLowerCase();

    const resultado = document.getElementById("resultado");

    const ira = [
        "ira",
        "rabia",
        "enfado",
        "enfadado",
        "enfadada",
        "frustración",
        "frustrado",
        "frustrada",
        "odio",
        "furia",
        "impotencia",
        "cabreo",
        "cabreada",
        "cabreado"
    ];

    const negacion = [
        "no puede ser",
        "imposible",
        "no lo creo",
        "esto no está pasando",
        "no lo asimilo"
    ];

    const depresion = [
        "triste",
        "vacío",
        "solo",
        "llorar",
        "depresión",
        "sin ganas",
        "ansiedad"
    ];

    const negociacion = [
        "ojalá",
        "si hubiera",
        "y si",
        "podría haber"
    ];

    const aceptacion = [
        "acepto",
        "seguir adelante",
        "aprendí",
        "paz",
        "continuar"
    ];

    if(ira.some(palabra => texto.includes(palabra))){

        resultado.innerHTML = `
        <h3>Fase detectada: IRA</h3>
        <p>Tu texto refleja enfado o frustración.</p>
        `;

    }

    else if(negacion.some(palabra => texto.includes(palabra))){

        resultado.innerHTML = `
        <h3>Fase detectada: NEGACIÓN</h3>
        <p>Tu texto refleja dificultad para aceptar la pérdida.</p>
        `;

    }

    else if(depresion.some(palabra => texto.includes(palabra))){

        resultado.innerHTML = `
        <h3>Fase detectada: DEPRESIÓN</h3>
        <p>Tu experiencia transmite tristeza o vacío emocional.</p>
        `;

    }

    else if(negociacion.some(palabra => texto.includes(palabra))){

        resultado.innerHTML = `
        <h3>Fase detectada: NEGOCIACIÓN</h3>
        <p>Tu texto muestra pensamientos hipotéticos.</p>
        `;

    }

    else if(aceptacion.some(palabra => texto.includes(palabra))){

        resultado.innerHTML = `
        <h3>Fase detectada: ACEPTACIÓN</h3>
        <p>Tu texto refleja comprensión y avance emocional.</p>
        `;

    }

    else{

        resultado.innerHTML = `
        <h3>No se detecta una fase concreta</h3>
        <p>Describe más cómo te sientes.</p>
        `;

    }

}

function cambiarModo(){

    document.body.classList.toggle("dark-mode");

}

<header class="cabecera">

    <div class="container barra-navegacion">

        <a class="logo" href="#">
            Elizabeth<span>Kübler-Ross</span>
        </a>

        <nav class="enlace-navegacion">

            <a href="#inicio">Inicio</a>
            <a href="#fases">Fases del duelo</a>
            <a href="#experiencia">Tu experiencia</a>

            <button
                type="button"
                class="btn btn-outline-warning btn-sm"
                onclick="recalcular()"
            >
                RECALCULAR
            </button>

            <button
                class="btn btn-light btn-sm"
                onclick="cambiarModo()"
            >
                oscuro / claro
            </button>

        </nav>

    </div>

</header>


