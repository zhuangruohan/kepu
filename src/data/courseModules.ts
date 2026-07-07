export type CourseModuleKind =
  | 'hero'
  | 'definition'
  | 'overview'
  | 'causeLab'
  | 'keyDisasters'
  | 'landslideDemo'
  | 'landslideCase'
  | 'collapseDemo'
  | 'collapseCase'
  | 'debrisFlowDemo'
  | 'debrisFlowCase'
  | 'safety'
  | 'extensions'
  | 'quiz'
  | 'summary';

export type CourseInteraction =
  | {
      type: 'none';
      prompt?: string;
    }
  | {
      type: 'sliderLab';
      prompt: string;
    }
  | {
      type: 'demo';
      prompt: string;
    }
  | {
      type: 'case';
      prompt: string;
    }
  | {
      type: 'signalWall';
      prompt: string;
    }
  | {
      type: 'quiz';
      prompt: string;
    }
  | {
      type: 'review';
      prompt: string;
      questions: CourseReviewQuestion[];
    };

export interface CourseReviewQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface CourseModule {
  id: string;
  kind: CourseModuleKind;
  title: string;
  timeRange: string;
  durationMinutes: number;
  learningObjective: string;
  teacherScript: string;
  keyPoints: string[];
  interaction: CourseInteraction;
  summary: string;
}

