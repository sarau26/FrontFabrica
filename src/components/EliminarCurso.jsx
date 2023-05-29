import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import { JefeDepartamentoContext } from "../context/JefeDepartamentoContext";
import { deleteCursos } from "../helpers/api";
import "./index.css";

export const EliminarCurso = () => {

    const {
        formState,
        onInputChange,
        onResetForm,
        onSelectChange,
        materia,
        programaAcademico,
        versionPensum,
    } = useContext(JefeDepartamentoContext);

    const navigate = useNavigate();

    const returnMenu = () => {
        navigate('/menu-jefe-departamento')
    }

    const onSubmitForm = () => {
        const { materia, programaAcademico, versionPensum } = formState;
        console.log(materia, programaAcademico, versionPensum);
        deleteCursos({
            "idMateria": materia,
            "programaAcademico": programaAcademico,
            "versionPensum": versionPensum,
        });
        onResetForm();
        Swal.fire({
            icon: 'success',
            title: `Eliminación de  curso exitosa`,
            text: `El curso de: ${materia} fue eliminado`,
        })
        /* console.log(idMateria) */
    }

    return (
        <>
            <form className="form-curso-delete" onSubmit={onSubmitForm}>

                <div className="form-cursos__div d-flex row">
                    <div className="col-6 d-grid">
                        <label className="form-cursos__div-label"><b>Código de materia: </b></label>
                        <label className="form-cursos__div-label" for="lang"><b>programaAcademico: </b></label>
                        <label className="form-cursos__div-label" for="lang"><b>Versión del pensum: </b></label>
                    </div>

                    <div className="col-6">
                        <div className="form-cursos__div-inner">
                            <input
                                className=""
                                type="number"
                                name="materia"
                                value={materia}
                                onChange={onInputChange}
                                required="true"
                            />
                        </div>

                        <div className="form-cursos__div-inner">

                            <select name="programaAcademico" value={programaAcademico} onChange={onInputChange} required="true">
                                <option name="programaAcademico" value="" selected></option>
                                <option name="programaAcademico" value="Ing Sistemas">Ingeniería Sistemas</option>
                                <option name="programaAcademico" value="Ing Electronica">Ingeniería Electronica</option>
                                <option name="programaAcademico" value="Ing Electrica">Ingeniería Electrica</option>
                                <option name="programaAcademico" value="Ing Industrial">Ingeniería Industrial</option>
                            </select>
                        </div>

                        <div className="form-cursos__div-inner">

                            <select name="versionPensum" value={versionPensum} onChange={(e) => onSelectChange(e, true)} required="true">
                                <option name="" selected></option>
                                <option name="3">1</option>
                                <option name="3">2</option>
                                <option name="3">3</option>
                                <option name="4">4</option>
                                <option name="5">5</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button
                        className="form_button"
                        onClick={returnMenu}
                    >Regresar</button>

                    <button
                        className="form_button"
                        /* onClick={onSubmitForm} */
                    >Eliminar Curso</button>
                </div>
            </form>


        </>
    )
}