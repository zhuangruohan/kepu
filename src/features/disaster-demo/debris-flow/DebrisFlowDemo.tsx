import { PresentationController } from '../../presentation/PresentationController';
import { DebrisFlowScene } from './DebrisFlowScene';
import { debrisFlowStages } from './debrisFlowConfig';

interface DebrisFlowDemoProps {
  className?: string;
  caseCta?: {
    label: string;
    onClick: () => void;
  };
}

export function DebrisFlowDemo({ className, caseCta }: DebrisFlowDemoProps) {
  return (
    <PresentationController
      className={className}
      title="泥石流动态演示"
      stages={debrisFlowStages}
      renderScene={(sceneProps) => <DebrisFlowScene {...sceneProps} caseCta={caseCta} />}
    />
  );
}
