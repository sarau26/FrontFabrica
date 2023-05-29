import { Route, Routes } from "react-router-dom";
import { AgregarCurso } from "../../components/AgregarCurso";
import { ModificarCurso } from "../../components/ModificarCurso";
import { EliminarCurso } from "../../components/EliminarCurso";

export const JefeDepartamentoRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<AgregarCurso />} />
            <Route path="agregar" element={<AgregarCurso />} />
            <Route path="modificar" element={<ModificarCurso />} />
            <Route path="eliminar" element={<EliminarCurso />} />
        </Routes>
    )
}
