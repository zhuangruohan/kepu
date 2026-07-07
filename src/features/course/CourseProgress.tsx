import type { CourseModule } from '../../data/courseModules';
import styles from './CourseShell.module.css';

interface CourseProgressProps {
  modules: CourseModule[];
  currentIndex: number;
}

export function CourseProgress({ modules, currentIndex }: CourseProgressProps) {
  return (
    <div className={styles.progressWrap} aria-label="课程位置">
      <span className={styles.progressLabel}>学习路线</span>
      <div className={styles.progressDots}>
        {modules.map((module, index) => (
          <i
            className={index === currentIndex ? styles.progressDotActive : styles.progressDot}
            key={module.id}
          />
        ))}
      </div>
    </div>
  );
}
