import { SettingsForm } from '@components/SettingsForm';
import styles from '@styles/Page.module.css';

export const Settings = () => {
  return (
      <div className={styles.mainBlock}>
        <p className={styles.title}>Настройки</p>
        <SettingsForm/>
      </div>
  );
};
