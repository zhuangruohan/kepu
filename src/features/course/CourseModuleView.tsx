import { useState, type CSSProperties } from 'react';
import {
  disasterCaseStudies,
  extensionHazardDetails,
  quizQuestions,
  reviewPrompts,
  scenarioJudgements,
  type CaseStudyOption,
  type KeyDisasterId,
} from '../../data/courseSupplement';
import { disasterCards, keyDisasterEntrances } from '../../data/disasterCards';
import type { CourseModule } from '../../data/courseModules';
import { safetyProcess, summaryChant, warningGroups } from '../../data/safetyRules';
import {
  disasterStructureLabels,
  realAssetSlots,
  videoAssetSlots,
  visualLegend,
  type RealAssetSlot,
} from '../../data/visualLegend';
import { CollapseDemo } from '../disaster-demo/collapse/CollapseDemo';
import { DebrisFlowDemo } from '../disaster-demo/debris-flow/DebrisFlowDemo';
import { LandslideDemo } from '../disaster-demo/landslide/LandslideDemo';
import styles from './CourseShell.module.css';

const safetyStepNotes = ['留意裂缝、浑水、落石等异常', '立即离开坡脚、沟谷和危险方向', '提醒家人、同学和周边人员', '按预警和老师指令有序撤离', '安全后不回头取物、不围观'];

const demoCaseTargets = {
  landslide: { label: '查看滑坡真实案例', moduleId: 'landslide-case' },
  collapse: { label: '查看崩塌真实案例', moduleId: 'collapse-case' },
  'debris-flow': { label: '查看泥石流真实案例', moduleId: 'debris-flow-case' },
} as const;

const quizVisuals: Record<string, { scene: string; label: string; hint: string }> = {
  q1: { scene: 'landslide', label: '滑坡路线', hint: '看清滑动方向，避开下滑路径。' },
  q2: { scene: 'crack', label: '裂缝前兆', hint: '裂缝变宽说明坡体可能正在变形。' },
  q3: { scene: 'collapse', label: '坡脚危险', hint: '崩塌落石最容易影响坡脚。' },
  q4: { scene: 'rockfall', label: '小石块掉落', hint: '小石块不断掉落不是小事。' },
  q5: { scene: 'bridge', label: '桥下危险', hint: '沟谷低处和桥下容易被泥石流冲击。' },
  q6: { scene: 'highground', label: '高处撤离', hint: '泥石流要往沟谷两侧高处逃。' },
  q7: { scene: 'signal', label: '发现异常', hint: '先观察信号，再远离危险区。' },
  q8: { scene: 'return', label: '不返回', hint: '生命安全比财物更重要。' },
};

const formationReferencePath = '/assets/real/formation/formation-cause-reference.webp';
const summarySloganWebpPath = '/assets/real/summary/summary-safety-slogan.webp';
const summarySloganPngPath = '/assets/real/summary/summary-safety-slogan.png';
const keyDisasterCoverPaths: Record<string, string> = {
  landslide: '/assets/real/key-disasters/key-landslide-cover.webp',
  collapse: '/assets/real/key-disasters/key-collapse-cover.webp',
  'debris-flow': '/assets/real/key-disasters/key-debris-flow-cover.webp',
};

interface CourseModuleViewProps {
  module: CourseModule;
  onSelectModule: (moduleId: string) => void;
}

export function CourseModuleView({ module, onSelectModule }: CourseModuleViewProps) {
  switch (module.kind) {
    case 'hero':
      return <HeroSection module={module} onSelectModule={onSelectModule} />;
    case 'definition':
      return <DisasterDefinition module={module} />;
    case 'overview':
      return <DisasterOverview module={module} />;
    case 'causeLab':
      return <CauseLab module={module} />;
    case 'keyDisasters':
      return <KeyDisasterCards module={module} onSelectModule={onSelectModule} />;
    case 'landslideDemo':
      return <DemoSection module={module} demo="landslide" onSelectModule={onSelectModule} />;
    case 'landslideCase':
      return <CaseStudyPage key="landslide-case" module={module} caseId="landslide" />;
    case 'collapseDemo':
      return <DemoSection module={module} demo="collapse" onSelectModule={onSelectModule} />;
    case 'collapseCase':
      return <CaseStudyPage key="collapse-case" module={module} caseId="collapse" />;
    case 'debrisFlowDemo':
      return <DemoSection module={module} demo="debris-flow" onSelectModule={onSelectModule} />;
    case 'debrisFlowCase':
      return <CaseStudyPage key="debris-flow-case" module={module} caseId="debris-flow" />;
    case 'safety':
      return <SafetyProcess module={module} />;
    case 'extensions':
      return <ExtensionHazards module={module} />;
    case 'quiz':
      return <QuizModule module={module} />;
    case 'summary':
      return <CourseSummary module={module} />;
  }
}

