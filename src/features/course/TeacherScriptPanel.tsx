import type { CourseModule } from '../../data/courseModules';
import styles from './CourseShell.module.css';

interface TeacherScriptPanelProps {
  module: CourseModule;
}

export function TeacherScriptPanel({ module }: TeacherScriptPanelProps) {
  return (
    <aside className={styles.teacherPanel} aria-label="本页提示">
      <p className={styles.panelEyebrow}>本页提示</p>
      <h2>观察重点</h2>
      <div className={styles.timeBadge}>{module.timeRange}</div>
      <p className={styles.teacherScript}>{module.teacherScript}</p>

      <div className={styles.panelSection}>
        <h3>关键知识点</h3>
        <ul>
          {module.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className={styles.panelSection}>
        <h3>学习目标</h3>
        <p>{module.learningObjective}</p>
      </div>

      <div className={styles.summaryBox}>
        <strong>收束语</strong>
        <span>{module.summary}</span>
      </div>
    </aside>
  );
}
