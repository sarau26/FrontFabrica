import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { JefeDepartamentoContext } from "../context/JefeDepartamentoContext";

import "./index.css";
import { putCursos, getAllCursos } from "../services/cursoService";
import { CursoItem } from "./CursoItem";

export const ModificarCurso = () => {
  const [loaded, setLoaded] = useState(false);
  const [cursos, setCursos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    onUpdateForm,
  } = useContext(JefeDepartamentoContext);

  const cursosCreados = async () => {
    const newCursos = await getAllCursos();
    setCursos(newCursos);
  };

  useEffect(() => {
    cursosCreados()
      .then(()=>{})
      .catch(error => {});
  }, []);

  const navigate = useNavigate();

  const returnMenu = () => {
    navigate("/menu-jefe-departamento");
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const {
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
    } = formState;

    const resp = await putCursos(
      {
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
      },
      materia
    );
    if (resp.ok) {
        const cursoUpdated = await resp.json()

        const auxCursos = [...cursos]
        auxCursos.splice(currentIndex, 1, cursoUpdated);

        onResetForm();
        setCursos(auxCursos);
        setLoaded(false);
    }
  };

  const onModifiedCurso = (curso, index) => {
    onUpdateForm({ ...curso, materia: curso.idMateria });
    setLoaded(true);
    setCurrentIndex(index)
  };

  const returnList = () => {
    onResetForm();
    setLoaded(false);
  }
  return (
    <>
      {!loaded && (

        <div className="container-cursos-creados">
          {cursos?.map((curso, index) => (
              <div key={index+""}>
                <CursoItem
                  onClick={(curso) => onModifiedCurso(curso, index)}
                  btnMsg="Modificar Curso"
                  {...curso}
                  {...curso.materia}
                />
              </div>
            ))}
          <h1 className="d-flex justify-content-center">
            {cursos.length == 0 ? "No hay cursos creados" : ""}
          </h1>
        </div>
      )}

      {loaded && (
        <>
            <form className="form-cursos" onSubmit={onSubmitForm}>
            <button className="form_button mb-4" onClick={returnList}>
                Regresar
            </button>
            <div className="form-cursos__div d-flex row">
                <div className="col-6 d-grid">
                <label className="form-cursos__div-label">
                    <b>Código de materia: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>programaAcademico: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Versión del pensum: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Nivel académico: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Creditos académicos: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Intensidad horaria: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Sede: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Admite grupos espejos: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Validable: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Obligatorio: </b>
                </label>
                <label className="form-cursos__div-label">
                    <b>Habilitable: </b>
                </label>
                </div>

                <div className="col-6">
                <div className="form-cursos__div-inner">
                    <input
                    className=""
                    type="number"
                    name="materia"
                    value={materia}
                    min={0}
                    onChange={onInputChange}
                    required={true}
                    />
                </div>

                <div className="form-cursos__div-inner">
                    <select
                    name="programaAcademico"
                    value={programaAcademico}
                    onChange={onInputChange}
                    required={true}
                    >
                    <option name="programaAcademicoNull" value=""></option>
                    <option
                        name="programaAcademicoIngSistemas"
                        value="Ing Sistemas"
                    >
                        Ingeniería Sistemas
                    </option>
                    <option
                        name="programaAcademicoIngElectronica"
                        value="Ing Electronica"
                    >
                        Ingeniería Electronica
                    </option>
                    <option
                        name="programaAcademicoIngElectrica"
                        value="Ing Electrica"
                    >
                        Ingeniería Electrica
                    </option>
                    <option
                        name="programaAcademicoIngIndustrial"
                        value="Ing Industrial"
                    >
                        Ingeniería Industrial
                    </option>
                    <option name="programaAcademicoIngCivil" value="Ing Civil">
                        Ingeniería Civil
                    </option>
                    </select>
                </div>

                <div className="form-cursos__div-inner">
                    <select
                    name="versionPensum"
                    value={versionPensum}
                    onChange={(e) => onSelectChange(e, true)}
                    required={true}
                    >
                    <option name=""></option>
                    <option name="3">1</option>
                    <option name="3">2</option>
                    <option name="3">3</option>
                    <option name="4">4</option>
                    <option name="5">5</option>
                    </select>
                </div>

                <div className="form-cursos__div-inner">
                    <select
                    name="nivelAcademico"
                    value={nivelAcademico}
                    onChange={(e) => onSelectChange(e, true)}
                    required={true}
                    >
                    <option name=""></option>
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
                    min={0}
                    onChange={onInputChange}
                    required={true}
                    />
                </div>

                <div className="form-cursos__div-inner">
                    <input
                    className=""
                    type="number"
                    name="intensidadHoraria"
                    value={intensidadHoraria}
                    min={0}
                    onChange={onInputChange}
                    required={true}
                    />
                </div>

                <div className="form-cursos__div-inner">
                    <select
                    name="sede"
                    value={sede}
                    onChange={onInputChange}
                    required={true}
                    >
                    <option value=""></option>
                    <option value="Ciudadela Universitaria">
                        Ciudadela Universitaria
                    </option>
                    <option value="Sede Robledo">Sede Robledo</option>
                    <option value="Virtual">Virtual</option>
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
            </form>
            <div className="d-flex justify-content-between">
                <button className="form_button" onClick={returnMenu}>
                Regresar Menu
                </button>

                <button className="form_button">Modificar Curso</button>
            </div>
        </>
        
      )}
    </>
  );
};
