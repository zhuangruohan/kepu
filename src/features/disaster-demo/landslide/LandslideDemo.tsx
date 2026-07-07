import { PresentationController } from '../../presentation/PresentationController';
import { LandslideScene } from './LandslideScene';
import { landslideStages } from './landslideConfig';

interface LandslideDemoProps {
  className?: string;
  caseCta?: {
    label: string;
    onClick: () => void;
  };
}

export function LandslideDemo({ className, caseCta }: LandslideDemoProps) {
  return (
    <PresentationController
      className={className}
      title="滑坡动态演示"
      stages={landslideStages}
      renderScene={(sceneProps) => <LandslideScene {...sceneProps} caseCta={caseCta} />}
    />
  );
}
