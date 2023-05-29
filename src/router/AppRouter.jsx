import { Navigate, Route, Routes } from "react-router-dom";
import { SelectRole } from "../auth/SelectRole";
import { MenuJefeDepartamento } from "../jefe-departamento/ui/MenuJefeDepartamento";
import { MenuVicedecano } from "../vicedecano/ui/MenuVicedecano";
import { Cursos } from "../jefe-departamento/pages/Cursos";
import { JefeDepartamentoRoutes } from "../jefe-departamento/routes/JefeDepartamentoRoutes";
import { Grupos } from "../jefe-departamento/pages/Grupos";
import { ModificarCurso } from "../components/ModificarCurso";
import { AgregarCurso } from "../components/AgregarCurso";


export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<SelectRole />} />
                <Route path="menu-jefe-departamento" element={<MenuJefeDepartamento />} />
                <Route path="menu-vicedecano" element={<MenuVicedecano />} />

                {/* <Route path="/menu-jefe-departamento/menu-cursos/*" element={<JefeDepartamentoRoutes />}/> */}

                <Route path="/menu-jefe-departamento/menu-cursos/*" element={<Cursos />}/>

                {/* <Route path="/menu-jefe-departamento/menu-cursos/*" element={<Cursos />}/>  */}


                {/* <Route path="/" element={<Navigate to={"/"} />} /> */}

            </Routes>
        </>
    )
}