export const courseModules: CourseModule[] = [
  {
    id: 'storm-intro',
    kind: 'hero',
    title: '课程封面：暴雨山区快速导入',
    timeRange: '0-3 分钟',
    durationMinutes: 3,
    learningObjective: '用短场景快速引出滑坡、崩塌、泥石流三类重点风险。',
    teacherScript:
      '一场暴雨，可能让山坡变得不稳定，也可能让沟谷里的泥、水、石头一起冲下来。今天重点学习：看懂危险信号，知道怎么避险。',
    keyPoints: ['乌云聚集', '暴雨增强', '山坡裂缝', '沟水变浑', '道路落石'],
    interaction: {
      type: 'none',
    },
    summary: '认识灾害、识别前兆、科学避险。',
  },
  {
    id: 'definition',
    kind: 'definition',
    title: '什么是地质灾害',
    timeRange: '3-8 分钟',
    durationMinutes: 5,
    learningObjective: '理解地质灾害必须同时具备地质变化和对人财造成危险。',
    teacherScript:
      '地质灾害是指自然因素或者人为活动引发的，危害人民生命和财产安全的，与地质作用有关的灾害。如果一种地质现象没有危害到人和财产，那它只是一种自然现象。',
    keyPoints: [
      '自然变化：山体、土地、岩石、水流发生变化',
      '影响对象：威胁人、房屋、道路、农田、车辆',
      '形成灾害：造成危险和损失',
    ],
    interaction: {
      type: 'none',
    },
    summary: '山体、土地发生变化，并对人类造成危险，就叫地质灾害。',
  },
  {
    id: 'six-types',
    kind: 'overview',
    title: '六类地质灾害总览',
    timeRange: '8-15 分钟',
    durationMinutes: 7,
    learningObjective: '快速认识六类常见地质灾害，并突出四川重点三类。',
    teacherScript:
      '常见地质灾害包括滑坡、崩塌、泥石流、地面塌陷、地裂缝、地面沉降。四川地区重点防范滑坡、崩塌、泥石流。',
    keyPoints: ['滑坡', '崩塌', '泥石流', '地面塌陷', '地裂缝', '地面沉降'],
    interaction: {
      type: 'none',
    },
    summary: '先认识六类，再重点学习三类。',
  },
  {
    id: 'cause-lab',
    kind: 'causeLab',
    title: '形成原因实验室',
    timeRange: '15-22 分钟',
    durationMinutes: 7,
    learningObjective: '通过降雨、坡度、人为扰动三个因素叠加理解风险变化。',
    teacherScript:
      '不是一下雨就一定有灾害，也不是所有山坡都危险。真正要警惕的是：暴雨、陡坡、松散土石、人为扰动叠加。',
    keyPoints: ['暴雨或连续降雨', '陡峭地形', '人为开挖、坡顶堆土、修路切坡'],
    interaction: {
      type: 'sliderLab',
      prompt: '拖动三个因素，观察山体剖面和风险等级变化。',
    },
    summary: '风险来自多个因素叠加。',
  },
  {
    id: 'key-disasters',
    kind: 'keyDisasters',
    title: '四川重点三类灾害',
    timeRange: '22 分钟',
    durationMinutes: 2,
    learningObjective: '明确四川地区重点防范滑坡、崩塌、泥石流。',
    teacherScript:
      '四川地区重点防范三类：滑坡、崩塌、泥石流。三类灾害场景不同，避险方向也不同。',
    keyPoints: ['滑坡：山坡、坡脚、山区道路旁', '崩塌：陡坡、悬崖、道路边坡', '泥石流：山区沟谷、沟口、河道附近'],
    interaction: {
      type: 'none',
    },
    summary: '三类重点灾害，后面逐个演示和判断。',
  },
  {
    id: 'landslide',
    kind: 'landslideDemo',
    title: '滑坡动态演示',
    timeRange: '22-32 分钟',
    durationMinutes: 10,
    learningObjective: '理解滑坡形成过程、前兆信号、错误跑法和正确跑法。',
    teacherScript:
      '滑坡是斜坡上的土体或岩体，在重力作用下沿软弱面向下滑动。连续降雨、山坡较陡、人为开挖坡脚或坡顶堆土都可能增加风险。',
    keyPoints: [
      '原因：连续降雨或暴雨、山坡较陡、人为开挖坡脚或坡顶堆土',
      '前兆：裂缝变宽、树木歪斜、房屋裂缝、井水异常、动物异常',
      '危险：坡体可能沿滑动方向下滑',
      '避险：向两侧跑，不要顺着滑坡方向往下跑',
    ],
    interaction: {
      type: 'demo',
      prompt: '观察雨水、裂缝、滑动体和两侧逃生路线。',
    },
    summary: '滑坡避险核心：向两侧跑。',
  },
  {
    id: 'landslide-case',
    kind: 'landslideCase',
    title: '滑坡真实案例 + 避险判断',
    timeRange: '32-36 分钟',
    durationMinutes: 4,
    learningObjective: '把滑坡前兆和正确避险方向联系起来。',
    teacherScript:
      '当暴雨后出现山坡裂缝、树木歪斜、房屋裂缝时，要想到坡体可能下滑。正确做法是向两侧高处撤离。',
    keyPoints: ['暴雨后山坡裂缝', '树木歪斜', '房屋裂缝', '向两侧高处撤离'],
    interaction: {
      type: 'case',
      prompt: '判断滑坡发生时应该往哪里逃。',
    },
    summary: '看见前兆，要提前远离。',
  },
  {
    id: 'collapse',
    kind: 'collapseDemo',
    title: '崩塌动态演示',
    timeRange: '36-43 分钟',
    durationMinutes: 7,
    learningObjective: '理解危岩、裂缝、掉石和坡脚危险区。',
    teacherScript:
      '崩塌是较陡斜坡上的岩土体在重力作用下突然脱离母体，崩落、滚动、堆积在坡脚。它速度快、冲击强。',
    keyPoints: ['原因：山坡太陡、岩石不稳、下雨、地震、人为开挖', '前兆：小石块掉落、岩石摩擦声、岩体新裂缝', '危险：坡脚容易受落石影响', '避险：远离陡坡下方'],
    interaction: {
      type: 'demo',
      prompt: '观察小石块掉落、大块岩体崩落和坡脚危险区。',
    },
    summary: '崩塌避险核心：远离陡坡。',
  },
  {
    id: 'collapse-case',
    kind: 'collapseCase',
    title: '崩塌真实案例 + 避险判断',
    timeRange: '43-46 分钟',
    durationMinutes: 3,
    learningObjective: '判断坡脚停留和围观为什么危险。',
    teacherScript:
      '发现陡坡危岩、小石块不断掉落、岩体新裂缝时，坡脚是危险区域，不能停留或围观。',
    keyPoints: ['陡坡危岩', '小石块不断掉落', '岩石裂缝', '远离陡坡下方'],
    interaction: {
      type: 'case',
      prompt: '判断能不能停在坡脚观察。',
    },
    summary: '看到掉石头，赶快躲开。',
  },
  {
    id: 'debris-flow',
    kind: 'debrisFlowDemo',
    title: '泥石流动态演示',
    timeRange: '46-53 分钟',
    durationMinutes: 7,
    learningObjective: '理解沟谷、暴雨、浑水、轰鸣和高处避险。',
    teacherScript:
      '泥石流是在山区沟谷中，由暴雨或冰雪融水激发，含有大量泥沙、石块的特殊洪流。它冲击力强，来得快。',
    keyPoints: ['通俗理解：水、泥沙和石头一起高速冲下来', '原因：突降大暴雨、沟谷松散土石、地形陡峭', '前兆：沟水变浑、山谷轰鸣、河水上涨或断流、动物异常', '避险：往高处逃，不要顺沟谷跑，也不要躲在桥下'],
    interaction: {
      type: 'demo',
      prompt: '观察沟谷冲刷路径和两侧高处安全路线。',
    },
    summary: '泥石流避险核心：往高处逃。',
  },
  {
    id: 'debris-flow-case',
    kind: 'debrisFlowCase',
    title: '泥石流真实案例 + 避险判断',
    timeRange: '53-56 分钟',
    durationMinutes: 3,
    learningObjective: '把泥石流前兆和高处避险方向联系起来。',
    teacherScript:
      '上游暴雨、沟水变浑、山谷轰鸣、河水突然上涨或断流，都可能是泥石流前兆。桥下和沟谷低处很危险。',
    keyPoints: ['上游暴雨', '沟水变浑', '山谷轰鸣', '桥下和沟谷低处危险'],
    interaction: {
      type: 'case',
      prompt: '判断泥石流来临时能不能躲在桥下。',
    },
    summary: '泥石流来了，往两侧高处逃。',
  },
  {
    id: 'safety',
    kind: 'safety',
    title: '科学避险流程 + 前兆分类墙',
    timeRange: '56-60 分钟',
    durationMinutes: 4,
    learningObjective: '掌握观察信号、提前判断、正确逃生、不贪财物的顺序。',
    teacherScript:
      '遇到危险时，先观察信号，再提前判断，不要等灾害完全发生才行动。正确逃生后，不返回拿东西，不围观，不冒险靠近。',
    keyPoints: ['发现异常', '远离危险区', '通知他人', '听从转移', '不返回'],
    interaction: {
      type: 'signalWall',
      prompt: '点击前兆信号，观察对应灾害区域亮起。',
    },
    summary: '避险流程比答题更重要。',
  },
  {
    id: 'extensions',
    kind: 'extensions',
    title: '另外三类拓展',
    timeRange: '60-64 分钟',
    durationMinutes: 4,
    learningObjective: '认识地面塌陷、地裂缝、地面沉降的基本特点。',
    teacherScript:
      '除了滑坡、崩塌、泥石流，还要知道地面塌陷、地裂缝、地面沉降。看到坑洞、裂缝变宽、地面不均匀下沉时，不靠近、不围观，及时报告。',
    keyPoints: ['地面塌陷', '地裂缝', '地面沉降'],
    interaction: {
      type: 'none',
    },
    summary: '另外三类也要会识别、会远离。',
  },
  {
    id: 'quiz',
    kind: 'quiz',
    title: '课堂互动答题',
    timeRange: '64-70 分钟',
    durationMinutes: 6,
    learningObjective: '用儿童友好的快速判断题巩固前兆识别和避险动作。',
    teacherScript:
      '这一页只做快速互动，不追求难题。让学生快速回答：看见什么信号、往哪里逃、能不能返回拿东西。',
    keyPoints: ['滑坡向两侧跑', '崩塌远离陡坡', '泥石流往高处逃', '不返回拿财物'],
    interaction: {
      type: 'quiz',
      prompt: '点击选项后立即查看反馈。',
    },
    summary: '把口诀变成行动判断。',
  },
  {
    id: 'summary',
    kind: 'summary',
    title: '总结口诀 + 课程复盘',
    timeRange: '70-72 分钟',
    durationMinutes: 2,
    learningObjective: '用口诀和复盘问题完成课程收束。',
    teacherScript:
      '最后一起读口诀：滑坡向两侧跑，崩塌远离陡坡，泥石流往高处逃，生命安全最重要！再复盘六类灾害、四川重点三类和不能返回拿财物的原因。',
    keyPoints: [
      '观察信号',
      '提前判断',
      '正确逃生',
      '不贪财物',
      '滑坡向两侧跑，崩塌远离陡坡，泥石流往高处逃，生命安全最重要',
    ],
    interaction: {
      type: 'review',
      prompt: '逐句展示口诀，再进行课堂复盘。',
      questions: [
        {
          id: 'r1',
          question: '今天认识了哪六类地质灾害？',
          answer: '滑坡、崩塌、泥石流、地面塌陷、地裂缝、地面沉降。',
        },
        {
          id: 'r2',
          question: '四川重点防范哪三类？',
          answer: '滑坡、崩塌、泥石流。',
        },
        {
          id: 'r3',
          question: '为什么不能返回拿财物？',
          answer: '危险还可能继续发生，生命安全最重要。',
        },
      ],
    },
    summary: '生命安全最重要。',
  },
];
