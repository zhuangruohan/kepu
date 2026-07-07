import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { KnowledgePanel } from './KnowledgePanel';
import { PlaybackControls } from './PlaybackControls';
import { StageTimeline } from './StageTimeline';
import { mockStages } from './mockStages';
import type { PresentationSceneProps, PresentationStage } from './presentationTypes';
import styles from './PresentationCore.module.css';

const progressStep = 5;
const progressIntervalMs = 500;

interface PresentationControllerProps {
  title?: string;
  stages?: PresentationStage[];
  renderScene?: (props: PresentationSceneProps) => ReactNode;
  className?: string;
}

export function PresentationController({
  title = 'Presentation Core MVP',
  stages = mockStages,
  renderScene,
  className,
}: PresentationControllerProps) {
  const [currentStageId, setCurrentStageId] = useState(stages[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentStageIndex = useMemo(
    () => stages.findIndex((stage) => stage.id === currentStageId),
    [currentStageId, stages],
  );

  const currentStage = stages[currentStageIndex] ?? stages[0];

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setProgress((currentProgress) => Math.min(currentProgress + progressStep, 100));
    }, progressIntervalMs);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (progress < 100) {
      return;
    }

    const nextStage = stages[currentStageIndex + 1];
    if (!nextStage) {
      setIsPlaying(false);
      return;
    }

    setCurrentStageId(nextStage.id);
    setProgress(0);
  }, [currentStageIndex, progress, stages]);

  function handleStageSelect(stageId: string) {
    setCurrentStageId(stageId);
    setProgress(0);
  }

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  function handleReset() {
    setCurrentStageId(stages[0].id);
    setIsPlaying(false);
    setProgress(0);
  }

  function handlePrevious() {
    const previousStage = stages[currentStageIndex - 1];
    if (!previousStage) {
      return;
    }

    setCurrentStageId(previousStage.id);
    setProgress(0);
  }

  function handleNext() {
    const nextStage = stages[currentStageIndex + 1];
    if (!nextStage) {
      return;
    }

    setCurrentStageId(nextStage.id);
    setProgress(0);
  }

  return (
    <section
      className={className ? `${styles.presentationShell} ${className}` : styles.presentationShell}
      aria-label={title}
    >
      <div className={styles.scenePreview}>
        {renderScene ? (
          renderScene({ stage: currentStage, progress, isPlaying })
        ) : (
          <>
            <p className={styles.phaseLabel}>{title}</p>
            <h1>{currentStage.title}</h1>
            <p>{currentStage.description}</p>
            <div className={styles.sceneState} aria-live="polite">
              {isPlaying ? '播放中' : '已暂停'} · {currentStage.id}
            </div>
          </>
        )}
      </div>

      <KnowledgePanel stage={currentStage} progress={progress} />

      <div className={styles.bottomBar}>
        <StageTimeline
          stages={stages}
          currentStageId={currentStage.id}
          onStageSelect={handleStageSelect}
        />
        <PlaybackControls
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          onReset={handleReset}
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentStageIndex > 0}
          canGoNext={currentStageIndex < stages.length - 1}
        />
      </div>
    </section>
  );
}
