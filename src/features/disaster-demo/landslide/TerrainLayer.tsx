import type { CSSProperties } from 'react';
import type { DisasterStageKey } from '../../presentation/presentationTypes';
import styles from './LandslideScene.module.css';

interface TerrainLayerProps {
  stageKey: DisasterStageKey;
  progress: number;
}

export function TerrainLayer({ stageKey, progress }: TerrainLayerProps) {
  const deformation =
    stageKey === 'crack' ? Math.max(progress / 100, 0.45) : stageKey === 'slide' || stageKey === 'escape' ? 1 : 0;
  const wetness =
    stageKey === 'water_penetration'
      ? progress / 100
      : ['soft_soil', 'weak_surface', 'crack', 'slide', 'escape'].includes(stageKey)
        ? 1
        : 0;

  return (
    <div
      className={`${styles.terrainLayer} ${styles[`terrain_${stageKey}`]}`}
      style={
        {
          '--deformation': deformation,
          '--wetness': wetness,
        } as CSSProperties
      }
    >
      <div className={styles.road} />
      <div className={styles.slopeBody}>
        <span className={styles.grassCap} />
        <span className={styles.soilStrata} />
        <span className={styles.wetSoil} />
      </div>
      <div className={styles.houseGroup}>
        <span className={styles.houseRoof} />
        <span className={styles.houseWall} />
        <span className={styles.houseCrack} />
      </div>
      <div className={styles.treeLarge}>
        <span className={styles.treeTrunk} />
        <span className={styles.treeCrown} />
      </div>
      <div className={styles.treeSmall}>
        <span className={styles.treeTrunk} />
        <span className={styles.treeCrown} />
      </div>
      <div className={styles.surfaceOffset} />
    </div>
  );
}
