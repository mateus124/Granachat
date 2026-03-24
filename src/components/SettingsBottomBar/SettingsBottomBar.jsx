import styles from "./SettingsBottomBar.module.css";

const SettingsBottomBar = () => {
  return (
    <footer className={styles.bottomBar}>
      <small>Última atualização: Hoje às 09:42</small>
      <div className={styles.actions}>
        <button className={styles.textButton} type="button">
          Descartar
        </button>
        <button className={styles.primaryButton} type="button">
          Salvar Todas as Configurações
        </button>
      </div>
    </footer>
  );
};

export default SettingsBottomBar;
