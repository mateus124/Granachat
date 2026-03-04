import { BsWallet2 } from "react-icons/bs";
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.icon}>
                        <BsWallet2 />
                    </div>
                    <p>GranaChat</p>
                </div>
                <nav>
                    <ul className={styles.lista}>
                        <li><a href="#">Funcionalidades</a></li>
                        <li><a href="#">Como funciona</a></li>
                        <li><a href="#">Feedbacks</a></li>
                    </ul>
                </nav>
                <div className={styles.buttons}>
                    <a href="#">Entrar</a>
                    <a href="#">Começar Agora</a>
                </div>
            </header>
        </>
    )
}

export default Home