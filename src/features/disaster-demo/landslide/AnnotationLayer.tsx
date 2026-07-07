import type { PresentationStage } from '../../presentation/presentationTypes';
import styles from './LandslideScene.module.css';

interface AnnotationLayerProps {
  stage: PresentationStage;
  progress: number;
  isPlaying: boolean;
}

const riskLabels = [
  { max: 0.3, label: '低', tone: 'riskLow' },
  { max: 0.55, label: '中等 ↑', tone: 'riskMedium' },
  { max: 0.82, label: '较高 ↑', tone: 'riskHigh' },
  { max: 1, label: '高危', tone: 'riskCritical' },
];

export function AnnotationLayer({ stage, progress, isPlaying }: AnnotationLayerProps) {
  const riskValue = Math.max(...stage.stateEffects.map((effect) => effect.intensity), 0.25);
  const risk = riskLabels.find((item) => riskValue <= item.max) ?? riskLabels[3];

  return (
    <div className={styles.annotationLayer}>
      <div className={styles.stageHud}>
        <p className={styles.sceneKicker}>阶段 {stage.order} · {stage.scene.focus}</p>
        <h1>{stage.title}</h1>
        <p>{stage.narration}</p>
        <div className={styles.hudMeta}>
          <span className={`${styles.riskBadge} ${styles[risk.tone]}`}>
            危险等级：{risk.label}
          </span>
          <span>{isPlaying ? '播放中' : '已暂停'} · 阶段变化中</span>
        </div>
      </div>

      <div className={styles.teachingCallout}>
        <strong>观察重点</strong>
        <span>{stage.riskTip}</span>
      </div>
    </div>
  );
}
