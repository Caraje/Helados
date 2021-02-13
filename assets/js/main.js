// Definir personas y su dinero.



const ResultadoHeladoDiv = document.querySelector('#resultado_peticion')

const valorNombre = document.querySelector('#cliente');
const valorDinero = document.querySelector('#dinero');
const btnEnviar = document.querySelector('.btn');

// let dinero = prompt('Digame, ¿Cual es su presupuesto?');
// dinero = parseFloat(dinero);


//precio de los helados. 

const poloAgua = {
    tipo: 'Polo de sabores',
    precio: 0.6,
    img: '01'
};
const poloLeche = {
    tipo: 'Polo de Leche', 
    precio: 1,
    img: '02'
};
const bombonChoc = {
    tipo: 'Bombon de chocolate',
    precio: 1.6,
    img: '03'
};
const bombonMag = {
    tipo: 'Bombon de chocolate Magnun',
    precio: 1.7,
    img: '04'
};
const bombonPremium = {
    tipo: 'Bombon de chocolate PREMIUM',
    precio: 1.8,
    img: '05'
};
const tarrinaMedio = {
    tipo: 'Tarrina de helado de 500ml',
    precio: 2.9,
    img: '07'
};

const sinHelado = {
    tipo: 'No te te da para ningun helado',
    img: '06'
};





//Funcion para crear el HTML.

const crearHtml = () => {
    const respHelado =
    valorDinero.value >= 0.6 && valorDinero.value < 1  ? poloAgua :
    valorDinero.value >=   1 && valorDinero.value < 1.6  ? poloLeche :
    valorDinero.value >= 1.6 && valorDinero.value < 1.7  ? bombonChoc : 
    valorDinero.value >= 1.7 && valorDinero.value < 1.8 ? bombonMag : 
    valorDinero.value >= 1.8 && valorDinero.value < 2.9 ? bombonPremium :
    valorDinero.value >= 2.9 && valorDinero.value ? tarrinaMedio :
    sinHelado

    const heladoHtml = `
    <div id="resultado_peticion" class="resultado__peticion">
        <img id="img_helado" class="img_helado" src="/assets/img/${respHelado.img}.jpg" alt="img Helado">

        <div id="resultado_peticion" class="texto_resultado">
            <h2 id="helado">${respHelado.tipo}</h2>
            <p id="text_helado"> ${respHelado === sinHelado ? `No hay helados por ese precio` 
            : ` Hola ${valorNombre.value}, con ${valorDinero.value}€, te puedes comprar un ${respHelado.tipo} y te sobran ${valorDinero.value - respHelado.precio}€` }</p>

        </div>
    </div>
        `; 
    const divHelado = document.createElement('div');
    divHelado.innerHTML = heladoHtml;
    ResultadoHeladoDiv.append(divHelado);
}


    btnEnviar.addEventListener('click', () => {
        crearHtml();

    })







    // Funcion para seleccionar helado segun presupuesto.

// const SeleccionarHelados = (dinero) => {
//     const respHelado =
//     dinero >= 0.6 && dinero < 1  ? poloAgua :
//     dinero >=   1 && dinero < 1.6  ? poloLeche :
//     dinero >= 1.6 && dinero < 1.7  ? bombonChoc : 
//     dinero >= 1.7 && dinero < 1.8 ? bombonMag : 
//     dinero >= 1.8 && dinero < 2.9 ? bombonPremium :
//     dinero >= 2.9 && dinero ? tarrinaMedio :
//     sinHelado
    
//     return respHelado;
    
// }
// let respHelado = SeleccionarHelados(valorDinero.valueAsNumber)
