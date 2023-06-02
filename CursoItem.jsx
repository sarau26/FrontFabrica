
export const CursoItem = ({
    nombre,
    idMateria,
    lineaEnfasis,
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
    btnMsg = "Eliminar Curso",
    onClick
}) => {

    const handleActionClick = (event) => {
        event.preventDefault();
        onClick({
            nombre,
            idMateria,
            lineaEnfasis,
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
        });
    }

    return (
        <div className="div-cursos-creados">

            <div className="div-cursos-creados__div row">
                <div className="div-cursos-creados__row">
                    <label className="div-cursos-creados__label"><b>NOMBRE DE LA MATERIA: </b></label>
                    <label className="m-1"><b>{nombre}</b></label>
                </div>

                <div className="col-3 d-grid div-cursos-creados__col">
                    <label className="div-cursos-creados__label"><b>Codigo del curso: </b></label>
                    <label className="div-cursos-creados__label"><b>Linea de enfasis: </b></label>
                    <label className="div-cursos-creados__label"><b>Programa academico: </b></label>
                    <label className="div-cursos-creados__label"><b>Versión de pensum: </b></label>
                    <label className="div-cursos-creados__label"><b>Creditos: </b></label>
                    <label className="div-cursos-creados__label"><b>Nivel academico: </b></label>
                </div>

                <div className="col-3 d-grid div-cursos-creados__col">
                    <label><b>{idMateria}</b></label>
                    <label><b>{lineaEnfasis}</b></label>
                    <label><b>{programaAcademico}</b></label>
                    <label><b>{versionPensum}</b></label>
                    <label><b>{creditos}</b></label>
                    <label><b>{nivelAcademico}</b></label>
                </div>


                <div className="col-3 d-grid div-cursos-creados__col">
                    <label className="div-cursos-creados__label"><b>Intensidad horaria: </b></label>
                    <label className="div-cursos-creados__label"><b>Sede: </b></label>
                    <label className="div-cursos-creados__label"><b>Grupo espejo: </b></label>
                    <label className="div-cursos-creados__label"><b>Validable: </b></label>
                    <label className="div-cursos-creados__label"><b>Obligatorio: </b></label>
                    <label className="div-cursos-creados__label"><b>Habilitable: </b></label>
                </div>

                <div className="col-3 d-grid div-cursos-creados__col">
                    <label><b>{intensidadHoraria}</b></label>
                    <label><b>{sede}</b></label>
                    <label><b>{gruposEspejo ? "Sí" : "No"}</b></label>
                    <label><b>{validable ? "Sí" : "No"}</b></label>
                    <label><b>{obligatorio ? "Sí" : "No"}</b></label>
                    <label><b>{habilitable ? "Sí" : "No"}</b></label>
                </div>

                <button
                    className="form_button"
                    onClick={handleActionClick}
                >
                    {btnMsg}
                </button>


            </div>

        </div>
    )
}