function HeroSection({ module, onSelectModule }: CourseModuleViewProps) {
  return (
    <section className={styles.heroModule}>
      <div className={styles.heroBackdrop}>
        <span className={styles.scanLine} />
        <span className={styles.mapContour} />
        <span className={styles.stormCloud} />
        <span className={styles.heroRain} />
        <span className={styles.heroRockfall} />
        <span className={styles.heroCrack} />
        <span className={styles.heroMuddyWater} />
      </div>
      <div className={styles.heroContent}>
        <p className={styles.moduleEyebrow}>暴雨山区快速导入</p>
        <h1>地质灾害基础科普与防灾避险互动课程</h1>
        <p>认识灾害 · 识别前兆 · 科学避险</p>
        <PageGuide text="观察暴雨山区中裂缝、浑水、落石这些危险信号。" />
        <div className={styles.heroActions}>
          <button type="button" onClick={() => onSelectModule('definition')}>
            开始学习
          </button>
          <button type="button" onClick={() => onSelectModule('landslide')}>
            进入演示
          </button>
        </div>
      </div>
      <div className={styles.heroSignal}>
        <strong>重点灾害</strong>
        <button type="button" onClick={() => onSelectModule('landslide')}>
          <span>滑坡</span>
          <small>连续降雨后，向两侧跑</small>
        </button>
        <button type="button" onClick={() => onSelectModule('collapse')}>
          <span>崩塌</span>
          <small>看到掉石头，远离陡坡</small>
        </button>
        <button type="button" onClick={() => onSelectModule('debris-flow')}>
          <span>泥石流</span>
          <small>沟水变浑，往高处逃</small>
        </button>
      </div>
    </section>
  );
}

