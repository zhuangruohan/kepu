export const safetyProcess = ['发现异常', '远离危险区', '通知他人', '听从转移', '不返回'];

export const warningGroups = [
  {
    id: 'landslide',
    title: '滑坡前兆',
    signals: ['裂缝变宽', '树木歪斜', '房屋裂缝', '井水异常', '动物异常'],
    explanation: '坡体可能已经出现变形，应向两侧远离。',
  },
  {
    id: 'collapse',
    title: '崩塌前兆',
    signals: ['小石块掉落', '岩石摩擦声', '岩体新裂缝'],
    explanation: '陡坡岩体可能松动，坡脚不能停留。',
  },
  {
    id: 'debris-flow',
    title: '泥石流前兆',
    signals: ['沟水变浑', '山谷轰鸣', '河水上涨或断流', '动物异常'],
    explanation: '沟谷可能形成泥石流，应往两侧高处逃。',
  },
];

export const summaryChant = ['滑坡向两侧跑，', '崩塌远离陡坡，', '泥石流往高处逃，', '生命安全最重要！'];
