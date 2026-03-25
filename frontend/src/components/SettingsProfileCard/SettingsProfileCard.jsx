import styles from "./SettingsProfileCard.module.css";

const SettingsProfileCard = () => {
  return (
    <article className={styles.card}>
      <h2>Informações do Perfil</h2>
      <div className={styles.formGrid}>
        <label>
          Nome completo
          <input type="text" defaultValue="Ricardo Silva" />
        </label>
        <label>
          Ocupação / cargo
          <input type="text" defaultValue="Desenvolvedor Sênior" />
        </label>
      </div>
      <label className={styles.fullField}>
        Salário mensal (R$)
        <input type="text" defaultValue="R$ 12.500,00" />
      </label>
      <button className={styles.primaryButton} type="button">
        Salvar Alterações
      </button>
    </article>
  );
};

export default SettingsProfileCard;
