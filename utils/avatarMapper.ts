/** Interfaces */
import { IAvatar, IAvatarResponse } from '../interfaces';

export function avatarMapper(response: IAvatarResponse): IAvatar {
  const { exp, level, name, needed } = response;

  const avatar: IAvatar = {
    name,
    level,
    currentXP: exp,
    nextLevelXP: needed,
  };

  return avatar;
}
