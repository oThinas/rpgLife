/** Core */
import { ReactNode } from 'react';

/** Types */
import { NavigationProps } from '../../types';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

export interface IBaseScreenHeaderProps extends SafeAreaViewProps {
  children?: ReactNode;
  navigationProps: NavigationProps<'MissionsList'> | NavigationProps<'AddMission'>;
}
