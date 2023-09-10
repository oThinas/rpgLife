/** Core */
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

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
    <BaseScreenComponent>
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
  );
}

const styles = StyleSheet.create({
  avatarName: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  buttons: { gap: 32 },
});
