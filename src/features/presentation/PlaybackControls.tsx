import styles from './PresentationCore.module.css';

interface PlaybackControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export function PlaybackControls({
  isPlaying,
  onPlay,
  onPause,
  onReset,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}: PlaybackControlsProps) {
  return (
    <div className={styles.controls} aria-label="播放控制">
      <button
        className={styles.secondaryButton}
        type="button"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        上一步
      </button>
      {isPlaying ? (
        <button className={styles.secondaryButton} type="button" onClick={onPause}>
          暂停
        </button>
      ) : (
        <button className={styles.primaryButton} type="button" onClick={onPlay}>
          播放
        </button>
      )}
      <button
        className={styles.secondaryButton}
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
      >
        下一阶段
      </button>
      <button className={styles.secondaryButton} type="button" onClick={onReset}>
        重置
      </button>
    </div>
  );
}
