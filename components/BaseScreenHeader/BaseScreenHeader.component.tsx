/** Core */
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../../core/colors';

/** Interfaces */
import { IBaseScreenHeaderProps } from './baseScreenHeader.props';

export function BaseScreenHeaderComponent(props: IBaseScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.main}>
        {props.children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coolGrey[900],
  },
  main: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 64,
    backgroundColor: colors.coolGrey[800],
  },
});
