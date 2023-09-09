/** Core */
import { SafeAreaView, StyleSheet } from 'react-native';

/** Components */
import { TitleComponent } from '../components';
import { colors } from '../core/colors';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <TitleComponent>
        Home
      </TitleComponent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.coolGrey[800],
  },
});
