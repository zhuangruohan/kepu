# Geohazard Interactive Course Spec V7

## Project Overview

地质灾害防灾避险沉浸式互动课程网页。

这是一个面向课堂教学、科普展示和应急教育场景的互动课程系统。

目标：
- 科普展厅级视觉效果；
- 支撑约1小时课程讲解；
- 滑坡、崩塌、泥石流具备阶段化动态演示；
- 使用工程化方式约束AI开发。

---

## Tech Stack

推荐：

- React
- TypeScript
- Vite
- Tailwind CSS / CSS Modules
- GSAP
- Framer Motion
- SVG
- Canvas（必要时）

---

## Development Rule

开发必须遵循：

1. 先读取 docs。
2. 不允许无边界扩展。
3. 不允许为了效果引入过度复杂架构。
4. 用户可感知价值优先。
5. 动画服务教学。

---

## Current Phase

V2 - 地质灾害基础科普与防灾避险互动课程网页迭代

当前阶段目标：

- 从“题库型互动”调整为“课程主线 + 动态演示 + 少量关键互动”。
- 保留并嵌入 `LandslideDemo`，新增崩塌、泥石流阶段化动态演示。
- 强化首页、形成原因实验室、三大灾害专题、科学避险流程和总结口诀。
- 页面优先满足课堂讲解、投屏录屏和应急科普数字展厅视觉效果。

当前课程主线：

1. 课程封面：暴雨山区快速导入
2. 什么是地质灾害
3. 六类地质灾害总览
4. 形成原因实验室
5. 四川重点三类灾害
6. 滑坡完整演示
7. 崩塌完整演示
8. 泥石流完整演示
9. 科学避险流程 + 前兆分类墙
10. 另外三类拓展 + 总结口诀

---

## Important Documents

docs:
本轮 v2 现状盘点、课程结构、迭代任务、组件设计和验收标准。

00_Project_Control:
项目背景、范围、风险、决策。

02_Design:
页面和视觉规格。

03_Technical:
架构和动画系统。

05_Codex_Task:
实际开发任务。

06_Test:
验收标准。

---

## Project Setup

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建：

```bash
npm run build
```

预览构建产物：

```bash
npm run preview
```

---

## Development Notes

- 技术栈遵循 `03_Technical/Tech_Stack.md`。
- 当前基础样式方案为全局基础样式 + 后续按模块使用 CSS Modules。
- `features/` 负责业务模块。
- `components/` 只放通用 UI。
- 暂不引入 Three.js、大型状态管理库或复杂动画系统。
- `Task09`、`Task10` 文件当前缺失，已记录为后续风险，不阻塞 Phase 1。
