export type KeyDisasterId = 'landslide' | 'collapse' | 'debris-flow';

export interface CaseStudyOption {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
}

export interface DisasterCaseStudy {
  id: KeyDisasterId;
  moduleId: string;
  title: string;
  sceneLabel: string;
  assetPath: string;
  videoPath?: string;
  posterPath?: string;
  highlights: string[];
  dangerPoints: string[];
  correctAction: string;
  question: string;
  options: CaseStudyOption[];
}

export interface ScenarioJudgement {
  id: string;
  scene: string;
  answer: string;
  explanation: string;
  hazardId: KeyDisasterId;
}

export interface ExtensionHazardDetail {
  id: 'sinkhole' | 'ground-crack' | 'settlement';
  title: string;
  definition: string;
  where: string;
  danger: string;
  advice: string;
  scene: 'sinkhole' | 'crack' | 'settlement';
  imagePath: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: CaseStudyOption[];
}

export const disasterCaseStudies: DisasterCaseStudy[] = [
  {
    id: 'landslide',
    moduleId: 'landslide-case',
    title: '滑坡真实案例 + 避险判断',
    sceneLabel: '暴雨后山坡异常',
    assetPath: '/assets/real/landslide.jpg',
    videoPath: '/assets/video/landslide/landslide-case-01.mp4',
    posterPath: '/assets/video/landslide/landslide-poster-01.webp',
    highlights: ['暴雨后山坡裂缝', '树木歪斜', '房屋裂缝', '坡体可能下滑'],
    dangerPoints: ['不要在坡脚停留', '不要顺着滑坡方向往下跑', '不要返回危险区取物'],
    correctAction: '向两侧高处撤离，尽快离开滑坡运动范围。',
    question: '滑坡发生时，应该怎么逃？',
    options: [
      {
        id: 'a',
        label: 'A. 顺着滑坡方向往下跑',
        isCorrect: false,
        feedback: '错误：容易进入滑坡体运动范围。',
      },
      {
        id: 'b',
        label: 'B. 向两侧高处撤离',
        isCorrect: true,
        feedback: '正确：两侧更容易避开滑坡路径。',
      },
    ],
  },
  {
    id: 'collapse',
    moduleId: 'collapse-case',
    title: '崩塌真实案例 + 避险判断',
    sceneLabel: '道路边坡落石风险',
    assetPath: '/assets/real/collapse.jpg',
    videoPath: '/assets/video/collapse/collapse-case-01.mp4',
    posterPath: '/assets/video/collapse/collapse-poster-01.webp',
    highlights: ['陡坡危岩', '小石块不断掉落', '岩石裂缝', '坡脚危险区'],
    dangerPoints: ['坡脚是落石最容易影响的区域', '不要停留观察', '不要靠近围观'],
    correctAction: '远离陡坡下方，快速撤到安全区域。',
    question: '发现陡坡上小石块不断掉落，可以停在坡脚观察吗？',
    options: [
      {
        id: 'a',
        label: 'A. 可以',
        isCorrect: false,
        feedback: '错误：坡脚是落石最容易影响的区域。',
      },
      {
        id: 'b',
        label: 'B. 不可以',
        isCorrect: true,
        feedback: '正确：应立即远离陡坡下方。',
      },
    ],
  },
  {
    id: 'debris-flow',
    moduleId: 'debris-flow-case',
    title: '泥石流真实案例 + 避险判断',
    sceneLabel: '山区沟谷暴雨风险',
    assetPath: '/assets/real/debris-flow.jpg',
    videoPath: '/assets/video/debris-flow/debris-flow-case-01.mp4',
    posterPath: '/assets/video/debris-flow/debris-flow-poster-01.webp',
    highlights: ['上游暴雨', '沟水变浑', '山谷轰鸣', '河水突然上涨或断流'],
    dangerPoints: ['桥下和沟谷低处危险', '不要顺沟谷跑', '不要回头拿东西'],
    correctAction: '往沟谷两侧高处逃，远离沟口和桥下。',
    question: '泥石流来临时，可以躲在桥下吗？',
    options: [
      {
        id: 'a',
        label: 'A. 可以',
        isCorrect: false,
        feedback: '错误：桥下和沟谷低处容易被泥石流冲击。',
      },
      {
        id: 'b',
        label: 'B. 不可以',
        isCorrect: true,
        feedback: '正确：应往两侧高处转移。',
      },
    ],
  },
];

