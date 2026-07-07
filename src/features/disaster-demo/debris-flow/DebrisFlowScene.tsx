import type { CSSProperties } from 'react';
import type { PresentationSceneProps } from '../../presentation/presentationTypes';
import styles from './DebrisFlowScene.module.css';

type DebrisFlowSceneProps = PresentationSceneProps & {
  caseCta?: {
    label: string;
    onClick: () => void;
  };
};

export function DebrisFlowScene({ stage, progress, isPlaying, caseCta }: DebrisFlowSceneProps) {
  return (
    <div className={styles.scene} data-stage={stage.scene.stageKey}>
      <div className={styles.mountains} />
      <div className={styles.valley} />
      <div className={styles.highGroundLeft}>两侧高处安全区</div>
      <div className={styles.highGroundRight}>两侧高处安全区</div>
      <div className={`${styles.rain} ${isPlaying ? styles.playing : ''}`}>
        {Array.from({ length: 36 }, (_, index) => (
          <span key={`rain-${index}`} style={{ left: `${(index * 7) % 100}%` }} />
        ))}
      </div>
      <div className={styles.waterPath} style={{ '--flow': progress / 100 } as CSSProperties} />
      <div className={styles.waterLevelAlert}>河水上涨或断流</div>
      <div className={styles.debrisSurge} style={{ '--flow': progress / 100 } as CSSProperties}>
        {Array.from({ length: 12 }, (_, index) => (
          <span key={`stone-${index}`} />
        ))}
      </div>
      <div className={styles.lowDangerZone}>沟谷低处危险</div>
      <div className={styles.bridge}>桥下危险</div>
      <div className={styles.wrongRoutes}>顺沟跑 / 躲桥下 / 回头拿东西</div>
      <svg className={styles.safeRoutes} viewBox="0 0 100 60" aria-hidden="true">
        <path d="M50 42 C36 34 24 22 12 10" />
        <path d="M54 42 C68 34 82 22 94 10" />
      </svg>
      <div className={styles.sound}>轰鸣声</div>
      <div className={styles.structureLabels} aria-hidden="true">
        <span className={styles.labelRain}>上游暴雨区</span>
        <span className={styles.labelCollect}>沟谷汇水区</span>
        <span className={styles.labelSediment}>松散土石堆积</span>
        <span className={styles.labelMuddy}>浑水流</span>
        <span className={styles.labelChannel}>泥石流主通道</span>
        <span className={styles.labelBridge}>桥梁 / 沟口危险区</span>
        <span className={styles.labelHigh}>两侧高处安全区</span>
      </div>
      <div className={styles.copy}>
        <p>泥石流演示 · {stage.order}/8</p>
        <h1>{stage.title}</h1>
        <span>{isPlaying ? '播放中' : '已暂停'} · {stage.scene.focus}</span>
      </div>
      {stage.scene.stageKey === 'high_escape' && caseCta ? (
        <button className={styles.caseCta} type="button" onClick={caseCta.onClick}>
          {caseCta.label}
        </button>
      ) : null}
    </div>
  );
}
