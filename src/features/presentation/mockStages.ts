import type { PresentationStage } from './presentationTypes';

export const mockStages: PresentationStage[] = [
  {
    id: 'stage1',
    order: 1,
    title: '诱因观察',
    description: '通过降雨、地形和土体变化建立风险背景。',
    learningObjective: '理解灾害演示从诱因开始，而不是直接进入结果。',
    narration: '连续降雨会增加坡体含水量，风险开始累积。',
    riskTip: '持续降雨时，坡体风险会逐步升高。',
    actionAdvice: '关注天气预警，避免靠近陡坡和沟谷。',
    scene: {
      stageKey: 'rain',
      focus: '坡体环境和降雨强度',
      layers: ['terrain', 'rain', 'soil_moisture'],
    },
    stateEffects: [
      {
        key: 'rain',
        intensity: 0.55,
        description: '降雨增强，提示风险开始累积。',
      },
      {
        key: 'water_penetration',
        intensity: 0.35,
        description: '雨水向坡体内部渗入。',
      },
    ],
    timelineEvents: [
      {
        key: 'rain_intensify',
        at: 0.25,
        description: '雨势增强。',
      },
      {
        key: 'water_penetrate',
        at: 0.65,
        description: '坡体含水量上升。',
      },
    ],
    interaction: {
      type: 'none',
    },
    knowledge: '演示阶段需要把环境变化和风险变化建立对应关系。',
  },
  {
    id: 'stage2',
    order: 2,
    title: '前兆识别',
    description: '识别裂缝、变形、异响等危险信号。',
    learningObjective: '帮助学习者判断灾害发生前的可观察信号。',
    narration: '当坡面出现裂缝或局部变形时，应提高警惕。',
    riskTip: '裂缝和变形可能代表坡体已经失稳。',
    actionAdvice: '远离异常区域，并及时报告。',
    scene: {
      stageKey: 'crack',
      focus: '坡面裂缝和局部变形',
      layers: ['terrain', 'crack_overlay', 'warning_marker'],
    },
    stateEffects: [
      {
        key: 'crack',
        intensity: 0.7,
        description: '裂缝出现并扩大，提示结构失稳。',
      },
      {
        key: 'deformation',
        intensity: 0.45,
        description: '坡体局部变形增强。',
      },
    ],
    timelineEvents: [
      {
        key: 'crack_appear',
        at: 0.2,
        description: '坡面出现裂缝。',
      },
      {
        key: 'slope_deform',
        at: 0.7,
        description: '坡体发生可见变形。',
      },
    ],
    interaction: {
      type: 'choice',
      prompt: '看到裂缝扩大时应如何处理？',
      options: [
        {
          id: 'observe_nearby',
          label: '靠近观察',
          isCorrect: false,
          feedback: '靠近危险坡体会增加暴露风险。',
        },
        {
          id: 'leave_and_report',
          label: '远离并报告',
          isCorrect: true,
          feedback: '应远离危险区域并及时报告。',
        },
      ],
    },
    knowledge: '前兆不是装饰效果，而是避险判断的重要依据。',
  },
  {
    id: 'stage3',
    order: 3,
    title: '避险决策',
    description: '根据危险区域和撤离方向完成正确判断。',
    learningObjective: '建立从风险识别到主动避险的行动链路。',
    narration: '远离危险区，沿安全路线撤离，不在沟谷或坡脚停留。',
    riskTip: '滑动方向和坡脚区域通常危险更高。',
    actionAdvice: '向滑坡两侧稳定区域撤离。',
    scene: {
      stageKey: 'escape',
      focus: '危险范围和安全撤离路线',
      layers: ['danger_zone', 'safe_route', 'evacuation_marker'],
    },
    stateEffects: [
      {
        key: 'slide',
        intensity: 0.8,
        description: '滑动风险达到高位，需要立即避险。',
      },
      {
        key: 'safe_route',
        intensity: 1,
        description: '突出安全撤离方向。',
      },
    ],
    timelineEvents: [
      {
        key: 'mass_slide',
        at: 0.2,
        description: '坡体发生滑动。',
      },
      {
        key: 'escape_route_show',
        at: 0.55,
        description: '显示推荐避险路线。',
      },
    ],
    interaction: {
      type: 'choice',
      prompt: '发生滑坡风险时应选择哪条路线？',
      options: [
        {
          id: 'cross_danger_zone',
          label: '横穿滑动区',
          isCorrect: false,
          feedback: '横穿滑动区会进入主要危险范围。',
        },
        {
          id: 'leave_to_safe_side',
          label: '向安全侧撤离',
          isCorrect: true,
          feedback: '应尽快离开危险区域，选择安全侧撤离。',
        },
      ],
    },
    knowledge: '最终阶段应把演示转化为可执行的避险动作。',
  },
];
