/** API */
import { endpoints } from '../core/endpoints';
import { api } from '../lib/axios';

/** Interfaces */
import { IAvatarResponse } from '../interfaces';

interface IGetMissionsResponse {
  name: string,
  period: 'daily' | 'weekly',
  exp: number,
  id: string,
  status: 'toBeDone' | 'Done' | 'deleted',
}

async function getMissions(): Promise<IGetMissionsResponse[]> {
  return (await api.get(endpoints.mission.getall)).data;
}

async function completeMission(id: number): Promise<IAvatarResponse | string> {
  return (await api.post(endpoints.mission.complete(id))).data;
}

async function deleteMission(id: number): Promise<string> {
  return (await api.post(endpoints.mission.delete(id))).data;
}

export const missionApi = {
  getMissions,
  completeMission,
  deleteMission,
};
