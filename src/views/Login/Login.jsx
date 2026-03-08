import Logo from '../../components/Logo/Logo'
import { GrCircleQuestion } from "react-icons/gr";
import Inputbox from '../../components/Inputbox/Inputbox';
import Button from '../../components/Button/Button';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import styles from './Login.module.css';

const Login = () => {
    return (
        <>
            <header className={styles.headerlogin}>
                <Logo/>
                <div className={styles.help}><GrCircleQuestion/></div>
            </header> 
            <main className={styles.main}>
                <div className={styles.title}>
                    <h1>Bem-vindo de volta</h1>
                    <p>Entre na sua conta para gerenciar suas finanças.</p>
                </div>
                <form>
                    <Inputbox
                        name="email"
                        label="Endereço de e-mail"
                        type="email"
                        place="exemplo@email.com"
                    />
                    <Inputbox
                        name="password"
                        label="Senha"
                        type="password"
                        place="Crie uma senha forte"
                    />
                    <Button
                        type="submit"
                        children="Entrar"
                    />
                </form>
                <div className={styles.continue}>
                    <div></div>
                    <p>ou continue com</p>
                    <div></div>
                </div>
                <div className={styles.buttons}>
                    <a href="#"><FcGoogle /> Google</a>
                    <a href="#"><FaApple /> Apple</a>
                </div>
                <p className={styles.alter}>Não tem uma conta? <a href="#">Cadastre-se aqui</a></p>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 GranaChat. Inteligência Artificial para suas economias.</p>
            </footer>
        </>
    )
}

export default Login