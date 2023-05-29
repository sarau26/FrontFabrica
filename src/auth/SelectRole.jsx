import { useNavigate } from 'react-router-dom';
import './login.css';

export const SelectRole = () => {

    const navigate = useNavigate();

    const selectRole = ({target}) => {
        if(target.name == 'button_jefe_departamento') {
            navigate('/menu-jefe-departamento')
        } else {
            navigate('/menu-vicedecano')
        }
        
    }

    return (
        <div className="form_container_role">
            <form className="form">
                <h1 className="mb-5 d-flex justify-content-center">Programación del Período Académico</h1>

                <div className="form_div">
                    <h2 className="mb-4 title_color d-flex justify-content-center">Seleccione su rol: </h2>

                    <div className="form_container_div">
                        <button
                            className="form_button"
                            onClick={selectRole}
                            name="button_jefe_departamento"
                        >
                            Jefe de departamento
                        </button>

                        <button
                            className="form_button"
                            onClick={selectRole}
                            name="button_vicedecano"
                        >
                            Vicedecano
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}
