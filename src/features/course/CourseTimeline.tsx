import type { CourseModule } from '../../data/courseModules';
import styles from './CourseShell.module.css';

interface CourseTimelineProps {
  modules: CourseModule[];
  currentModuleId: string;
  onSelect: (moduleId: string) => void;
}

export function CourseTimeline({ modules, currentModuleId, onSelect }: CourseTimelineProps) {
  return (
    <nav className={styles.courseTimeline} aria-label="课程导航">
      {modules.map((module) => {
        const isActive = module.id === currentModuleId;

        return (
          <button
            className={isActive ? styles.timelineButtonActive : styles.timelineButton}
            key={module.id}
            type="button"
            aria-label={module.title}
            aria-current={isActive ? 'step' : undefined}
            title={module.title}
            onClick={() => onSelect(module.id)}
          >
            <span aria-hidden="true" />
            <strong>{module.title}</strong>
          </button>
        );
      })}
    </nav>
  );
}
