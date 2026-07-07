export type DisasterStageKey =
  | 'rain'
  | 'water_penetration'
  | 'soft_soil'
  | 'weak_surface'
  | 'crack'
  | 'deformation'
  | 'slide'
  | 'escape'
  | 'cliff_rock'
  | 'rock_crack'
  | 'small_rockfall'
  | 'rock_sound'
  | 'collapse_fall'
  | 'collapse_danger'
  | 'collapse_escape'
  | 'upstream_rain'
  | 'valley_collect'
  | 'sediment_move'
  | 'muddy_water'
  | 'rumble_warning'
  | 'debris_surge'
  | 'wrong_escape'
  | 'high_escape';

export type PresentationEffectKey =
  | 'rain'
  | 'water_penetration'
  | 'crack'
  | 'deformation'
  | 'slide'
  | 'warning'
  | 'safe_route';

export type PresentationEventKey =
  | 'rain_intensify'
  | 'water_penetrate'
  | 'crack_appear'
  | 'slope_deform'
  | 'mass_slide'
  | 'escape_route_show'
  | 'rock_crack'
  | 'rockfall'
  | 'sound_warning'
  | 'danger_zone_show'
  | 'rain_upstream'
  | 'water_collect'
  | 'sediment_move'
  | 'muddy_water'
  | 'rumble_warning'
  | 'debris_surge'
  | 'high_route_show';

export interface PresentationSceneConfig {
  stageKey: DisasterStageKey;
  focus: string;
  layers: string[];
}

export interface PresentationStateEffect {
  key: PresentationEffectKey;
  intensity: number;
  description: string;
}

export interface PresentationTimelineEvent {
  key: PresentationEventKey;
  at: number;
  description: string;
}

export interface PresentationInteraction {
  type: 'none' | 'choice';
  prompt?: string;
  options?: Array<{
    id: string;
    label: string;
    isCorrect: boolean;
    feedback: string;
  }>;
}

export interface PresentationStage {
  id: string;
  order: number;
  title: string;
  description: string;
  learningObjective: string;
  narration: string;
  riskTip: string;
  actionAdvice: string;
  scene: PresentationSceneConfig;
  stateEffects: PresentationStateEffect[];
  timelineEvents: PresentationTimelineEvent[];
  interaction: PresentationInteraction;
  knowledge: string;
}

export interface PresentationSceneProps {
  stage: PresentationStage;
  progress: number;
  isPlaying: boolean;
}
