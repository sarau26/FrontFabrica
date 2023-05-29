import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { JefeDepartamentoContext } from "../context/JefeDepartamentoContext";
import { putCursos } from "../helpers/api";
import "./index.css";


export const ModificarCurso = () => {

    const {
        formState,
        onInputChange,
        onResetForm,
        onSelectChange,
        handleChexbox,
        materia,
        programaAcademico,
        versionPensum,
        creditos,
        nivelAcademico,
        intensidadHoraria,
        sede,
        gruposEspejo,
        validable,
        obligatorio,
        habilitable,
    } = useContext(JefeDepartamentoContext);

    const navigate = useNavigate();

    const returnMenu = () => {

        navigate('/menu-jefe-departamento')

    }

    const onSubmitForm = () => {
        putCursos(formState);
        onResetForm();
        Swal.fire({
            icon: 'success',
            title: `Modificación de curso exitosa`,
            text: `El curso de: ${materia} fue modificado`,
        })
        console.log(formState)
    }

    return (
        <>
            <form className="form-cursos" onSubmit={onSubmitForm}>

                <div className="form-cursos__div d-flex row">
                    <div className="col-6 d-grid">
                        <label className="form-cursos__div-label"><b>Código de materia: </b></label>
                        <label className="form-cursos__div-label" for="lang"><b>programaAcademico: </b></label>
                        <label className="form-cursos__div-label" for="lang"><b>Versión del pensum: </b></label>
                        <label className="form-cursos__div-label" for="lang"><b>Nivel académico: </b></label>
                        <label className="form-cursos__div-label"><b>Creditos académicos: </b></label>
                        <label className="form-cursos__div-label"><b>Intensidad horaria: </b></label>
                        <label className="form-cursos__div-label" for="lang"><b>Sede: </b></label>
                        <label className="form-cursos__div-label"><b>Admite grupos espejos: </b></label>
                        <label className="form-cursos__div-label"><b>Validable: </b></label>
                        <label className="form-cursos__div-label"><b>Obligatorio: </b></label>
                        <label className="form-cursos__div-label"><b>Habilitable: </b></label>
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

                        <div className="form-cursos__div-inner">

                            <select name="nivelAcademico" value={nivelAcademico} onChange={(e) => onSelectChange(e, true)} required="true">
                                <option name="" selected></option>
                                <option name="1">1</option>
                                <option name="2">2</option>
                                <option name="3">3</option>
                                <option name="4">4</option>
                                <option name="5">5</option>
                                <option name="6">6</option>
                                <option name="7">7</option>
                                <option name="8">8</option>
                                <option name="9">9</option>
                                <option name="10">10</option>
                            </select>
                        </div>

                        <div className="form-cursos__div-inner">

                            <input
                                className=""
                                type="number"
                                name="creditos"
                                value={creditos}
                                onChange={onInputChange}
                                required="true"
                            />
                        </div>


                        <div className="form-cursos__div-inner">

                            <input
                                className=""
                                type="number"
                                name="intensidadHoraria"
                                value={intensidadHoraria}
                                onChange={onInputChange}
                                required="true"
                            />
                        </div>

                        <div className="form-cursos__div-inner">

                            <select name="sede" value={sede} onChange={onInputChange} required="true">
                                <option name="" selected></option>
                                <option name="Ciudadela Universitaria">Ciudadela Universitaria</option>
                                <option name="Cede Robledo">Sede Robledo</option>
                                <option name="Virtual">Virtual</option>
                            </select>
                        </div>

                        <div className="form-cursos__div-inner">

                            <input
                                className="mycheck"
                                type="checkbox"
                                name="gruposEspejo"
                                checked={gruposEspejo}
                                onChange={handleChexbox}

                            />
                        </div>

                        <div className="form-cursos__div-inner">

                            <input
                                className="mycheck"
                                type="checkbox"
                                name="validable"
                                checked={validable}
                                onChange={handleChexbox}
                            />
                        </div>

                        <div className="form-cursos__div-inner">

                            <input
                                className="mycheck"
                                type="checkbox"
                                name="obligatorio"
                                checked={obligatorio}
                                onChange={handleChexbox}
                            />
                        </div>

                        <div className="form-cursos__div-inner">

                            <input
                                className="mycheck"
                                type="checkbox"
                                name="habilitable"
                                checked={habilitable}
                                onChange={handleChexbox}
                            />
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
                    >Modificar Curso</button>
                </div>

            </form>


        </>


    )
}