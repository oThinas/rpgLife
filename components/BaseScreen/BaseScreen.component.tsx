/** Core */
import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../../core/colors';

/** Interfaces */
import { IBaseScreenProps } from './baseScreen.props';

export function BaseScreenComponent(props: IBaseScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 64,
    backgroundColor: colors.coolGrey[800],
  },
});
