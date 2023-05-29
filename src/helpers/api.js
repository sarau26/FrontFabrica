export const getCursos = async() => {

    const url = "http://localhost:8080/api/cursos/find-all";
    const resp = await fetch( url );
    
    const cursos = await resp.json();

    console.log(cursos)

}

export const postCursos = async (curso) => {

    try {
        const url = "http://localhost:8080/api/cursos/save";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(curso),
            redirect: 'follow'
        };
        const resp = await fetch(url, requestOptions);
        const newCurso = await resp.json();
        console.log(newCurso);

    } catch (error) {
        console.log(error)
    }

}

export const putCursos = async (curso) => {

    try {
        const url = "http://localhost:8080/api/cursos/update";
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(curso),
            redirect: 'follow'
        };
        const resp = await fetch(url, requestOptions);
        const updateCurso = await resp.json();
        console.log(updateCurso);

    } catch (error) {
        console.log(error)
    }

}

export const deleteCursos = async (curso) => {

    try {
        const url = "http://localhost:8080/api/cursos/delete";
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(curso),
            redirect: 'follow'
        };
        const resp = await fetch(url, requestOptions);
        const deleteCurso = await resp.json();
        console.log(deleteCurso);

    } catch (error) {
        console.log(error)
    }

}