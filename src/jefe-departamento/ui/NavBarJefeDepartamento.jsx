import { Link, NavLink, useNavigate } from 'react-router-dom';


export const NavBarJefeDepartamento = () => {

    return (
        <nav className="navbar navbar-expand-sm">

            <div className="navbar-nav navbar__items">

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    /* className="nav-item nav-link navbar__link active" */
                    to="/menu-jefe-departamento/menu-cursos/agregar"
                    
                >
                    Agregar
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/menu-jefe-departamento/menu-cursos/modificar"
                >
                    Modificar
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/menu-jefe-departamento/menu-cursos/eliminar"
                >
                    Eliminar
                </NavLink>
            </div>

        </nav>
    )
}