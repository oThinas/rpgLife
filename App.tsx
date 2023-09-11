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
import { IconContext } from 'phosphor-react-native';
import { colors } from './core';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={{
        colors: {
          background: colors.coolGrey[800],
          primary: '',
          card: '',
          text: '',
          border: '',
          notification: '',
        },
        dark: false,
      }}>
        <IconContext.Provider value={{
          color: colors.coolGrey[100],
          weight: 'fill',
          size: 32,
        }}>
          <MainNavigator />

          <StatusBar translucent barStyle='light-content' />
        </IconContext.Provider>
      </NavigationContainer>
    </Provider>
  );
}
