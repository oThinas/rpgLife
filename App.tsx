/** Core */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

/** Screens */
import { MainNavigator } from './screens';

/** Components */
import { StatusBar } from 'react-native';

/** Redux */
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />

        <StatusBar translucent barStyle='light-content' />
      </NavigationContainer>
    </Provider>
  );
}
