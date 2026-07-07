export interface VisualLegendItem {
  id: string;
  label: string;
  meaning: string;
  color: string;
}

export interface StructureLabel {
  label: string;
  note: string;
}

export interface RealAssetSlot {
  id: string;
  title: string;
  assetPath: string;
  fallback: string;
}

export const visualLegend: VisualLegendItem[] = [
  {
    id: 'water',
    label: '蓝色',
    meaning: '水、降雨、地下水、沟谷水流',
    color: '#4fbce8',
  },
  {
    id: 'soil',
    label: '棕色 / 土黄色',
    meaning: '土体、松散堆积物、泥沙',
    color: '#a9783f',
  },
  {
    id: 'rock',
    label: '深灰 / 岩灰色',
    meaning: '岩体、基岩、陡坡危岩',
    color: '#747b7a',
  },
  {
    id: 'warning',
    label: '黄色',
    meaning: '预警、软弱面、风险开始升高',
    color: '#e2b85c',
  },
  {
    id: 'danger',
    label: '红色',
    meaning: '危险区、错误路线、高风险',
    color: '#ff6554',
  },
  {
    id: 'safe',
    label: '绿色',
    meaning: '安全区、正确逃生路线',
    color: '#55e28b',
  },
  {
    id: 'focus',
    label: '青绿色',
    meaning: '交互焦点、当前阶段、知识提示',
    color: '#57cce0',
  },
];

export const disasterStructureLabels: Record<'landslide' | 'collapse' | 'debris-flow', StructureLabel[]> = {
  landslide: [
    { label: '表层土体', note: '坡面上方可见土层' },
    { label: '雨水入渗', note: '蓝色路径表示水进入坡体' },
    { label: '软弱面', note: '黄色虚线表示潜在滑动面' },
    { label: '裂缝扩展', note: '黑色裂缝表示坡体拉裂' },
    { label: '滑动体', note: '棕色块体表示正在下滑的坡体' },
    { label: '坡脚 / 道路', note: '下方道路和居民点最易受影响' },
    { label: '危险区', note: '红色区域不能停留' },
    { label: '正确逃生路线', note: '绿色路线表示向两侧撤离' },
  ],
  collapse: [
    { label: '陡坡危岩', note: '灰色岩壁表示不稳定岩体' },
    { label: '岩体裂缝', note: '黑色裂缝表示岩体松动' },
    { label: '落石路径', note: '黄色虚线表示石块滚落方向' },
    { label: '坡脚堆积区', note: '岩块堆积处不能停留' },
    { label: '道路边坡', note: '道路旁陡坡是重点风险点' },
    { label: '危险停留区', note: '红色区域表示落石影响范围' },
    { label: '安全撤离方向', note: '绿色箭头表示远离陡坡下方' },
  ],
  'debris-flow': [
    { label: '上游暴雨区', note: '雨幕表示上游强降雨' },
    { label: '沟谷汇水区', note: '蓝色水流表示汇水过程' },
    { label: '松散土石堆积', note: '棕色颗粒表示泥沙和石块' },
    { label: '浑水流', note: '蓝色转棕色表示水体变浑' },
    { label: '泥石流主通道', note: '沟谷中间是高速下冲路径' },
    { label: '桥梁 / 沟口危险区', note: '红色区域表示低处和桥下危险' },
    { label: '两侧高处安全区', note: '绿色区域表示正确撤离方向' },
  ],
};

export const realAssetSlots: RealAssetSlot[] = [
  {
    id: 'landslide',
    title: '滑坡真实案例图片位',
    assetPath: '/assets/real/landslide.jpg',
    fallback: '真实素材待替换：四川山区地灾风险提示',
  },
  {
    id: 'collapse',
    title: '崩塌真实案例图片位',
    assetPath: '/assets/real/collapse.jpg',
    fallback: '真实素材待替换：道路边坡落石风险',
  },
  {
    id: 'debris-flow',
    title: '泥石流真实案例图片位',
    assetPath: '/assets/real/debris-flow.jpg',
    fallback: '真实素材待替换：汛期暴雨后沟谷风险升高',
  },
  {
    id: 'warning-signals',
    title: '前兆信号图片位',
    assetPath: '/assets/real/warning-signals.jpg',
    fallback: '真实素材待替换：裂缝、浑水、落石等前兆',
  },
];

export const videoAssetSlots = [
  {
    id: 'landslide-case',
    title: '滑坡案例视频位',
    assetPath: '/assets/video/landslide/landslide-case-01.mp4',
  },
  {
    id: 'collapse-case',
    title: '崩塌案例视频位',
    assetPath: '/assets/video/collapse/collapse-case-01.mp4',
  },
  {
    id: 'debris-flow-case',
    title: '泥石流案例视频位',
    assetPath: '/assets/video/debris-flow/debris-flow-case-01.mp4',
  },
  {
    id: 'safety-warning-signals',
    title: '科学避险前兆识别视频位',
    assetPath: '/assets/video/safety/safety-warning-signals-01.mp4',
  },
] as const;
