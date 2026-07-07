import type { DisasterStageKey } from '../../presentation/presentationTypes';
import styles from './LandslideScene.module.css';

interface WeatherLayerProps {
  stageKey: DisasterStageKey;
  progress: number;
  isPlaying: boolean;
}

export function WeatherLayer({ stageKey, progress, isPlaying }: WeatherLayerProps) {
  const isRainStage = stageKey === 'rain' || stageKey === 'water_penetration';
  const rainOpacity = isRainStage ? 0.3 + progress / 150 : 0.08;

  return (
    <div className={styles.weatherLayer} aria-hidden="true">
      <div
        className={`${styles.rainField} ${isPlaying ? styles.playing : ''}`}
        style={{ opacity: rainOpacity }}
      >
        {Array.from({ length: 54 }, (_, index) => (
          <span
            key={`rain-${index}`}
            style={{
              left: `${(index * 5.7) % 100}%`,
              animationDelay: `${(index % 9) * 90}ms`,
            }}
          />
        ))}
      </div>
      <div className={`${styles.fogLayer} ${styles[`fog_${stageKey}`]}`} />
      <div className={`${styles.wetSheen} ${isRainStage ? styles.wetSheenVisible : ''}`} />
    </div>
  );
}
