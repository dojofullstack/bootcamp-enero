import { useEffect, useState } from "react";

const Restaurantes = () => {

    const [productos, setProductos] = useState([]);
   
    const [categorias, setCategorias] = useState([
    "Comida Rápida",
    "Italiana",
    "Mexicana",
    "China",
    "Postres",
  ]);
    const [marcas, setMarcas] = useState([
    "McDonald's",
    "Burger King",
    "KFC",
    "Subway",
    "Pizza Hut",
  ]);

  console.log(marcas);

  console.log(productos);



    useEffect(() => {
        console.log("Componente Restaurantes montado");
        // alert("Bienvenido a la sección de Restaurantes");
  }, []); // El arreglo vacío significa que este efecto se ejecuta solo una vez al montar el componente


//     useEffect(() => {
//         console.log("Componente Restaurantes montado");
//         alert("Bienvenido a la sección de Restaurantes");
//   }); // Sin arreglo de dependencias, se ejecuta en cada renderizado


//     useEffect(() => {
//         console.log("Componente Restaurantes montado, LISTAR CATEGORIAS");
//         alert("Bienvenido a la sección de Restaurantes, LISTAR CATEGORIAS");
//   }, [categorias]); // El arreglo vacío significa que este efecto se ejecuta solo una vez al montar el componente


    useEffect(() => {
       
     fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    console.log("Datos obtenidos de la API:", data);

    setProductos(data.products);

    // Aquí podrías actualizar el estado con los datos obtenidos
});
        
        
  }, []); // El arreglo vacío significa que este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Restaurantes Component</h2>

      <ul>
        {marcas.map((marca, index) => (
          <li key={index}>{marca}</li>
        ))}
      </ul>


      <button onClick={() => {
        setMarcas(
            [
    "McDonald's",
    "Burger King",
    "KFC",
    "Subway",
    "Pizza Hut",
    "Taco Bell",
    "Wendy's"
  ]
        );
      }}>Agregar Marcas</button>



      <button onClick={() => {
        setCategorias(
            [
    "Comida Rápida",
    "Italiana",
    "Mexicana",
    "China",
    "Postres",
    "Vegetariana",
    "Vegana"
  ]
        );
      }}>
        Cambiar Categorías
      </button>


      <div>

        {
            productos.map((producto, index) => (
                <div key={index} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <p>Precio: ${producto.price}</p>
                    <img src={producto.thumbnail} alt={producto.title} width="100" />
                </div>
            ))
        }



      </div>
    </div>
  );
};

export default Restaurantes;
