/** API */
import { endpoints } from '../core/endpoints';
import { api } from '../lib/axios';

interface IGetMissionsResponse {
  name: string,
  period: 'daily' | 'weekly',
  exp: number,
  id: string,
  status: 'toBeDone' | 'Done',
}

export async function getMissions(): Promise<IGetMissionsResponse[]> {
  return (await api.get(endpoints.mission.getall)).data;
}
