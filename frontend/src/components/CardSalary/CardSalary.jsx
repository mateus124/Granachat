import { FaMoneyBillWave } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import styles from './CardSalary.module.css';

const CardSalary = () => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <p>Salário Total</p>
                <FaMoneyBillWave size={26} color="#7311D4"/>
            </div>
            <h2 className={styles.money}>R$ 12.500,00</h2>
            <div className={styles.subtitle}>
                <HiMiniArrowTrendingUp />
                <p>+5.2% em relação ao mês anterior</p>
            </div>
        </div>
    )
}

export default CardSalary