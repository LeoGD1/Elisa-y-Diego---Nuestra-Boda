let nombreNoviaCorto_1 = document.getElementById('nombre-novia-corto-1');
let nombreNovioCorto_1 = document.getElementById('nombre-novio-corto-1');
let nombreNoviaCorto_2 = document.getElementById('nombre-novia-corto-2');
let nombreNovioCorto_2 = document.getElementById('nombre-novio-corto-2');
let nombreNoviaCorto_3 = document.getElementById('nombre-novia-corto-3');
let nombreNovioCorto_3 = document.getElementById('nombre-novio-corto-3');
let diaBoda_1 = document.getElementById('dia-boda-1');
let mesBoda_1 = document.getElementById('mes-boda-1');
let añoBoda_1 = document.getElementById('año-boda-1');
let diaBoda_2 = document.getElementById('dia-boda-2');
let mesBoda_2 = document.getElementById('mes-boda-2');
let añoBoda_2 = document.getElementById('año-boda-2');
let nombreMomNovia = document.getElementById('nombre-mom-novia');
let nombreDadNovia = document.getElementById('nombre-dad-novia');
let nombreMomNovio = document.getElementById('nombre-mom-novio');
let nombreDadNovio = document.getElementById('nombre-dad-novio');
let nombreMadrin = document.getElementById('nombre-madrina');
let nombrePadrin = document.getElementById('nombre-padrino');
let fraseEspecial = document.getElementById('frase');
let direccionCeremonia = document.getElementById('ceremonia-direccion');
let horaCeremonia = document.getElementById('ceremonia-hora');
let direccionCelebracion = document.getElementById('celebracion-direccion');
let horaCelebracion = document.getElementById('celebracion-hora');
let boletosNumero = document.getElementById('numero-boletos');

/* EDICION DE PLANTILLA */

const datosBoda = {
    nombreNaCorto: "Elisa",
    nombreNoCorto: "Diego",
    dia: "2",
    mes: "Abril",
    año: "2024",
    nombreMamaNovia: "Eugenia Rodriguez Flores",
    nombrePapaNovia: "Eduardo Diaz Hernández",
    nombreMamaNovio: "Josefina Glez Alvarez",
    nombrePapaNovio: "Israel Escobar Araujo",
    nombreMadrina: "Jaqueline Ruiz Vela",
    nombrePadrino: "Oscar Estrada Villegas",
    frase: "'Hay momentos en la vida que son muy especiales por sí solos, pero al compartirlos con personas tan especiales como tú, se convierten en momentos imposibles de olvidar'",
    ceremoniaDireccion: "La basilica de Guadalupe, Fray Juan de Zumárraga No. 2, Villa Gustavo A. Madero, 07050 Ciudad de México, CDMX",
    ceremoniaHora: "12:00 p.m.",
    celebracionDireccion: "el salon Florencia, 31 de Julio de 1859 6, Leyes de Reforma 3ra Secc, Iztapalapa, 09310 Ciudad de México, CDMX",
    celebracionHora: "14:00 p.m.",
    numeroBoletos: "4"
}



/* Nombres pareja*/

nombreNoviaCorto_1.textContent = datosBoda.nombreNaCorto;
nombreNovioCorto_1.textContent = datosBoda.nombreNoCorto;
nombreNoviaCorto_2.textContent = datosBoda.nombreNaCorto;
nombreNovioCorto_2.textContent = datosBoda.nombreNoCorto;
nombreNoviaCorto_3.textContent = datosBoda.nombreNaCorto;
nombreNovioCorto_3.textContent = datosBoda.nombreNoCorto;

/* Fecha */

diaBoda_1.textContent = datosBoda.dia;
mesBoda_1.textContent = datosBoda.mes;
añoBoda_1.textContent = datosBoda.año;
diaBoda_2.textContent = datosBoda.dia;
mesBoda_2.textContent = datosBoda.mes;
añoBoda_2.textContent = datosBoda.año;

/* Datos de padres de pareja y padrinos */

nombreMomNovia.textContent = datosBoda.nombreMamaNovia;
nombreDadNovia.textContent = datosBoda.nombrePapaNovia;
nombreMomNovio.textContent = datosBoda.nombreMamaNovio;
nombreDadNovio.textContent = datosBoda.nombrePapaNovio;
nombreMadrin.textContent = datosBoda.nombreMadrina;
nombrePadrin.textContent = datosBoda.nombrePadrino;

/* frase */

fraseEspecial.textContent = datosBoda.frase;

/* Direcciones y horarios */

direccionCeremonia.textContent = datosBoda.ceremoniaDireccion;
horaCeremonia.textContent = datosBoda.ceremoniaHora;
direccionCelebracion.textContent = datosBoda.celebracionDireccion;
horaCelebracion.textContent = datosBoda.celebracionHora;

/* Pases/boletos */

boletosNumero.textContent = datosBoda.numeroBoletos;
