import { NavigationProps } from '../../types';

export interface IHeaderProps {
  title: string;
  navigation: NavigationProps<'AddMission'>['navigation'] | NavigationProps<'MissionsList'>['navigation'];
}
