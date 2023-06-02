import { JefeDepartamentoRoutes } from "../routes/JefeDepartamentoRoutes";
import { NavBarJefeDepartamento } from "../ui/NavBarJefeDepartamento";

export const Cursos = () => {

    
    return (
        <div className="gestion-cursos">
            <h2 className="text-center">Gestión de Cursos</h2>
            <NavBarJefeDepartamento/>
            <JefeDepartamentoRoutes />
        </div>
    )
}
