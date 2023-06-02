import { Route, Routes } from "react-router-dom";
import { SelectRole } from "../auth/SelectRole";
import { MenuJefeDepartamento } from "../jefe-departamento/ui/MenuJefeDepartamento";
import { MenuVicedecano } from "../vicedecano/ui/MenuVicedecano";
import { Cursos } from "../jefe-departamento/pages/Cursos";

export const AppRouter = () => {
    return (
        <>
               
            <Routes>
                
                <Route path="/" element={<SelectRole />} />
                <Route path="menu-jefe-departamento" element={<MenuJefeDepartamento />} />
                <Route path="menu-vicedecano" element={<MenuVicedecano />} />

                <Route path="/menu-jefe-departamento/menu-cursos/*" element={<Cursos />}/>

            </Routes>
        </>
    )
}
