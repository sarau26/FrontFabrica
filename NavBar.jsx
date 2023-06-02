import { NavLink} from 'react-router-dom';


export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-sm">

            <div className="navbar-nav navbar__items">

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/agregar_fecha"
                >
                    Agregar
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/modificar_fecha"
                >
                    Modificar
                </NavLink>
            
               
            </div>

        </nav>
    )
}