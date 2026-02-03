import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantesView from "./views/RestaurantesView";
import RestauranteMarcas from "./views/RestauranteMarcas";
import MenuView from "./views/MenuView";





const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                {/* Aquí irán las rutas y componentes de la aplicación */}
                <Routes>
                    <Route path="/" element={<RestaurantesView />} />
                    <Route path="/restaurantes" element={<RestauranteMarcas />} />
                    <Route path="/menu/:marca" element={<MenuView />} />
                    <Route path="/categorias" element={<RestaurantesView />} />
                    <Route path="/foro" element={<RestaurantesView />} />
                    <Route path="/login" element={<RestaurantesView />} />
                    <Route path="/registro" element={<RestaurantesView />} />
                    <Route path="/checkout" element={<RestaurantesView />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}   

export default Rutas;