export const scenarioJudgements: ScenarioJudgement[] = [
  {
    id: 'slope-crack',
    scene: '山坡裂缝变宽',
    answer: '滑坡前兆',
    explanation: '坡体可能正在变形，应向两侧远离。',
    hazardId: 'landslide',
  },
  {
    id: 'falling-rocks',
    scene: '小石块不断掉落',
    answer: '崩塌前兆',
    explanation: '陡坡岩体可能松动，坡脚不能停留。',
    hazardId: 'collapse',
  },
  {
    id: 'muddy-water',
    scene: '沟水突然变浑',
    answer: '泥石流前兆',
    explanation: '沟谷水流可能夹带泥沙石块，应往两侧高处转移。',
    hazardId: 'debris-flow',
  },
];

export const extensionHazardDetails: ExtensionHazardDetail[] = [
  {
    id: 'sinkhole',
    title: '地面塌陷',
    definition: '地表岩土体向下陷落，形成塌陷坑。',
    where: '采空区、地下空洞、松散地层区域。',
    danger: '可能影响车辆、人员、建筑物。',
    advice: '发现坑洞、路面突然下陷时，不要靠近围观。',
    scene: 'sinkhole',
    imagePath: '/assets/real/extensions/ground-collapse-real-01.webp',
  },
  {
    id: 'ground-crack',
    title: '地裂缝',
    definition: '地表岩土体开裂，形成长条状裂缝。',
    where: '地表变形区域、斜坡或沉降区附近。',
    danger: '可能影响房屋、道路、管线。',
    advice: '发现裂缝变宽或延长时，应及时远离并报告。',
    scene: 'crack',
    imagePath: '/assets/real/extensions/ground-crack-real-01.webp',
  },
  {
    id: 'settlement',
    title: '地面沉降',
    definition: '地面缓慢下沉，不容易马上察觉。',
    where: '城市、平原、地下水变化区域。',
    danger: '可能长期影响建筑、道路、排水。',
    advice: '看到地面不均匀下沉、建筑倾斜、路面变形时要警惕。',
    scene: 'settlement',
    imagePath: '/assets/real/extensions/ground-settlement-real-01.webp',
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: '滑坡来了，应该往哪里跑？',
    options: [
      { id: 'a', label: '顺坡往下跑', isCorrect: false, feedback: '错误：这样可能进入滑坡路径。' },
      { id: 'b', label: '向两侧高处跑', isCorrect: true, feedback: '正确：两侧更容易避开滑坡运动方向。' },
    ],
  },
  {
    id: 'q2',
    question: '哪个是滑坡前兆？',
    options: [
      { id: 'a', label: '裂缝变宽', isCorrect: true, feedback: '正确：裂缝变宽是重要前兆。' },
      { id: 'b', label: '天气晴朗', isCorrect: false, feedback: '错误：这不是滑坡前兆。' },
    ],
  },
  {
    id: 'q3',
    question: '崩塌时，坡脚能不能停留？',
    options: [
      { id: 'a', label: '能', isCorrect: false, feedback: '错误：坡脚容易被落石影响。' },
      { id: 'b', label: '不能', isCorrect: true, feedback: '正确：应远离陡坡下方。' },
    ],
  },
  {
    id: 'q4',
    question: '发现小石块不断掉落，应该怎么办？',
    options: [
      { id: 'a', label: '靠近观察', isCorrect: false, feedback: '错误：靠近观察很危险。' },
      { id: 'b', label: '马上远离陡坡', isCorrect: true, feedback: '正确：落石可能继续增多。' },
    ],
  },
  {
    id: 'q5',
    question: '泥石流来了，能不能躲在桥下？',
    options: [
      { id: 'a', label: '能', isCorrect: false, feedback: '错误：桥下和沟谷低处容易被冲击。' },
      { id: 'b', label: '不能', isCorrect: true, feedback: '正确：要离开沟谷低处。' },
    ],
  },
  {
    id: 'q6',
    question: '泥石流应该往哪里逃？',
    options: [
      { id: 'a', label: '顺沟谷跑', isCorrect: false, feedback: '错误：不要顺沟谷方向跑。' },
      { id: 'b', label: '往两侧高处逃', isCorrect: true, feedback: '正确：两侧高处更安全。' },
    ],
  },
  {
    id: 'q7',
    question: '发现异常后第一步应该做什么？',
    options: [
      { id: 'a', label: '观察信号并远离危险区', isCorrect: true, feedback: '正确：先判断并离开危险位置。' },
      { id: 'b', label: '继续玩一会儿', isCorrect: false, feedback: '错误：发现异常要尽快行动。' },
    ],
  },
  {
    id: 'q8',
    question: '灾害发生时，要不要返回拿财物？',
    options: [
      { id: 'a', label: '不要', isCorrect: true, feedback: '正确：生命安全最重要。' },
      { id: 'b', label: '要', isCorrect: false, feedback: '错误：不要返回危险区。' },
    ],
  },
];

export const reviewPrompts = [
  '今天认识了哪六类地质灾害？',
  '四川重点防范哪三类？',
  '遇到危险第一反应是什么？',
  '为什么不能返回拿财物？',
];