function DisasterDefinition({ module }: Pick<CourseModuleViewProps, 'module'>) {
  return (
    <section className={styles.definitionModule}>
      <div className={styles.definitionScene} aria-hidden="true">
        <span className={styles.definitionMountain}>山体 / 岩土变化</span>
        <span className={styles.definitionCrack}>裂缝扩展</span>
        <span className={styles.definitionRoad}>道路</span>
        <span className={styles.definitionHouse}>房屋</span>
        <span className={styles.definitionPeople}>人和财产</span>
        <span className={styles.definitionWater}>水流变化</span>
      </div>
      <div className={styles.definitionCopy}>
        <p className={styles.moduleEyebrow}>概念判断</p>
        <h1>{module.title}</h1>
        <PageGuide text="判断什么情况下地质现象会变成地质灾害。" />
        <blockquote>
          地质灾害是指自然因素或者人为活动引发的，危害人民生命和财产安全的，与地质作用有关的灾害。
        </blockquote>
        <p>如果一种地质现象没有危害到人和财产，那它只是一种自然现象，不算地质灾害。</p>
        <div className={styles.threeLayerExplain}>
          {module.keyPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <div className={styles.definitionFlow}>
          <article>
            <strong>山体、土地、岩石、水流发生变化</strong>
            <span>先观察是否出现裂缝、落石、浑水等异常。</span>
          </article>
          <span className={styles.flowArrow}>↓</span>
          <article>
            <strong>是否威胁人和财产？</strong>
            <span>房屋、道路、车辆、农田和人员是判断关键。</span>
          </article>
          <div className={styles.definitionResultGrid}>
            <article className={styles.natureResult}>
              <strong>没有威胁</strong>
              <b>自然现象</b>
            </article>
            <article className={styles.hazardResult}>
              <strong>有威胁</strong>
              <b>可能成为地质灾害</b>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function DisasterOverview({ module }: Pick<CourseModuleViewProps, 'module'>) {
  return (
    <section className={styles.overviewModule}>
      <p className={styles.moduleEyebrow}>六类灾害总览</p>
      <h1>{module.title}</h1>
      <PageGuide text="观察六类灾害常出现的位置和主要危险，重点记住四川三类。" />
      <div className={styles.overviewMapBand}>
        <strong>六类灾害识别地图</strong>
        <span>滑坡、崩塌、泥石流为四川重点防范；另外三类用于拓展识别。</span>
      </div>
      <div className={styles.disasterGrid}>
        {disasterCards.map((card) => (
          <article className={styles.disasterCard} data-focus={card.sichuanFocus} key={card.id}>
            <div className={styles[`miniScene_${card.scene}`]} />
            <div>
              <span>{card.sichuanFocus === '重点' ? '四川重点防范' : '拓展识别'}</span>
              <h2>{card.title}</h2>
              <p>{card.what}</p>
              <small>{card.where}</small>
              <strong>{card.danger}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CauseLab({ module }: Pick<CourseModuleViewProps, 'module'>) {
  const [rain, setRain] = useState(72);
  const [slope, setSlope] = useState(64);
  const [human, setHuman] = useState(38);
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const riskScore = Math.round((rain * 0.42 + slope * 0.34 + human * 0.24));
  const riskLevel =
    riskScore > 78 ? '危险' : riskScore > 58 ? '预警' : riskScore > 34 ? '注意' : '稳定';
  const riskReasons = [
    rain > 62 ? '降雨入渗明显' : '降雨影响较低',
    slope > 62 ? '坡度较陡' : '坡度相对平缓',
    human > 58 ? '人为扰动较强' : '人为扰动较弱',
  ];
  const watchSignals =
    riskScore > 58 ? ['裂缝扩大', '坡面渗水', '坡脚掉块', '房屋或道路变形'] : ['坡面渗水', '小裂缝', '排水异常'];
  const actionAdvice = riskScore > 58 ? '远离坡脚和沟谷，关注预警并及时报告。' : '继续观察雨情和坡面变化，不靠近危险边坡。';

  return (
    <section className={styles.causeLabModule}>
      <div className={styles.labControls}>
        <p className={styles.moduleEyebrow}>形成原因实验室</p>
        <h1>{module.title}</h1>
        <PageGuide text="拖动三个因素，观察风险等级和山体剖面如何同步变化。" />
        <p>{module.teacherScript}</p>
        <Slider label="降雨量" hint="越大，雨水越容易进入坡体。" value={rain} onChange={setRain} />
        <Slider label="坡度" hint="越陡，岩土体越容易向下运动。" value={slope} onChange={setSlope} />
        <Slider label="人为扰动" hint="越强，坡脚开挖和坡顶堆土越明显。" value={human} onChange={setHuman} />
        <button className={styles.diagramButton} type="button" onClick={() => setIsDiagramOpen(true)}>
          查看形成原因图解
        </button>
      </div>
      <div
        className={styles.labScene}
        style={
          {
            '--rain': rain / 100,
            '--slope': slope / 100,
            '--human': human / 100,
          } as CSSProperties
        }
      >
        <span className={styles.labSkyLabel}>大型山体剖面演示区</span>
        <span className={styles.labRain} />
        <span className={styles.labSlope} />
        <span className={styles.labSurfaceLayer}>山体表层</span>
        <span className={styles.labRockLayer}>岩土层</span>
        <span className={styles.labWeakSurface}>软弱面</span>
        <span className={styles.labWater} />
        <span className={styles.labSeepage} />
        <span className={styles.labCracks} />
        <span className={styles.labCut} />
        <span className={styles.labPile} />
        <span className={styles.labSlideArrow}>下滑趋势</span>
        <span className={styles.labRainLabel}>降雨入渗 {rain}%</span>
        <span className={styles.labSlopeLabel}>坡度影响 {slope}%</span>
        <span className={styles.labHumanLabel}>坡脚开挖 / 坡顶堆土 {human}%</span>
        <span className={styles.labWarning}>暴雨 + 陡坡 + 松散土石 + 人为扰动叠加</span>
      </div>
      <aside className={styles.labResultPanel} data-level={riskLevel}>
        <span>综合风险结果</span>
        <strong>{riskLevel}</strong>
        <article>
          <b>风险原因组合</b>
          {riskReasons.map((reason) => (
            <em key={reason}>{reason}</em>
          ))}
        </article>
        <article>
          <b>需要关注的信号</b>
          {watchSignals.map((signal) => (
            <em key={signal}>{signal}</em>
          ))}
        </article>
        <p>{actionAdvice}</p>
      </aside>
      <div className={styles.causalChain}>
        {['强降雨', '雨水入渗', '孔隙水压力上升', '裂缝扩展', '抗滑力下降', '坡体失稳'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {isDiagramOpen ? <FormationDiagramPanel onClose={() => setIsDiagramOpen(false)} /> : null}
    </section>
  );
}

function FormationDiagramPanel({ onClose }: { onClose: () => void }) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className={styles.diagramOverlay} role="dialog" aria-modal="true" aria-label="形成原因图解">
      <div className={styles.diagramPanel}>
        <div className={styles.diagramHeader}>
          <strong>形成原因图解</strong>
          <button type="button" onClick={onClose} aria-label="关闭形成原因图解">
            ×
          </button>
        </div>
        {hasImageError ? (
          <div className={styles.diagramFallback}>
            <strong>暴雨 + 陡坡 + 人为扰动</strong>
            <span>三类因素叠加，风险显著升高。</span>
          </div>
        ) : (
          <img
            src={formationReferencePath}
            alt="形成原因参考图"
            onError={() => setHasImageError(true)}
          />
        )}
        <p>暴雨、陡坡和人为扰动叠加，会显著提高地质灾害风险。</p>
      </div>
    </div>
  );
}

function Slider({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className={styles.sliderControl}>
      <span>
        {label}
        <b>{value}%</b>
      </span>
      <small>{hint}</small>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function KeyDisasterCards({
  module,
  onSelectModule,
}: Pick<CourseModuleViewProps, 'module' | 'onSelectModule'>) {
  return (
    <section className={styles.keyDisastersModule}>
      <p className={styles.moduleEyebrow}>四川重点防范</p>
      <h1>{module.title}</h1>
      <PageGuide text="点击三张灾害入口卡，进入对应动态演示。" />
      <div className={styles.keyDisasterGrid}>
        {keyDisasterEntrances.map((item) => (
          <article className={styles.keyDisasterCard} data-hazard={item.id} key={item.id}>
            <KeyDisasterCover id={item.id} title={item.title} />
            <div className={styles.keyCardBody}>
              <strong className={styles.riskTag}>四川重点防范</strong>
              <h2>{item.title}</h2>
              <p>{item.scene}</p>
              <dl>
                <dt>前兆关键词</dt>
                <dd>{item.warnings}</dd>
                <dt>避险口诀</dt>
                <dd>{item.rule}</dd>
              </dl>
              <button type="button" onClick={() => onSelectModule(item.targetModuleId)}>
                进入演示
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function KeyDisasterCover({ id, title }: { id: string; title: string }) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className={styles.keyScene} data-hazard={id}>
      {hasImageError ? (
        <span className={styles.keySceneFallback} aria-hidden="true" />
      ) : (
        <img
          className={styles.keySceneImage}
          src={keyDisasterCoverPaths[id]}
          alt={`${title}真实场景`}
          onError={() => setHasImageError(true)}
        />
      )}
    </div>
  );
}

function DemoSection({
  module,
  demo,
  onSelectModule,
}: Pick<CourseModuleViewProps, 'module' | 'onSelectModule'> & { demo: 'landslide' | 'collapse' | 'debris-flow' }) {
  const videoSlot = findVideoSlot(demo);
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const caseTarget = demoCaseTargets[demo];
  const caseCta = {
    label: caseTarget.label,
    onClick: () => onSelectModule(caseTarget.moduleId),
  };

  return (
    <section className={styles.demoModule}>
      <div className={styles.demoHeader}>
        <div>
          <p className={styles.moduleEyebrow}>动态观察</p>
          <h1>{module.title}</h1>
          <PageGuide text={module.interaction.prompt ?? module.learningObjective} />
        </div>
        <div className={styles.demoSummary}>{module.summary}</div>
      </div>
      <div
        className={styles.demoFrame}
        onClickCapture={(event) => {
          const target = event.target as HTMLElement;
          if (isLegendOpen && !target.closest('[data-legend-panel]')) {
            setIsLegendOpen(false);
          }
        }}
      >
        {demo === 'landslide' ? <LandslideDemo className={styles.embeddedPresentation} caseCta={caseCta} /> : null}
        {demo === 'collapse' ? <CollapseDemo className={styles.embeddedPresentation} caseCta={caseCta} /> : null}
        {demo === 'debris-flow' ? <DebrisFlowDemo className={styles.embeddedPresentation} caseCta={caseCta} /> : null}
        <VisualLegendPanel
          isOpen={isLegendOpen}
          onClose={() => setIsLegendOpen(false)}
          onToggle={() => setIsLegendOpen((value) => !value)}
        />
      </div>
      <details className={styles.demoInfoDrawer}>
        <summary>知识卡与素材位</summary>
        <div>
          <article className={styles.demoKnowledgeStrip}>
            {module.keyPoints.slice(0, 4).map((point) => (
              <span key={point}>{point}</span>
            ))}
          </article>
          <div className={styles.demoReferenceRow}>
            <CaseAssetSlot slot={findAssetSlot(demo)} />
            {videoSlot ? <VideoAssetSlot slot={videoSlot} /> : null}
            <StructureSummary demo={demo} />
          </div>
        </div>
      </details>
    </section>
  );
}

function SafetyProcess({ module }: Pick<CourseModuleViewProps, 'module'>) {
  const [activeGroup, setActiveGroup] = useState(warningGroups[0]);
  const [activeScenarioId, setActiveScenarioId] = useState(scenarioJudgements[0].id);
  const activeScenario = scenarioJudgements.find((item) => item.id === activeScenarioId) ?? scenarioJudgements[0];

  return (
    <section className={styles.safetyModule}>
      <p className={styles.moduleEyebrow}>科学避险</p>
      <h1>{module.title}</h1>
      <PageGuide text="点击前兆分类卡，观察对应危险区域和应对提示。" />
      <div className={styles.safetyFlow}>
        {safetyProcess.map((step, index) => (
          <article key={step}>
            <b>{index + 1}</b>
            <strong>{step}</strong>
            <small>{safetyStepNotes[index]}</small>
          </article>
        ))}
      </div>
      <div className={styles.warningWall}>
        {warningGroups.map((group) => (
          <button
            className={activeGroup.id === group.id ? styles.warningGroupActive : styles.warningGroup}
            key={group.id}
            type="button"
            onClick={() => setActiveGroup(group)}
          >
            <strong>{group.title}</strong>
            {group.signals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </button>
        ))}
      </div>
      <div className={styles.signalExplanation} data-hazard={activeGroup.id}>
        <strong>{activeGroup.title}</strong>
        <p>{activeGroup.explanation}</p>
      </div>
      <div className={styles.safetyVisualColumn}>
        <SafetyVideoPanel />
      </div>
      <div className={styles.scenarioWall}>
        <strong>情景判断</strong>
        <div>
          {scenarioJudgements.map((item) => (
            <button
              className={activeScenarioId === item.id ? styles.scenarioActive : styles.scenarioCard}
              key={item.id}
              type="button"
              onClick={() => {
                setActiveScenarioId(item.id);
                const linkedGroup = warningGroups.find((group) => group.id === item.hazardId);
                if (linkedGroup) {
                  setActiveGroup(linkedGroup);
                }
              }}
            >
              {item.scene}
            </button>
          ))}
        </div>
        <p>
          <b>{activeScenario.answer}</b>
          {activeScenario.explanation}
        </p>
      </div>
    </section>
  );
}

function SafetyVideoPanel() {
  const safetyVideo = videoAssetSlots.find((slot) => slot.id === 'safety-warning-signals');
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <article className={styles.safetyVideoPanel}>
      <div>
        <span>真实风险提示</span>
        <strong>前兆识别案例短片</strong>
      </div>
      {safetyVideo && !hasVideoError ? (
        <video
          className={styles.safetyVideo}
          controls
          muted
          playsInline
          preload="metadata"
          src={safetyVideo.assetPath}
          title={safetyVideo.title}
          onError={() => setHasVideoError(true)}
        />
      ) : (
        <div className={styles.videoFallback}>
          <strong>前兆信号场景</strong>
          <span>安全视频待替换</span>
        </div>
      )}
    </article>
  );
}

function CaseStudyPage({
  module,
  caseId,
}: Pick<CourseModuleViewProps, 'module'> & { caseId: KeyDisasterId }) {
  const study = disasterCaseStudies.find((item) => item.id === caseId) ?? disasterCaseStudies[0];
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const selectedOption = study.options.find((option) => option.id === selectedOptionId);

  return (
    <section className={styles.caseModule} data-hazard={study.id}>
      <div className={styles.caseMediaPanel}>
        <CaseVideoPanel
          fallbackLabel={study.sceneLabel}
          posterPath={study.assetPath}
          title={study.title}
          videoPath={study.videoPath}
        />
        <div className={styles.caseMediaMeta}>
          <span>真实案例视频</span>
          <em>{study.assetPath}</em>
          {study.videoPath ? <em>案例短片：{study.videoPath}</em> : null}
        </div>
      </div>
      <div className={styles.caseContent}>
        <p className={styles.moduleEyebrow}>真实案例判断</p>
        <h1>{module.title}</h1>
        <PageGuide text={module.learningObjective} />
        <div className={styles.caseInfoGrid}>
          <article>
            <strong>看到的信号</strong>
            {study.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
          <article>
            <strong>危险点</strong>
            {study.dangerPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </article>
        </div>
        <div className={styles.correctActionCard}>
          <span>正确做法</span>
          <strong>{study.correctAction}</strong>
        </div>
        <InteractiveQuestion
          options={study.options}
          question={study.question}
          selectedOptionId={selectedOptionId}
          onSelect={setSelectedOptionId}
        />
        {selectedOption ? (
          <p className={selectedOption.isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}>
            {selectedOption.feedback}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function CaseVideoPanel({
  title,
  videoPath,
  posterPath,
  fallbackLabel,
}: {
  title: string;
  videoPath?: string;
  posterPath?: string;
  fallbackLabel: string;
}) {
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <div
      className={styles.caseVideoFrame}
      style={{ '--asset-image': posterPath ? `url("${posterPath}")` : 'none' } as CSSProperties}
    >
      {videoPath && !hasVideoError ? (
        <video
          className={styles.caseVideo}
          controls
          muted
          playsInline
          preload="metadata"
          poster={posterPath}
          src={videoPath}
          title={title}
          onError={() => setHasVideoError(true)}
        />
      ) : (
        <div className={styles.videoFallback}>
          <strong>{fallbackLabel}</strong>
          <span>视频加载失败时显示场景占位</span>
        </div>
      )}
      <span className={styles.caseVideoBadge}>{videoPath ? '真实案例短片' : '案例视频待替换'}</span>
    </div>
  );
}

function InteractiveQuestion({
  question,
  options,
  selectedOptionId,
  onSelect,
}: {
  question: string;
  options: CaseStudyOption[];
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
}) {
  return (
    <div className={styles.interactiveQuestion}>
      <strong>{question}</strong>
      <div>
        {options.map((option) => (
          <button
            className={selectedOptionId === option.id ? styles.optionSelected : styles.optionButton}
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PageGuide({ text }: { text: string }) {
  return <p className={styles.pageGuide}>本页看点：{text}</p>;
}

function VisualLegendPanel({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className={styles.visualLegendDock} data-legend-panel>
      <button
        className={styles.visualLegendButton}
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        图例
      </button>
      {isOpen ? (
        <aside className={styles.visualLegendPanel} aria-label="颜色说明">
          <div className={styles.legendHeader}>
            <strong>颜色说明</strong>
            <button type="button" onClick={onClose} aria-label="关闭颜色图例">
              ×
            </button>
          </div>
          <div className={styles.legendList}>
            {visualLegend.map((item) => (
              <span key={item.id}>
                <i style={{ background: item.color }} />
                <strong>{item.label}</strong>
                <small>{item.meaning}</small>
              </span>
            ))}
          </div>
        </aside>
      ) : null}
    </div>
  );
}

function StructureSummary({ demo }: { demo: 'landslide' | 'collapse' | 'debris-flow' }) {
  return (
    <article className={styles.structureSummary}>
      <strong>结构标注</strong>
      <div>
        {disasterStructureLabels[demo].slice(0, 5).map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </div>
    </article>
  );
}

function CaseAssetSlot({ slot, compact = false }: { slot: RealAssetSlot; compact?: boolean }) {
  return (
    <article className={compact ? styles.assetSlotCompact : styles.assetSlot}>
      <div
        className={styles.assetPreview}
        style={{ '--asset-image': `url("${slot.assetPath}")` } as CSSProperties}
      />
      <span>真实案例图</span>
      <strong>{slot.title}</strong>
      <small>官方素材待替换 · {slot.fallback}</small>
      <em>{slot.assetPath}</em>
    </article>
  );
}

function VideoAssetSlot({ slot }: { slot: (typeof videoAssetSlots)[number] }) {
  return (
    <article className={styles.videoSlot}>
      <div className={styles.videoPreview}>▶</div>
      <span>案例短片</span>
      <strong>{slot.title}</strong>
      <small>官方视频待替换；后续接入 mp4 后默认静音或点击播放。</small>
      <em>{slot.assetPath}</em>
    </article>
  );
}

function findAssetSlot(id: string) {
  return realAssetSlots.find((slot) => slot.id === id) ?? realAssetSlots[0];
}

function findVideoSlot(id: 'landslide' | 'collapse' | 'debris-flow') {
  if (id === 'landslide') {
    return videoAssetSlots.find((slot) => slot.id === 'landslide-case');
  }

  if (id === 'collapse') {
    return videoAssetSlots.find((slot) => slot.id === 'collapse-case');
  }

  if (id === 'debris-flow') {
    return videoAssetSlots.find((slot) => slot.id === 'debris-flow-case');
  }

  return undefined;
}

function ExtensionHazards({ module }: Pick<CourseModuleViewProps, 'module'>) {
  return (
    <section className={styles.extensionOnlyModule}>
      <div className={styles.extensionIntro}>
        <p className={styles.moduleEyebrow}>另外三类拓展</p>
        <h1>{module.title}</h1>
        <PageGuide text="看到坑洞、裂缝变宽、地面不均匀下沉时，不靠近、不围观，及时报告。" />
      </div>
      <div className={styles.extensionDetailGrid}>
        {extensionHazardDetails.map((item) => (
          <article className={styles.extensionDetailCard} data-scene={item.scene} key={item.id}>
            <img className={styles.extensionDetailImage} src={item.imagePath} alt={`${item.title}真实示例`} />
            <h2>{item.title}</h2>
            <p>{item.definition}</p>
            <dl>
              <dt>常出现在哪里</dt>
              <dd>{item.where}</dd>
              <dt>主要危险</dt>
              <dd>{item.danger}</dd>
              <dt>发现后注意</dt>
              <dd>{item.advice}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuizModule({ module }: Pick<CourseModuleViewProps, 'module'>) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const question = quizQuestions[questionIndex];
  const selectedOptionId = answers[question.id] ?? null;
  const selectedOption = question.options.find((option) => option.id === selectedOptionId);
  const quizVisual = quizVisuals[question.id] ?? quizVisuals.q1;

  function handleNextQuestion() {
    setQuestionIndex((index) => Math.min(index + 1, quizQuestions.length - 1));
  }

  function handlePreviousQuestion() {
    setQuestionIndex((index) => Math.max(index - 1, 0));
  }

  return (
    <section className={styles.quizModule} data-scene={quizVisual.scene}>
      <div className={styles.quizHero}>
        <p className={styles.moduleEyebrow}>课堂互动</p>
        <h1>{module.title}</h1>
        <PageGuide text="选一个答案，马上看反馈；答完再进入下一题。" />
        <div className={styles.quizProgressDots}>
          {quizQuestions.map((item, index) => (
            <span
              className={index === questionIndex ? styles.quizDotActive : styles.quizDot}
              key={item.id}
            />
          ))}
        </div>
        <div className={styles.quizProgressList}>
          {quizQuestions.map((item, index) => {
            const answerId = answers[item.id];
            const answeredOption = item.options.find((option) => option.id === answerId);

            return (
              <button
                className={index === questionIndex ? styles.quizProgressActive : styles.quizProgressItem}
                data-status={answeredOption ? (answeredOption.isCorrect ? 'right' : 'wrong') : 'waiting'}
                key={item.id}
                type="button"
                onClick={() => setQuestionIndex(index)}
              >
                <span>{answeredOption ? (answeredOption.isCorrect ? '✓' : '×') : index + 1}</span>
                <strong>{quizVisuals[item.id]?.label ?? '避险判断'}</strong>
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.quizMainPanel}>
        <div className={styles.quizCard}>
          <div className={styles.quizSceneThumb}>
            <strong>{quizVisual.label}</strong>
            <span>{quizVisual.hint}</span>
          </div>
          <span className={styles.quizCounter}>第 {questionIndex + 1} 题</span>
          <h2>{question.question}</h2>
          <div className={styles.quizOptions}>
            {question.options.map((option) => (
              <button
                className={selectedOptionId === option.id ? styles.quizOptionSelected : styles.quizOption}
                key={option.id}
                type="button"
                onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.id }))}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className={styles.quizControls}>
            <button type="button" onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
              上一题
            </button>
            <button
              type="button"
              onClick={handleNextQuestion}
              disabled={questionIndex === quizQuestions.length - 1}
            >
              下一题
            </button>
          </div>
        </div>
        <aside className={styles.quizFeedbackPanel} data-status={selectedOption ? (selectedOption.isCorrect ? 'right' : 'wrong') : 'waiting'}>
          <span>答题反馈</span>
          {selectedOption ? (
            <>
              <strong>{selectedOption.isCorrect ? '判断正确' : '再想一想'}</strong>
              <p>{selectedOption.feedback}</p>
            </>
          ) : (
            <>
              <strong>选择后查看解释</strong>
              <p>{quizVisual.hint}</p>
            </>
          )}
          <div className={styles.quizRuleCard}>
            <b>记住</b>
            <em>滑坡向两侧跑</em>
            <em>崩塌远离陡坡</em>
            <em>泥石流往高处逃</em>
            <em>生命安全最重要</em>
          </div>
        </aside>
      </div>
    </section>
  );
}

function CourseSummary({ module }: Pick<CourseModuleViewProps, 'module'>) {
  const [visibleCount, setVisibleCount] = useState(1);

  return (
    <section className={styles.summaryModule}>
      <div className={styles.summaryHero}>
        <p className={styles.moduleEyebrow}>课程复盘</p>
        <h1>{module.title}</h1>
        <PageGuide text="一起读口诀，再回答四个复盘问题。" />
      </div>
      <div className={styles.summaryStage}>
        <SummarySloganImage />
        <div className={styles.chantCard}>
          {summaryChant.map((line, index) => (
            <p className={index < visibleCount ? styles.chantLineVisible : styles.chantLine} key={line}>
              {line}
            </p>
          ))}
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + 1, summaryChant.length))}
          >
            逐句展示口诀
          </button>
        </div>
        <aside className={styles.summaryPrinciples}>
          <strong>四个核心原则</strong>
          <span>观察信号</span>
          <span>提前判断</span>
          <span>正确逃生</span>
          <span>不贪财物</span>
        </aside>
        {module.interaction.type === 'review' ? (
          <div className={styles.recapPanel}>
            <strong>再来 3 道快速复盘题</strong>
            <div>
              {reviewPrompts.slice(0, 3).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function SummarySloganImage() {
  const [imageSrc, setImageSrc] = useState(summarySloganWebpPath);
  const [hasImageError, setHasImageError] = useState(false);

  if (hasImageError) {
    return (
      <div className={styles.summarySloganFallback}>
        <strong>生命安全最重要</strong>
        <span>观察信号 · 提前判断 · 正确逃生 · 不贪财物</span>
      </div>
    );
  }

  return (
    <figure className={styles.summarySloganImage}>
      <img
        src={imageSrc}
        alt="生命安全最重要安全宣传口号"
        onError={() => {
          if (imageSrc === summarySloganWebpPath) {
            setImageSrc(summarySloganPngPath);
            return;
          }
          setHasImageError(true);
        }}
      />
    </figure>
  );
}
