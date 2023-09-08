/** Core */
import { SafeAreaView, StyleSheet } from 'react-native';

/** Components */
import { TextComponent } from '../components';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <TextComponent>
        Home
      </TextComponent>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
