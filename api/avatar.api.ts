/** API */
import { endpoints } from '../core/endpoints';
import { api } from '../lib/axios';

interface IGetAvatarResponse {
  name: string;
  level: number;
  exp: number;
  needed: number;
}

export async function getAvatar(): Promise<IGetAvatarResponse> {
  return (await api.get(endpoints.character)).data;
}
