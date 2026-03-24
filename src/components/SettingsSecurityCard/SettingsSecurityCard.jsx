import styles from "./SettingsSecurityCard.module.css";

const SettingsSecurityCard = () => {
  return (
    <article className={styles.card}>
      <h2>Segurança da Conta</h2>
      <label className={styles.fullField}>
        E-mail
        <input type="email" defaultValue="ricardo.silva@exemplo.com.br" />
      </label>

      <h3>Alterar Senha</h3>
      <label className={styles.fullField}>
        Senha atual
        <input type="password" />
      </label>

      <div className={styles.formGrid}>
        <label>
          Nova senha
          <input type="password" />
        </label>
        <label>
          Confirmar nova senha
          <input type="password" />
        </label>
      </div>

      <button className={styles.secondaryButton} type="button">
        Atualizar Senha
      </button>
    </article>
  );
};

export default SettingsSecurityCard;
