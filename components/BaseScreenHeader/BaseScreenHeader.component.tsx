/** Core */
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../../core/colors';

/** Components */
import { HeaderComponent } from '../Header/Header.component';

/** Interfaces */
import { IBaseScreenHeaderProps } from './baseScreenHeader.props';

export function BaseScreenHeaderComponent(props: IBaseScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <HeaderComponent title={props.navigationProps.route.name} navigation={props.navigationProps.navigation} />

      <SafeAreaView style={styles.main}>
        {props.children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: colors.coolGrey[800],
  },
  main: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
