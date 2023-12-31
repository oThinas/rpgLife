/** Core */
import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../../core';

/** Interfaces */
import { IBaseScreenProps } from './baseScreen.props';

export function BaseScreenComponent(props: IBaseScreenProps) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coolGrey[800],
  },
});
