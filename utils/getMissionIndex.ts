import { IMission } from '../interfaces';

export function getMissionIndex(missions: IMission[], id: IMission['id']): number {
  return missions.findIndex((missions) => missions.id === id);
}
