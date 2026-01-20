
// sincronia y asincronia
console.log('Inicio del script');

// tareas sincrónicas
console.log('Tarea sincrónica nueva mensaje');
console.log('Tarea sincrónica nueva notificacon');
console.log('Tarea sincrónica segunda notificación');


function realizarPagoQR(monto) {
    console.log(`Pago completado ${monto}  Tarea asincrónica (después de X segundos)`);
}

function analizarPreciosProveedores() {
    console.log('Analizando precios de proveedores... Tarea asincrónica repetitiva (cada X segundos)');
}


// tareas asincrónicas
// setTimeout(() => realizarPagoQR(100), 1000);

// console.log('lanzado del realizarPagoQR 1');
// setTimeout(() => realizarPagoQR(200), 3000);

// console.log('lanzado del realizarPagoQR 2');

// setTimeout(() => realizarPagoQR(300), 6000);

// console.log('lanzado del realizarPagoQR 3');


// setInterval(analizarPreciosProveedores, 1000);


// Promises CReardores de promesas
const promesaCumplida = true;

const miPromesa = new Promise( (resolve, reject) => {
    if (promesaCumplida) {

        setTimeout(() => {
            realizarPagoQR("$100 dolares");
            resolve('Trsanccion QR completada con éxito');
        }, 5000);

    } else {
        reject('La transacción QR falló por fondos insuficientes');
    }
});


// Consumidores de promesas
miPromesa
    .then( (mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch( (error) => {
        console.log('Error:', error);
    });


// Consumidores de promesas
miPromesa
    .then( (mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch( (error) => {
        console.log('Error:', error);
    });


// Consumidores de promesas
miPromesa
    .then( (mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch( (error) => {
        console.log('Error:', error);
    });


// Consumidores de promesas
miPromesa
    .then( (mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch( (error) => {
        console.log('Error:', error);
    });


// Consumidores de promesas
miPromesa
    .then( (mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch( (error) => {
        console.log('Error:', error);
    });

console.log('Fin del script');


// async y await (simula un proceso sincrónico con promesas)