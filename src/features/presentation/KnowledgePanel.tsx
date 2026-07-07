import type { PresentationStage } from './presentationTypes';
import styles from './PresentationCore.module.css';

interface KnowledgePanelProps {
  stage: PresentationStage;
  progress: number;
}

export function KnowledgePanel({ stage, progress }: KnowledgePanelProps) {
  return (
    <aside className={styles.knowledgePanel} aria-label="Current stage knowledge">
      <p className={styles.panelKicker}>当前阶段</p>
      <h2>{stage.title}</h2>
      <p className={styles.description}>{stage.description}</p>

      <dl className={styles.knowledgeList}>
        <div>
          <dt>教学目标</dt>
          <dd>{stage.learningObjective}</dd>
        </div>
        <div>
          <dt>观察重点</dt>
          <dd>{stage.narration}</dd>
        </div>
        <div>
          <dt>阶段说明</dt>
          <dd>{stage.knowledge}</dd>
        </div>
        <div>
          <dt>风险提示</dt>
          <dd>{stage.riskTip}</dd>
        </div>
        <div>
          <dt>行动建议</dt>
          <dd>{stage.actionAdvice}</dd>
        </div>
      </dl>

      <div className={styles.progressBlock} aria-label="阶段变化">
        <div className={styles.progressHeader}>
          <span>阶段变化</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressValue} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </aside>
  );
}
