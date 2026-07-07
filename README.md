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

Phase 0 - Project Initialization

当前阶段目标：

- 初始化 React + TypeScript + Vite 工程。
- 建立稳定、可维护的基础目录。
- 为 Presentation Core 和灾害 Demo 开发准备工程底座。
- 不开发首页、滑坡 Demo、崩塌 Demo、泥石流 Demo。

---

## Important Documents

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

## Phase 0 Notes

- 技术栈遵循 `03_Technical/Tech_Stack.md`。
- 当前基础样式方案为全局基础样式 + 后续按模块使用 CSS Modules。
- `features/` 负责业务模块。
- `components/` 只放通用 UI。
- 暂不引入 Three.js、大型状态管理库或复杂动画系统。
- `Task09`、`Task10` 文件当前缺失，已记录为后续风险，不阻塞 Phase 0。
