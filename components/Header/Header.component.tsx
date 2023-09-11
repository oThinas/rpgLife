/** Core */
import { StyleSheet, View } from 'react-native';
import { colors } from '../../core';

/** Components */
import { IconButtonComponent, TitleComponent } from '..';

/** Interfaces */
import { IHeaderProps } from './header.props';
import { MainNavigatorParamList } from '../../types';

const titleMapper: Record<keyof MainNavigatorParamList, string> = {
  Home: 'Home',
  MissionsList: 'Missões',
  AddMission: 'Adicionar',
};

export function HeaderComponent(props: IHeaderProps) {
  const title = titleMapper[props.title as keyof MainNavigatorParamList];

  function handleGoBack() {
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <IconButtonComponent iconName='CaretLeft' buttonProps={{ onPress: () => handleGoBack() }} />

      <TitleComponent>
        {title}
      </TitleComponent>

      <IconButtonComponent
        iconName='CaretLeft'
        buttonProps={{ disabled: true }}
        iconProps={{ color: colors.coolGrey[900] }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    flexDirection: 'row',
    backgroundColor: colors.coolGrey[900],
  },
});
