import Logo from '../Logo/Logo';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineChat } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <Logo/>
            <nav className={styles.nav}>
                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                    <LuLayoutDashboard size={26}/> Dashboard
                </NavLink>
                <NavLink
                    to="/chat"
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                    <MdOutlineChat size={26}/> Chat
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                    <IoIosSettings size={26}/> Settings
                </NavLink>
            </nav>
            <div className={styles.profile}>
                <div className={styles.image}>
                    <img src="ace.avif" alt="Foto de perfil" />
                </div>
                <div>
                    <p className={styles.profiletitle}>Ricardo Silva</p>
                    <p className={styles.profiledesc}>Freelancer</p>
                </div>
            </div>
        </div>
    )
}

export default Menu