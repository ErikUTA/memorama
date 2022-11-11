let iconos1 = [];
let iconos2 = [];
let iconos3 = [];
let iconos4 = [];
let selecciones = []
let number = 0;
let intentos = 0;
let element = document.getElementById('intentos');

generarJuego();

function generarJuego() {
    cargarInfo()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    let min = Math.ceil(1);
    let max = Math.floor(5);
    let random2 = Math.floor(Math.random() * ((max - min) + min));
    if(random2 == random2){
        random2 = Math.floor(Math.random() * ((max - min) + min));
    }
    number++;
    for (let i = 0; i < 16; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                <img src="${random2 == 0 || random2 == 1 ? iconos1[0]: random2 == 2 ? iconos2[0] : random2 == 3 ? iconos3[0] : random2 == 4 ? iconos4[0] : iconos1[0]}" class="img"/>
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            random2 == 0 || random2 == 1 ? iconos1.splice(0, 1): random2 == 2 ? iconos2.splice(0, 1) : random2 == 3 ? iconos3.splice(0, 1) : random2 == 4 ? iconos4.splice(0, 1) : iconos1.splice(0, 1)            
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ");    
}

function cargarInfo() {
    intentos = 0;
    element.innerHTML = `Intentos = ${intentos++}`;
    iconos1 = [
       '../img/one.jpeg',
       '../img/two.jpg',
       '../img/three.jpg',
       '../img/four.jpg',
       '../img/five.jpg',
       '../img/six.jpg',
       '../img/seven.jpg',
       '../img/eight.jpg'
    ]
    iconos2 = [
        '../img/nueve.jpg',
       '../img/diez.jpg',
       '../img/once.jpg',
       '../img/doce.jpg',
       '../img/trece.jpg',
       '../img/14.jpg',
       '../img/quince.jpg',
       '../img/dieciseis.jpg',
    ]
    iconos3 = [
       '../img/diecisiete.jpg',
       '../img/dieciocho.jpg',
       '../img/19.png',
       '../img/20.jpeg',
       '../img/21.png',
       '../img/22.jpg',
       '../img/23.jpg',
       '../img/24.jpg',
    ]
    iconos4 = [
       '../img/25.jpg',
       '../img/26.jpg',
       '../img/27.jpg',
       '../img/28.jpg',
       '../img/29.jpg',
       '../img/30.jpg',
       '../img/31.jpg',
       '../img/32.jpg',
    ]
}


function seleccionarTarjeta(i) {    
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    let trasera1 = document.getElementById("trasera" + selecciones[0])
    let trasera2 = document.getElementById("trasera" + selecciones[1])
    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
    element.innerHTML = `Intentos = ${intentos++}`;
    if (trasera1.innerHTML != trasera2.innerHTML) {
        trasera1.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(255,0,0,0.75) inset', 'important');
        trasera2.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(255,0,0,0.75) inset', 'important');
        setTimeout(() => {
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
            trasera1.style.setProperty('box-shadow', '0px 0px 5px 19px white inset', 'important');
            trasera2.style.setProperty('box-shadow', '0px 0px 5px 19px white inset', 'important');
        }, 2000);
    }else{
        setTimeout(() => {
            trasera1.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(0,255,43,0.75) inset', 'important');
            trasera2.style.setProperty('box-shadow', '0px 0px 5px 19px rgba(0,255,43,0.75) inset', 'important');
        }, 1000);        
    }
}