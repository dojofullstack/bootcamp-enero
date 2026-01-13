

console.log("Archivo de funciones cargado correctamente.");

// función Tradicinal Cafetera Express 
function cafeteraExpress(pildoras_cafe, agua, leche, azucar) {

    console.log("¡Bienvenido a la Cafetera Express!");

    console.log("Preparando un delicioso café para ti...");

    console.log("moler café molido", pildoras_cafe, "pildoras");
    console.log("calentar agua", agua);
    console.log("agregar leche", leche);
    console.log("agregar azúcar", azucar);
    console.log("presionar café");
    console.log("verter café en la taza");

    console.log("¡Tu café está listo! Disfrútalo.");

    return "¡Tu café está listo! Disfrútalo.";
}


// activar la función Cafetera Express
let pildoras_cafe = 2; // número de pildoras de café
let agua = "200ml"; // cantidad de agua
let leche = "50ml"; // cantidad de leche
let azucar = "2 cucharaditas"; // cantidad de azúcar

const resultado = cafeteraExpress(pildoras_cafe, agua, leche, azucar);
console.log(resultado);


// función moderna Arrow Function Cafetera Express

const ollaArrosera = (arroz, agua, sal) => {

    // alogirtimo de la función Olla Arrosera
    console.log("¡Bienvenido a la Olla Arrosera!");
    
    console.log("Preparando un delicioso arroz para ti...");
    console.log("medir arroz", arroz);
    console.log("lavar arroz");
    console.log("agregar agua", agua);
    console.log("agregar sal", sal);
    console.log("cocinar arroz");
    console.log("dejar reposar");
    console.log("servir arroz en el plato");
    return "¡Tu arroz está listo! Disfrútalo.";
}

let arroz = "1 taza"; // cantidad de arroz
let aguaOlla = "2 tazas"; // cantidad de agua
let sal = "una pizca"; // cantidad de sal

// activar la función Olla Arrosera
const resultadoOlla = ollaArrosera(arroz, aguaOlla, sal);
console.log(resultadoOlla);





const callbackBatidora = () => {
    console.log("¡Usando la batidora para mezclar los ingredientes!");
}

// const callbackHorno = () => {
//     console.log("¡Horneando la torta a la temperatura adecuada!");
// }

// funcion prepararTorta de chocolate, y llamar callbacks

const prepararTortaChocolate  = (harina, azucar, huevos, cacao, mantequilla, callbackBatidora, callbackHorno) => {
    console.log("¡Bienvenido a la Cocina de Tortas de Chocolate!");

    console.log("Preparando una deliciosa torta de chocolate para ti...");
    console.log("mezclar harina", harina);
    console.log("agregar azúcar", azucar);
    console.log("incorporar huevos", huevos);
    console.log("añadir cacao en polvo", cacao);
    callbackBatidora();

    console.log("derretir mantequilla", mantequilla);
    console.log("hornear la mezcla");
    callbackHorno();
    console.log("dejar enfriar");
    console.log("decorar la torta");
    return "¡Tu torta de chocolate está lista! Disfrútala.";


}  




let harina = "2 tazas"; // cantidad de harina
let azucarTorta = "1 taza"; // cantidad de azúcar
let huevos = 3; // número de huevos
let cacao = "1/2 taza"; // cantidad de cacao en polvo
let mantequilla = "100g"; // cantidad de mantequilla

// activar la función prepararTortaChocolate
const resultadoTorta = prepararTortaChocolate(harina, azucarTorta, huevos, cacao, mantequilla, callbackBatidora, () => {
    console.log("¡Horneando la torta de chocolate a la temperatura adecuada!");
});


console.log(resultadoTorta);