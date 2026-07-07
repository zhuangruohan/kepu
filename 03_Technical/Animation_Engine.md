# Disaster Presentation Engine

## 定位

不是游戏引擎。

只服务教学演示。


## Architecture

DisasterDemo

↓

PresentationController

↓

StageManager

↓

VisualEffectRegistry

↓

Scene Layer


## State Ownership

唯一状态来源：

PresentationController。

Scene组件只接收props。


## Stage Model

字段：

id
order
title
learningObjective
narration
scene
stateEffects
timelineEvents
interaction
knowledge


## Effect分类

State Effect:
rain fog darkness

Timeline Event:
crack appear rock fall warning show
