

let usuario = 'Henry'; // string
let suscripcion = 'Usuario_Anonymous'; // string
let puntos = 1500; // número
let nivel = 5; // número
let esMiembroActivo = true; // booleano

// if (esMiembroActivo) {
//     console.log(`¡Bienvenido de nuevo, ${usuario}! Gracias por ser un miembro ${suscripcion}.`);
// } else {
//     console.log(`Hola ${usuario}, tu membresía ${suscripcion} ha expirado. Por favor, renueva para continuar disfrutando de los beneficios.`);
// }


if (suscripcion === 'Free') {
    console.log('Tienes acceso limitado. Considera actualizar a Premium para más beneficios.');
} else if (suscripcion === 'Premium') {
    console.log('¡Gracias por ser un miembro Premium! Disfruta de todos los beneficios.');
} else if (suscripcion === 'VIP') {
    console.log('¡Eres un miembro VIP! Tienes acceso exclusivo a todas las funciones y eventos especiales.');
} else {
    console.log('Tipo de suscripción no reconocido. Por favor, verifica tu plan de membresía.');
}