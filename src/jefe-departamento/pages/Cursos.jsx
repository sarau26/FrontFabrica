import { JefeDepartamentoRoutes } from "../routes/JefeDepartamentoRoutes";
import { NavBarJefeDepartamento } from "../ui/NavBarJefeDepartamento";

export const Cursos = () => {

    
    return (
        <div className="gestion-cursos">
            <h1>Gestión de Cursos</h1>
            <NavBarJefeDepartamento/>
            <JefeDepartamentoRoutes />
        </div>
    )
}
