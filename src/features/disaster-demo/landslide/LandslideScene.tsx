import type { PresentationSceneProps } from '../../presentation/presentationTypes';
import { AnnotationLayer } from './AnnotationLayer';
import { BackgroundScene } from './BackgroundScene';
import { DisasterLayer } from './DisasterLayer';
import { EscapeLayer } from './EscapeLayer';
import { TerrainLayer } from './TerrainLayer';
import { WeatherLayer } from './WeatherLayer';
import styles from './LandslideScene.module.css';

type LandslideSceneProps = PresentationSceneProps & {
  caseCta?: {
    label: string;
    onClick: () => void;
  };
};

export function LandslideScene({ stage, progress, isPlaying, caseCta }: LandslideSceneProps) {
  const stageKey = stage.scene.stageKey;

  return (
    <div className={styles.scene} data-stage={stageKey}>
      <BackgroundScene stageKey={stageKey} />
      <WeatherLayer stageKey={stageKey} progress={progress} isPlaying={isPlaying} />
      <TerrainLayer stageKey={stageKey} progress={progress} />
      <DisasterLayer stageKey={stageKey} progress={progress} isPlaying={isPlaying} />
      <EscapeLayer stage={stage} progress={progress} />
      <div className={styles.structureLabelLayer} aria-hidden="true">
        <span className={styles.labelSurfaceSoil}>表层土体</span>
        <span className={styles.labelWater}>雨水入渗</span>
        <span className={styles.labelWeakSurface}>软弱面</span>
        <span className={styles.labelCrack}>裂缝扩展</span>
        <span className={styles.labelSlideMass}>滑动体</span>
        <span className={styles.labelFoot}>坡脚 / 道路</span>
        <span className={styles.labelVillage}>居民点</span>
        <span className={styles.labelSafeRoute}>正确逃生路线</span>
      </div>
      <AnnotationLayer stage={stage} progress={progress} isPlaying={isPlaying} />
      {stageKey === 'escape' && caseCta ? (
        <button className={styles.caseCta} type="button" onClick={caseCta.onClick}>
          {caseCta.label}
        </button>
      ) : null}
    </div>
  );
}
