import styles from "./SettingsVerifiedCard.module.css";

const SettingsVerifiedCard = () => {
  return (
    <article className={styles.card}>
      <p className={styles.badge}>Conta verificada</p>
      <p>
        Sua conta está protegida com autenticação de dois fatores e criptografia
        ponta a ponta.
      </p>
    </article>
  );
};

export default SettingsVerifiedCard;
