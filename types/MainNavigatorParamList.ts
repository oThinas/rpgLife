/** Core */
import { StackScreenProps } from '@react-navigation/stack';

export type MainNavigatorParamList = {
  Home: undefined;
  MissionsList: undefined;
  AddMission: undefined;
}

export type NavigationProps<T extends keyof MainNavigatorParamList> = StackScreenProps<MainNavigatorParamList, T>;
