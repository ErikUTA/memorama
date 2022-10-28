let iconos = []
let selecciones = []

generarJuego();

function generarJuego() {
    cargarInfo()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 16; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    <img src="${iconos[0]}" class="img"/>
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ");    
}

function cargarInfo() {
    iconos = [
        '../img/one.jpeg',
        '../img/two.jpg',
        '../img/three.jpg',
        '../img/four.jpg',
        '../img/five.jpg',
        '../img/six.jpg',
        '../img/seven.jpg',
        '../img/eight.jpg',        
        'I',
        'J',
        'K',
        'L',
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