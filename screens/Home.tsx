/** Core */
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

/** Components */
import { AvatarComponent, BaseScreenComponent, ButtonComponent } from '../components';

/** Hooks */
import { useAppDispatch } from '../hooks/reduxHooks';

/** API */
import { avatarApi } from '../api/avatar.api';

/** Redux */
import { setAvatar } from '../reducers/avatars.reducer';

/** Utils */
import { avatarMapper } from '../utils/avatarMapper';

/** Interfaces */
import { MainNavigatorParamList, NavigationProps } from '../types';

export function Home({ navigation }: NavigationProps<'Home'>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchAvatar() {
      try {
        const response = await avatarApi.getAvatar();
        const avatar = avatarMapper(response);

        dispatch(setAvatar(avatar));
      } catch (error) {
        console.log(error);
      }
    }

    fetchAvatar();
  }, [dispatch]);

  function handleNavigation(screen: keyof MainNavigatorParamList) {
    navigation.navigate(screen);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardShouldPersistTaps="handled"
    >
      <BaseScreenComponent style={styles.container}>
        <AvatarComponent />

        <View style={styles.buttons}>
          <ButtonComponent onPress={() => handleNavigation('MissionsList')}>
            Minhas missões
          </ButtonComponent>

          <ButtonComponent onPress={() => handleNavigation('AddMission')}>
            Adicionar missão
          </ButtonComponent>
        </View>
      </BaseScreenComponent>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 64,
    gap: 80,
  },
  avatarName: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  buttons: { gap: 32 },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
