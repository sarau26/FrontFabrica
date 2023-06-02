import { useEffect, useState } from "react"
import { deleteCursos, getAllCursos } from "../services/cursoService"
import { CursoItem } from "./CursoItem";

export const EliminarCurso = () => {
    let [cursos, setCursos] = useState([]);

    const cursosCreados = async () => {
        const newCursos = await getAllCursos();
        setCursos(newCursos);
    }

    useEffect(() => {
        cursosCreados()
            .then(()=>{})
            .catch(error => {});
    }, []);
    useEffect(() => { }, [cursos])

    const onDeleteCurso = async (curso, index) => {
        const deleteCurso = {
            "idMateria": curso.idMateria,
            "programaAcademico": curso.programaAcademico,
            "versionPensum": curso.versionPensum,
        }
        const resp = await deleteCursos(deleteCurso);
        if (resp.ok) {
            const auxCursos = [...cursos]
            auxCursos.splice(index, 1)
            setCursos(auxCursos)
        }
    }

    return (
        <div className="container-cursos-creados">
            {
                cursos?.map((curso, index) => (
                    <div key={index+""}>
                        <CursoItem
                            onClick={(curso) => onDeleteCurso(curso, index)}
                            btnMsg="Eliminar Curso"
                            {...curso}
                            {...curso.materia}
                        />
                    </div>
                ))
            }
            <h1 className="d-flex justify-content-center">{cursos.length == 0 ? "No hay cursos creados" : ""}</h1>
        </div>
    )
}