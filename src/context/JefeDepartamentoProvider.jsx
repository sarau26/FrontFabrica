import { useForm } from '../hooks/useForm';
import { JefeDepartamentoContext } from './JefeDepartamentoContext';

export const JefeDepartamentoProvider = ({ children }) => {

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
    } = useForm({
        "materia":"",
        "programaAcademico":"",
        "versionPensum":"",
        "creditos":"",
        "nivelAcademico":"",
        "intensidadHoraria":"",
        "sede":"",
        "gruposEspejo": false,
        "validable": false,
        "obligatorio": false,
        "habilitable": false,
    });

    return (
        <JefeDepartamentoContext.Provider value={{
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
        }}>
            {children}
        </JefeDepartamentoContext.Provider>
    )
}
