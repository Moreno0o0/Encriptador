const notiSalida = document.getElementById("notiSalida");
const imgsalida = document.getElementById("imgdetective");
const mensajeSalida = document.getElementById("mensajeSalida");

const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};
const desencriptacion = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};



function codicionInicial() {
    const botonencriptar = document.getElementById("encriptar");
    const botondesencriptar = document.getElementById("desencriptar");
    const mensajeSalida = document.getElementById("mensajeSalida");

    botonencriptar.setAttribute('disabled', "true");
    botondesencriptar.setAttribute('disabled', "true");
    mensajeSalida.style.opacity = '0';
}
function checartexto() {
    const mensaje = document.getElementById("texto");
    const botonencriptar = document.getElementById("encriptar");
    const botondesencriptar = document.getElementById("desencriptar");


    if (mensaje.value.trim() !== "") {
        botonencriptar.removeAttribute('disabled');
        botondesencriptar.removeAttribute('disabled');
    }
    else {
        botonencriptar.setAttribute('disabled', "true");
        botondesencriptar.setAttribute('disabled', "true");
        notiSalida.style.opacity = '100';
        imgsalida.style.opacity = '100';
        mensajeSalida.style.opacity = '0';

    }
}


function encriptar() {
    // Reemplaza las letras según las llaves de encriptación
    oracion = document.getElementById("texto");
    oracion = oracion.value;
    console.log(oracion);

    mostrarSalida();

    // Convierte la oración a un array de palabras y aplica la encriptación a cada palabra

    const oracionEncriptada = oracion.split(' ').map(palabra => {
        return palabra.split('').map(letra => encriptacion[letra] || letra).join('');
    }).join(' ');


    console.log("encriptando...");
    console.log(oracionEncriptada);
    document.getElementById('mensajeSalida').value = oracionEncriptada;

}

function desencriptar() {
    let oracionEncriptada = document.getElementById("texto").value;

    console.log(oracionEncriptada);
    console.log("Desencriptando...");

    mostrarSalida();
    for (const clave in desencriptacion) {
        if (desencriptacion.hasOwnProperty(clave)) {
            const valor = desencriptacion[clave];
            const expresionRegular = new RegExp(clave, 'g');
            oracionEncriptada = oracionEncriptada.replace(expresionRegular, valor);
        }
    }
    console.log(oracionEncriptada);

    document.getElementById('mensajeSalida').value = oracionEncriptada;
}
function mostrarSalida() {
    notiSalida.style.opacity = '0';
    imgsalida.style.opacity = '0';
    mensajeSalida.style.opacity = '100';

}
