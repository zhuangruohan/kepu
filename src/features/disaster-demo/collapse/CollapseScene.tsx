import type { CSSProperties } from 'react';
import type { PresentationSceneProps } from '../../presentation/presentationTypes';
import styles from './CollapseScene.module.css';

type CollapseSceneProps = PresentationSceneProps & {
  caseCta?: {
    label: string;
    onClick: () => void;
  };
};

export function CollapseScene({ stage, progress, isPlaying, caseCta }: CollapseSceneProps) {
  return (
    <div className={styles.scene} data-stage={stage.scene.stageKey}>
      <div className={styles.sky} />
      <div className={styles.rainVeil} />
      <div className={styles.mountainBack} />
      <div className={styles.cliff}>
        <span className={styles.rockFace} />
        <span className={styles.crack} style={{ height: `${30 + progress * 0.5}%` }} />
      </div>
      <svg className={styles.fallPath} viewBox="0 0 100 100" aria-hidden="true">
        <path d="M30 12 C44 30 50 44 64 58 C74 68 82 80 90 92" />
      </svg>
      <div className={styles.village}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.road} />
      <div className={styles.warningSign}>注意落石</div>
      <div className={styles.rockSmall} />
      <div className={styles.rockMass} style={{ '--fall': progress / 100 } as CSSProperties} />
      <div className={styles.dust} />
      <div className={styles.dangerZone}>坡脚危险区</div>
      <svg className={styles.safeArrow} viewBox="0 0 100 60" aria-hidden="true">
        <path d="M74 40 C56 36 38 27 18 12" />
      </svg>
      <div className={styles.safeLabel}>远离陡坡下方</div>
      <div className={styles.soundWave}>岩石摩擦声</div>
      <div className={styles.structureLabels} aria-hidden="true">
        <span className={styles.labelCliff}>陡坡危岩</span>
        <span className={styles.labelCrack}>岩体裂缝</span>
        <span className={styles.labelFallPath}>落石路径</span>
        <span className={styles.labelRoad}>道路边坡</span>
        <span className={styles.labelDeposit}>坡脚堆积区</span>
        <span className={styles.labelSafe}>安全撤离方向</span>
      </div>
      <div className={styles.copy}>
        <p>崩塌演示 · {stage.order}/7</p>
        <h1>{stage.title}</h1>
        <span>{isPlaying ? '播放中' : '已暂停'} · {stage.scene.focus}</span>
      </div>
      {stage.scene.stageKey === 'collapse_escape' && caseCta ? (
        <button className={styles.caseCta} type="button" onClick={caseCta.onClick}>
          {caseCta.label}
        </button>
      ) : null}
    </div>
  );
}
