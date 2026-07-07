import type { DisasterStageKey } from '../../presentation/presentationTypes';
import styles from './LandslideScene.module.css';

interface BackgroundSceneProps {
  stageKey: DisasterStageKey;
}

export function BackgroundScene({ stageKey }: BackgroundSceneProps) {
  return (
    <div className={`${styles.backgroundScene} ${styles[`background_${stageKey}`]}`}>
      <div className={styles.skyGradient} />
      <div className={styles.cloudBand}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.mountainFar} />
      <div className={styles.mountainMid} />
      <div className={styles.valleyMist} />
      <div className={styles.forestBand}>
        {Array.from({ length: 18 }, (_, index) => (
          <span key={`forest-${index}`} style={{ left: `${index * 6}%` }} />
        ))}
      </div>
    </div>
  );
}
