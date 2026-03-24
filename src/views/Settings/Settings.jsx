import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import SettingsBottomBar from "../../components/SettingsBottomBar/SettingsBottomBar";
import SettingsPreferencesCard from "../../components/SettingsPreferencesCard/SettingsPreferencesCard";
import SettingsProfileCard from "../../components/SettingsProfileCard/SettingsProfileCard";
import SettingsSecurityCard from "../../components/SettingsSecurityCard/SettingsSecurityCard";
import SettingsVerifiedCard from "../../components/SettingsVerifiedCard/SettingsVerifiedCard";
import SettingsVersionCard from "../../components/SettingsVersionCard/SettingsVersionCard";
import Styles from "./Settings.module.css";

const Settings = () => {
  return (
    <main className={Styles.main}>
      <Menu />
      <div className={Styles.content}>
        <Header title="Configurações" />
        <div className={`${Styles.settings} settings`}>
          <section className={Styles.grid}>
            <div className={Styles.leftColumn}>
              <SettingsProfileCard />
              <SettingsSecurityCard />
            </div>

            <aside className={Styles.rightColumn}>
              <SettingsPreferencesCard />
              <SettingsVerifiedCard />
              <SettingsVersionCard />
            </aside>
          </section>
          <SettingsBottomBar />
        </div>
      </div>
    </main>
  );
};

export default Settings;
