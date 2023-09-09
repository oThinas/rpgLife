/** Core */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

/** Screens */
import { MainNavigator } from './screens';

/** Components */
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />

      <StatusBar translucent barStyle='light-content' />
    </NavigationContainer>
  );
}
