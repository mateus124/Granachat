import { useState } from 'react';
import Logo from '../../components/Logo/Logo'
import { GrCircleQuestion } from "react-icons/gr";
import Inputbox from '../../components/Inputbox/Inputbox';
import Button from '../../components/Button/Button';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from './Login.module.css';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? '';

const FORM_MODES = {
    login: {
        title: 'Bem-vindo de volta',
        subtitle: 'Entre na sua conta para gerenciar suas finanças.',
        submitText: 'Entrar',
        endpoint: '/auth/login',
        fields: [
            {
                name: 'email',
                label: 'Endereço de e-mail',
                type: 'email',
                place: 'exemplo@email.com'
            },
            {
                name: 'password',
                label: 'Senha',
                type: 'password',
                place: 'Digite sua senha'
            }
        ]
    },
    register: {
        title: 'Crie sua conta',
        subtitle: 'Comece a controlar suas finanças com inteligência artificial.',
        submitText: 'Criar Conta',
        endpoint: '/auth/register',
        fields: [
            {
                name: 'name',
                label: 'Nome Completo',
                type: 'text',
                place: 'Digite seu nome'
            },
            {
                name: 'email',
                label: 'Endereço de e-mail',
                type: 'email',
                place: 'exemplo@email.com'
            },
            {
                name: 'password',
                label: 'Senha',
                type: 'password',
                place: 'Crie uma senha forte'
            }
        ]
    }
};

const Login = () => {
    const [mode, setMode] = useState('login');
    const [feedback, setFeedback] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const activeForm = FORM_MODES[mode];
    const isLoginMode = mode === 'login';

    const toggleMode = () => {
        setMode(isLoginMode ? 'register' : 'login');
        setFeedback('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const payload = Object.fromEntries(formData.entries());

        setIsSubmitting(true);
        setFeedback('Enviando...');

        try {
            const response = await fetch(`${API_BASE_URL}${activeForm.endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Não foi possível concluir a solicitação.');
            }

            setFeedback(isLoginMode ? 'Login realizado com sucesso.' : 'Conta criada com sucesso.');
            event.currentTarget.reset();
        } catch {
            setFeedback('Erro ao enviar. Verifique os dados e tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <header className={styles.headerlogin}>
                <Logo/>
                <div className={styles.help}><GrCircleQuestion/></div>
            </header> 
            <main className={styles.main}>
                <div className={styles.title}>
                    <h1>{activeForm.title}</h1>
                    <p>{activeForm.subtitle}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {activeForm.fields.map((field) => (
                        <Inputbox
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            place={field.place}
                        />
                    ))}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        children={isSubmitting ? 'Enviando...' : activeForm.submitText}
                    />
                </form>
                {feedback ? <p className={styles.feedback}>{feedback}</p> : null}
                <div className={styles.continue}>
                    <div></div>
                    <p>ou continue com</p>
                    <div></div>
                </div>
                <div className={styles.buttons}>
                    <a href="#"><FcGoogle /> Google</a>
                    <a href="#"><FaApple /> Apple</a>
                </div>
                <p className={styles.alter}>
                    {isLoginMode ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                    {' '}
                    <button type="button" className={styles.alterButton} onClick={toggleMode}>
                        {isLoginMode ? 'Cadastre-se aqui' : 'Entrar aqui'}
                    </button>
                </p>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 GranaChat. Inteligência Artificial para suas economias.</p>
            </footer>
        </>
    )
}

export default Login