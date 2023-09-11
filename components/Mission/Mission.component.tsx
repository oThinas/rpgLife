/** Core */
import { StyleSheet, View } from 'react-native';
import { colors } from '../../core/colors';

/** Components */
import { IconButtonComponent, TextComponent } from '..';

/** Hooks */
import { useAppDispatch } from '../../hooks/reduxHooks';

/** Reducers */
import { completeMission, deleteMission } from '../../reducers/missions.reducer';
import { setAvatar } from '../../reducers/avatars.reducer';

/** API */
import { missionApi } from '../../api/mission.api';

/** Utils */
import { avatarMapper } from '../../utils/avatarMapper';

/** Interface */
import { IMissionProps } from './mission.props';
import { IAvatarResponse } from '../../interfaces';

export function MissionComponent({ mission }: IMissionProps) {
  const dispatch = useAppDispatch();

  async function handleDone() {
    try {
      const response = await missionApi.completeMission(mission.id);
      dispatch(completeMission(mission.id));

      const avatar = avatarMapper(response as IAvatarResponse);
      dispatch(setAvatar(avatar));
    } catch(error) {
      console.log('error', error);
    }
  }

  async function handleDelete() {
    try {
      await missionApi.deleteMission(mission.id);
      dispatch(deleteMission(mission.id));
    } catch(error) {
      console.log('error', error);
    }
  }

  return (
    <View style={styles.container}>
      <TextComponent>
        {mission.name}
      </TextComponent>

      <View style={styles.actions}>
        <IconButtonComponent
          iconName='Check'
          iconProps={{ color: colors.green[600] }}
          buttonProps={{ onPress: () => handleDone() }}
        />

        <IconButtonComponent
          iconName='Trash'
          iconProps={{ color: colors.red[600] }}
          buttonProps={{ onPress: () => handleDelete() }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: colors.coolGrey[100],
    borderRadius: 8,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
