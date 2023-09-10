/** Core */
import { createStackNavigator } from '@react-navigation/stack';

/** Screens */
import { AddMission, Home, MissionsList } from '.';

/** Types */
import { MainNavigatorParamList } from '../types';

export function MainNavigator() {
  const { Navigator, Screen } = createStackNavigator<MainNavigatorParamList>();

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'
    >
      <Screen name='Home' component={Home} />
      <Screen name='MissionsList' component={MissionsList} />
      <Screen name='AddMission' component={AddMission} />
    </Navigator>
  );
}
