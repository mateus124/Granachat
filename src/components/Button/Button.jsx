import styles from './Button.module.css';

const Button = ({ children, type = "button", onClick, disabled = false, ...rest }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button