/** Core */
import { ReactNode } from 'react';

/** Types */
import { NavigationProps } from '../../types';

export interface IBaseScreenHeaderProps {
  children?: ReactNode;
  navigationProps: NavigationProps<'MissionsList'> | NavigationProps<'AddMission'>;
}
