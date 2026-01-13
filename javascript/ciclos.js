


const pokemonTeam = ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Jigglypuff'];




// forloop
for (let i = 0; i < pokemonTeam.length; i++) {

    if (pokemonTeam[i] === 'Bulbasaur') {
        break;
    }

    if (pokemonTeam[i] === 'Charizard') {
        continue;
    }

    console.log('For Loop Iteration:', pokemonTeam[i]);


    // continue; // salta a la siguiente iteración
    // break; // rompe el ciclo en la primera iteración
}

// operaciones especiaels con continue y break



// while loop
let contador = 0;
let scanning_virus = true;


// while (contador < pokemonTeam.length) {
//     console.log('While Loop Iteration:', pokemonTeam[contador]);
//     contador++;
// }


while (scanning_virus) {
    console.log('Scanning for viruses...');

    const horaInicio = new Date().getHours();
    const SegundosInicio = new Date().getSeconds();
    console.log('Hora de inicio del escaneo:', SegundosInicio);

    // if (horaInicio >= 23) {
    //     scanning_virus = false;
    //     console.log('Escaneo completado. No se encontraron virus.');
    // }

    if (SegundosInicio >= 59) {
        scanning_virus = false;
        console.log('Escaneo completado. No se encontraron virus.');
    }

    alert('Escaneo en progreso... Por favor, espera.');
}




