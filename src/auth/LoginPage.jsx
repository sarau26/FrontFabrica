import { useForm } from '../hooks/useForm';
import './login.css';

export const LoginPage = () => {

    const { onInputChange, onResetForm, user, password } = useForm({
        "user": "",
        "password": "",
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        onResetForm();
        console.log(user + password)
    }

    return (
        <div className="form_container">
            <form className="form">
                <h1 className="mb-4 title_color">Iniciar Sesión</h1>

                <p className="mb-4">Introduzca su nombre de usuario y contraseña para autentificarse en el Portal Universitario.</p>

                <label className="title_color"><b>*Usuario</b></label>
                <input
                    className="mb-4 form_input"
                    type="text"
                    name="user"
                    value={user}
                    onChange={onInputChange}
                />

                <label className="title_color"><b>*Contraseña</b></label>
                <input
                    className="mb-5 form_input"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />

                <button
                    className="form_button"
                    onClick={onSubmitForm}
                >Conectar</button>

            </form>
        </div>

    )
}
