// - dom JS, eventos, asincronia (express)




console.log(document.getElementById('btn-click-me'));
console.log(document.getElementsByClassName('btn-click-me-2'));

console.log(document.querySelector('#btn-click-me'));
console.log(document.querySelectorAll('.btn-click-me-2'));


document.querySelector('#btn-click-me').style.backgroundColor = 'red';
document.querySelector('.btn-click-me-2').style.backgroundColor = 'green';


document.addEventListener("click", (event) => {
    console.log('Click en el documento', event.target);

    if (event.target.id === 'btn-click-me') {
        alert('Haz hecho click en el botón 1');
    }

    if (event.target.classList.contains('btn-click-me-2')) {
        alert('Haz hecho click en el botón 2'); 
    }
});


// document.addEventListener("DOMContentLoaded", () => {
//     console.log('El DOM ha sido cargado');
// });



// document.addEventListener("keydown", (event) => {
//     console.log('Tecla presionada:', event.key);

//     if (event.key === 'a') {
//         console.log('Haz presionado la tecla A');
//     }
// });

const cajaCard = document.querySelector("#card-number");

console.log(cajaCard);

cajaCard.addEventListener("input", (event) => {
    console.log('Input event:', event.target.value);

    if (event.target.value.startsWith('4455')) {
        console.log('Tarjeta Visa CREDITO detectada');
        console.log("activa opcion a cuotas");
    }

}); 