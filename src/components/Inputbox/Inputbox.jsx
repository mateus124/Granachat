import styles from './Inputbox.module.css';

const Inputbox = ({name, label, type, place}) => {
    return (
        <div className={styles.box}>
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={place} name={name} required/>
        </div>
    )
}

export default Inputbox