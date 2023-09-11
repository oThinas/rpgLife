/** Core */
import { endpoints } from '../core';

/** API */
import { api } from '../lib/axios';

/** Interfaces */
import { IAvatarResponse } from '../interfaces';

async function getAvatar(): Promise<IAvatarResponse> {
  return (await api.get(endpoints.character)).data;
}

export const avatarApi = { getAvatar };
