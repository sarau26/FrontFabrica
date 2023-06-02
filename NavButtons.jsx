import { useNavigate } from "react-router-dom";

export const NavButtons = ( props ) => {

    const navigate = useNavigate();

    const returnMenu = () => {
       
        navigate('/menu-jefe-departamento')
        
    }
    return (
        <div className="d-flex justify-content-between">
            <button
                className="form_button"
                onClick={returnMenu}
            >Regresar</button>
            
            {props.showGenerate ? <button className="form_button" onClick={props.onGenerate}>Generar</button> : '' }
              
              
            <button
                className="form_button"
                onClick={props.onSubmit}
                /* onClick={onSubmitForm} */
            >Guardar</button>
        </div>
    )
}
