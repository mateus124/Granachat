import styles from "./SettingsPreferencesCard.module.css";

const SettingsPreferencesCard = () => {
  return (
    <article className={styles.card}>
      <h2>Preferências</h2>

      <div className={styles.preferenceItem}>
        <div>
          <strong>Notificações</strong>
          <span>Alertas de gastos e saldo.</span>
        </div>
        <label className={styles.switch}>
          <input type="checkbox" defaultChecked />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div className={styles.preferenceItem}>
        <div>
          <strong>Modo escuro</strong>
          <span>Aparência do sistema.</span>
        </div>
        <label className={styles.switch}>
          <input type="checkbox" disabled />
          <span className={styles.slider}></span>
        </label>
      </div>

      <div className={styles.preferenceItem}>
        <div>
          <strong>Relatórios semanais</strong>
          <span>Resumo por e-mail.</span>
        </div>
        <label className={styles.switch}>
          <input type="checkbox" disabled />
          <span className={styles.slider}></span>
        </label>
      </div>
    </article>
  );
};

export default SettingsPreferencesCard;
