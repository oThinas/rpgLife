/** API */
import { endpoints } from '../core/endpoints';
import { api } from '../lib/axios';

interface IAvatarResponse {
  name: string;
  level: number;
  exp: number;
  needed: number;
}

export async function getAvatar(): Promise<IAvatarResponse> {
  return (await api.get(endpoints.character)).data;
}
