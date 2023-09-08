/** Core */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

/** Screens */
import { MainNavigator } from './screens';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
