export interface DisasterCard {
  id: string;
  title: string;
  what: string;
  where: string;
  danger: string;
  sichuanFocus: '重点' | '拓展';
  scene: 'slope' | 'cliff' | 'valley' | 'sinkhole' | 'crack' | 'settlement';
}

export const disasterCards: DisasterCard[] = [
  {
    id: 'landslide',
    title: '滑坡',
    what: '山体像坐滑梯一样往下滑。',
    where: '山坡、坡脚、山区道路旁。',
    danger: '掩埋房屋、道路、人员。',
    sichuanFocus: '重点',
    scene: 'slope',
  },
  {
    id: 'collapse',
    title: '崩塌',
    what: '石头从陡坡上突然掉下来。',
    where: '陡坡、悬崖、道路边坡。',
    danger: '落石砸伤、堵路、损坏车辆。',
    sichuanFocus: '重点',
    scene: 'cliff',
  },
  {
    id: 'debris-flow',
    title: '泥石流',
    what: '泥、水、石头一起冲下来。',
    where: '山区沟谷、沟口、河道附近。',
    danger: '速度快、冲击强、来得突然。',
    sichuanFocus: '重点',
    scene: 'valley',
  },
  {
    id: 'sinkhole',
    title: '地面塌陷',
    what: '地表岩土体向下陷落，形成塌陷坑。',
    where: '采空区、地下空洞、松散地层区域。',
    danger: '车辆、人员、建筑物受影响。',
    sichuanFocus: '拓展',
    scene: 'sinkhole',
  },
  {
    id: 'ground-crack',
    title: '地裂缝',
    what: '地表岩土体开裂，形成裂缝。',
    where: '地表变形区域、斜坡或沉降区附近。',
    danger: '影响房屋、道路、管线。',
    sichuanFocus: '拓展',
    scene: 'crack',
  },
  {
    id: 'settlement',
    title: '地面沉降',
    what: '地下松散地层压缩，地表标高降低。',
    where: '城市、平原、地下水变化区域。',
    danger: '不容易察觉，但会长期影响建筑和道路。',
    sichuanFocus: '拓展',
    scene: 'settlement',
  },
];

export const keyDisasterEntrances = [
  {
    id: 'landslide',
    title: '滑坡',
    scene: '山坡 / 坡脚 / 山区道路旁',
    warnings: '裂缝变宽、树木歪斜、房屋裂缝',
    rule: '向两侧跑',
    targetModuleId: 'landslide',
  },
  {
    id: 'collapse',
    title: '崩塌',
    scene: '陡坡 / 悬崖 / 道路边坡',
    warnings: '小石块掉落、岩石摩擦声、岩体新裂缝',
    rule: '远离陡坡',
    targetModuleId: 'collapse',
  },
  {
    id: 'debris-flow',
    title: '泥石流',
    scene: '山区沟谷 / 沟口 / 河道附近',
    warnings: '沟水变浑、山谷轰鸣、河水上涨或断流',
    rule: '往高处逃',
    targetModuleId: 'debris-flow',
  },
];
