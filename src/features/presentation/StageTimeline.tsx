import type { PresentationStage } from './presentationTypes';
import styles from './PresentationCore.module.css';

interface StageTimelineProps {
  stages: PresentationStage[];
  currentStageId: string;
  onStageSelect: (stageId: string) => void;
}

export function StageTimeline({
  stages,
  currentStageId,
  onStageSelect,
}: StageTimelineProps) {
  return (
    <nav className={styles.timeline} aria-label="演示阶段">
      {stages.map((stage) => {
        const isActive = stage.id === currentStageId;

        return (
          <button
            className={isActive ? styles.timelineItemActive : styles.timelineItem}
            key={stage.id}
            type="button"
            aria-current={isActive ? 'step' : undefined}
            onClick={() => onStageSelect(stage.id)}
          >
            <span className={styles.stageOrder}>{stage.order}</span>
            <span>{stage.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
