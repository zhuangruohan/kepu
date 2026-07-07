import type { CSSProperties } from 'react';
import type { DisasterStageKey } from '../../presentation/presentationTypes';
import styles from './LandslideScene.module.css';

interface DisasterLayerProps {
  stageKey: DisasterStageKey;
  progress: number;
  isPlaying: boolean;
}

export function DisasterLayer({ stageKey, progress, isPlaying }: DisasterLayerProps) {
  const slideProgress = stageKey === 'slide' ? progress / 100 : stageKey === 'escape' ? 1 : 0;
  const crackProgress = stageKey === 'crack' ? progress : stageKey === 'slide' || stageKey === 'escape' ? 100 : 0;
  const waterProgress =
    stageKey === 'water_penetration'
      ? progress
      : ['soft_soil', 'weak_surface', 'crack', 'slide', 'escape'].includes(stageKey)
        ? 100
        : 0;
  const softProgress = stageKey === 'soft_soil' ? progress / 100 : ['weak_surface', 'crack', 'slide', 'escape'].includes(stageKey) ? 1 : 0;
  const weakProgress = stageKey === 'weak_surface' ? progress / 100 : ['crack', 'slide', 'escape'].includes(stageKey) ? 1 : 0;

  return (
    <div
      className={`${styles.disasterLayer} ${styles[`disaster_${stageKey}`]} ${
        isPlaying ? styles.playing : ''
      }`}
      style={
        {
          '--slide-progress': slideProgress,
          '--soft-progress': softProgress,
          '--weak-progress': weakProgress,
        } as CSSProperties
      }
    >
      <svg className={styles.surfaceWater} viewBox="0 0 100 60" aria-hidden="true">
        <path
          d="M6 18 C20 16 28 25 42 22 C56 19 63 27 78 24 C86 22 92 25 98 22"
          pathLength="100"
          style={{ strokeDashoffset: 100 - waterProgress }}
        />
        <path
          d="M18 27 C30 25 38 33 52 30 C64 28 71 36 86 34"
          pathLength="100"
          style={{ strokeDashoffset: 100 - waterProgress * 0.85 }}
        />
      </svg>

      <svg className={styles.penetrationPaths} viewBox="0 0 100 72" aria-hidden="true">
        <path
          d="M22 6 C30 20 38 25 44 42 C49 54 56 60 68 70"
          pathLength="100"
          style={{ strokeDashoffset: 100 - waterProgress }}
        />
        <path
          d="M42 5 C50 18 58 27 62 42 C66 55 72 62 84 68"
          pathLength="100"
          style={{ strokeDashoffset: 100 - waterProgress * 0.72 }}
        />
      </svg>

      <svg className={styles.crackNetwork} viewBox="0 0 120 90" aria-hidden="true">
        <path
          d="M28 8 L48 20 L41 36 L68 48 L58 66 L86 84"
          pathLength="100"
          style={{ strokeDashoffset: 100 - crackProgress }}
        />
        <path
          d="M48 20 L78 12 M67 48 L102 54 M42 36 L18 52 M58 66 L35 82"
          pathLength="100"
          style={{ strokeDashoffset: 100 - crackProgress * 0.9 }}
        />
      </svg>

      <div className={styles.softSoilZone}>
        <span>土体变软</span>
      </div>
      <div className={styles.weakSurface}>
        <span>软弱面</span>
      </div>
      <div className={styles.slideMass} />
      <div className={styles.slideDust} />
      <div className={styles.dangerZone}>
        <span>危险区域</span>
      </div>
      <svg className={styles.slideArrow} viewBox="0 0 120 80" aria-hidden="true">
        <path d="M18 16 C42 28 70 44 98 62" />
        <path d="M98 62 L82 61 M98 62 L90 48" />
      </svg>
    </div>
  );
}
