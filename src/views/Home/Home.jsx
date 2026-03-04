import { useState } from 'react';
import { BsWallet2, BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from './Home.module.css';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.icon}>
                        <BsWallet2 />
                    </div>
                    <p>GranaChat</p>
                </div>
                <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
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
                <button 
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </header>
            <main className={styles.main}>
                <div className={styles.left}>
                    <h1>Controle Suas Finanças <br/><span>Apenas Falando</span></h1>
                    <p>Transforme sua gestão financeira com IA. Registre gastos, ganhos e planeje seu futuro usando apenas comandos de voz ou texto em linguagem natural.</p>
                    <div className={styles.buttonshero}>
                        <a href="#">Começar Grátis</a>
                        <a href="#"><BsFillPlayCircleFill /> Ver Demonstração</a>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="example.png" alt="Exemplo de funcionamento" />
                </div>
            </main>
        </>
    )
}

export default Home