

// iteradores foreach, map, filter, find,


const pokemonTeam = ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur', 'Jigglypuff'];

const productos = [
    {id: 1, nombre: 'Laptop', precio: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwF1rdlovUCKt95QPrhOdMCqeHg42u_gYoQ&s'},
    {id: 2, nombre: 'Mouse', precio: 20, image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg'},
    {id: 3, nombre: 'Keyboard', precio: 50, image: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg'},
    {id: 4, nombre: 'Monitor', precio: 200, image: 'https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'},
    {id: 5, nombre: 'Headphones', precio: 100, image: 'https://m.media-amazon.com/images/I/51Zymoq7UnL._AC_UY327_FMwebp_QL65_.jpg'},
];


// USO DE FOREACH
pokemonTeam.forEach( (pokemon) => {
    console.log(pokemon);
})


// // forloop
// for (let i = 0; i < pokemonTeam.length; i++) {
//     console.log('For Loop Iteration:', pokemonTeam[i]);
// }


// USO DE MAP
// const salida = pokemonTeam.map( (pokemon) => {
//     console.log(pokemon);
//     return pokemon.toUpperCase();
// })

// console.log(salida);


productos.map( (producto) => {

    // generar tarjeta de producto

    const productoHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${producto.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
        ${producto.nombre}
      <div class="badge badge-secondary">
      $${producto.precio}
      </div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    `;
    console.log(productoHTML);

    // insertar en el DOM
    document.body.innerHTML += productoHTML;
})




// const filteredPokemon = pokemonTeam.filter((elemento) => {
//     return elemento.includes('zard');
// });
// console.log('Filtered Pokemon:', filteredPokemon);


// const filteredProductos = productos.filter( (elemento) => elemento.precio >= 100);

const filteredProductos = productos.filter((elemento) => {
    if (elemento.precio >= 100) {
        return true;
    } else {
        return false;
    }
});
console.log('Filtered Productos:', filteredProductos);