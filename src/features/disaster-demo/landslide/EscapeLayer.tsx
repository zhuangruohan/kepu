import { useState } from 'react';
import type { PresentationStage } from '../../presentation/presentationTypes';
import styles from './LandslideScene.module.css';

interface EscapeLayerProps {
  stage: PresentationStage;
  progress: number;
}

export function EscapeLayer({ stage, progress }: EscapeLayerProps) {
  const active = stage.scene.stageKey === 'escape';
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const selectedOption = stage.interaction.options?.find((option) => option.id === selectedOptionId);

  return (
    <div className={`${styles.escapeLayer} ${active ? styles.escapeLayerVisible : ''}`}>
      <svg viewBox="0 0 100 72" aria-label="错误路线和正确逃生路线">
        <path
          className={styles.wrongRoute}
          d="M50 22 C58 34 66 46 72 62"
          pathLength="100"
          style={{ strokeDashoffset: active ? 100 - progress : 100 }}
        />
        <path
          className={styles.safeRoute}
          d="M50 30 C38 28 24 20 12 10"
          pathLength="100"
          style={{ strokeDashoffset: active ? 100 - progress : 100 }}
        />
        <path
          className={styles.safeRoute}
          d="M54 32 C68 28 82 20 94 8"
          pathLength="100"
          style={{ strokeDashoffset: active ? 100 - progress : 100 }}
        />
      </svg>
      <div className={styles.escapeQuestion}>
        <strong>{stage.interaction.prompt ?? '你应该往哪里跑？'}</strong>
        <div>
          {stage.interaction.options?.map((option) => (
            <button
              className={selectedOptionId === option.id ? styles.choiceSelected : styles.choiceButton}
              key={option.id}
              type="button"
              onClick={() => setSelectedOptionId(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        {selectedOption ? (
          <small className={selectedOption.isCorrect ? styles.choiceFeedbackRight : styles.choiceFeedbackWrong}>
            {selectedOption.feedback}
          </small>
        ) : null}
      </div>
    </div>
  );
}
