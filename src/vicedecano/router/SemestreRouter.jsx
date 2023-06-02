import { Route, Routes } from "react-router-dom";
import { Agregar } from "../pages/AgregarFecha";
import { Modificar } from "../pages/ModificarFecha";
import { NavBar } from "../Components/NavBar";
import { DateProvider } from "../../context/DateContext";

export const SemestreRouter = () => {
  return (
    <>
        
        <h1>Semestre academico</h1>
        <section className="hu1">
          <div className="routes">
          <NavBar/>
          <Routes>
              <Route path="/" element={<Agregar />} />
              <Route path="agregar_fecha" element={<Agregar/>} />
              <Route path="modificar_fecha" element={<Modificar />} />       
          </Routes>
          </div>
        </section>
     </>
  )
}
