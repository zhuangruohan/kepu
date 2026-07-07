import { useMemo, useState } from 'react';
import { courseModules } from '../../data/courseModules';
import { CourseModuleView } from './CourseModuleView';
import { CourseProgress } from './CourseProgress';
import { CourseTimeline } from './CourseTimeline';
import { TeacherScriptPanel } from './TeacherScriptPanel';
import styles from './CourseShell.module.css';

export function CourseShell() {
  const [currentModuleId, setCurrentModuleId] = useState(courseModules[0].id);
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  const currentIndex = useMemo(
    () => Math.max(courseModules.findIndex((module) => module.id === currentModuleId), 0),
    [currentModuleId],
  );

  const currentModule = courseModules[currentIndex];

  return (
    <main className={styles.courseShell} data-mode={isTeacherMode ? 'teacher' : 'student'}>
      <header className={styles.courseHeader}>
        <div className={styles.brandBlock}>
          <p className={styles.headerEyebrow}>应急科普互动课</p>
          <h1>地质灾害基础科普与防灾避险互动课程</h1>
        </div>
        <div className={styles.currentChapter}>
          <span>当前页面</span>
          <strong>{currentModule.title}</strong>
        </div>
        <CourseProgress modules={courseModules} currentIndex={currentIndex} />
        <button
          className={isTeacherMode ? styles.modeToggleActive : styles.modeToggle}
          type="button"
          aria-pressed={isTeacherMode}
          onClick={() => setIsTeacherMode((value) => !value)}
        >
          <span>{isTeacherMode ? '提示已打开' : '学生观看'}</span>
          <strong>{isTeacherMode ? '本页提示' : '打开提示'}</strong>
        </button>
      </header>

      <section className={styles.courseMain}>
        <CourseModuleView module={currentModule} onSelectModule={setCurrentModuleId} />
        {isTeacherMode ? <TeacherScriptPanel module={currentModule} /> : null}
      </section>

      <CourseTimeline
        modules={courseModules}
        currentModuleId={currentModule.id}
        onSelect={setCurrentModuleId}
      />
    </main>
  );
}
