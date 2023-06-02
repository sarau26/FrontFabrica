import Swal from 'sweetalert2';
import ApiService from './_api';

export const getAllCursos = async () => {
    const cursosResp = await ApiService.get("cursos/find-all");

    return await cursosResp.json();
}

export const postCursos = async (curso, materia) => {

    const resp = await ApiService.post(curso, "cursos/save");

    if (resp.ok) {
        Swal.fire({
            icon: 'success',
            title: `Creación de curso exitosa`,
            text: `El curso de: ${materia} fue creado`,
        })
        return resp;
    } else {
        const message = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El codigo del curso: ${materia} no existe`,
        })
        throw new Error(message);
    }
}

export const putCursos = async (curso, materia) => {
    const resp = await ApiService.put(curso, "cursos/update");

    if (resp.ok) {
        Swal.fire({
            icon: 'success',
            title: `Actualización de curso exitosa`,
            text: `El curso de: ${materia} fue actualizado`,
        })
        return resp;
    } else {
        const message = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El codigo del curso: ${materia} no es valido`,
        })
        throw new Error(message);
    }
}

export const deleteCursos = async (curso) => {
    const {idMateria} = curso;
    const resp = await ApiService.deleteApi(curso, "cursos/delete");

    if (resp.ok) {
        Swal.fire({
            icon: 'success',
            title: `Eliminación de curso exitosa`,
            text: `El curso de: ${idMateria} fue eliminado`,
        })
        return resp;
    } else {
        const message = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El codigo del curso: ${idMateria} no es valido`,
        })
        throw new Error(message);
    }
}