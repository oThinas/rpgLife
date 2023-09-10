/** Core */
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

/** Components */
import { BaseScreenHeaderComponent, ListComponent, TextComponent } from '../components';

/** Hooks */
import { useAppDispatch } from '../hooks/reduxHooks';

/** Reducers */
import { setMissionsList } from '../reducers/missions.reducer';

/** API */
import { getMissions } from '../api/mission.api';

/** Interfaces */
import { NavigationProps } from '../types';
import { IMission } from '../interfaces';

export function MissionsList(props: NavigationProps<'MissionsList'>) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchMissions() {
      try {
        const response = await getMissions();
        const missions: IMission[] = response.map((mission) => ({
          id: Number(mission.id),
          name: mission.name,
          completed: mission.status === 'Done',
          type: mission.period,
          xp: mission.exp,
        }));

        dispatch(setMissionsList(missions));
      } catch (error) {
        console.log(error);
      }
    }

    fetchMissions();
  }, [dispatch]);

  return (
    <BaseScreenHeaderComponent navigationProps={props} style={styles.container}>
      <TextComponent additionalStyles={{ textAlign: 'center' }}>
        Nessa tela só aparecem missões que ainda não foram concluídas.
      </TextComponent>

      <ListComponent />
    </BaseScreenHeaderComponent>
  );
}

const styles = StyleSheet.create({ container: { gap: 16 } });
