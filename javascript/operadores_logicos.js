
// operadores logicos
let usuario = 'Henry'; // string
let suscripcion = 'Premium';
let puntos = 1500; // número
let nivel = 5;
let esMiembroActivo = true; // booleano


// operadors logicos AND (&&), OR (||), NOT (!)


// if (esMiembroActivo || suscripcion === 'prueba') {
//     console.log(`¡Bienvenido de nuevo, ${usuario}! Gracias por ser un miembro ${suscripcion}.`);
// } else {
//     console.log(`Hola ${usuario}, tu membresía ${suscripcion} ha expirado. Por favor, renueva para continuar disfrutando de los beneficios.`);
// }



// if (esMiembroActivo && puntos > 1000 && nivel >= 10) {
//     console.log("Acceso al certificado junior javascript desbloqueado.");
// } else {
//     console.log("Sigue acumulando puntos y subiendo de nivel para desbloquear el certificado junior javascript.");
// }



// if (!esMiembroActivo) {
//     console.log("Envar correo de renovación de membresía, descuentos disponibles.");
// }



// manejando and, or y not juntos
if ((suscripcion === 'Premium' || suscripcion === 'VIP') && esMiembroActivo) {
    console.log(`¡Hola ${usuario}! Disfruta de tus beneficios exclusivos como miembro ${suscripcion}.`);
}