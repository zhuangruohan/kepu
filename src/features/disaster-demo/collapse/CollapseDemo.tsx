import { PresentationController } from '../../presentation/PresentationController';
import { collapseStages } from './collapseConfig';
import { CollapseScene } from './CollapseScene';

interface CollapseDemoProps {
  className?: string;
  caseCta?: {
    label: string;
    onClick: () => void;
  };
}

export function CollapseDemo({ className, caseCta }: CollapseDemoProps) {
  return (
    <PresentationController
      className={className}
      title="崩塌动态演示"
      stages={collapseStages}
      renderScene={(sceneProps) => <CollapseScene {...sceneProps} caseCta={caseCta} />}
    />
  );
}
