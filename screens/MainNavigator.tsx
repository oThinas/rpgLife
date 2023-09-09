/** Core */
import { createStackNavigator } from '@react-navigation/stack';

/** Screens */
import { Home } from '.';

/** Types */
import { MainNavigatorParamList } from '../types';

export function MainNavigator() {
  const { Navigator, Screen } = createStackNavigator<MainNavigatorParamList>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home}/>
    </Navigator>
  );
}
