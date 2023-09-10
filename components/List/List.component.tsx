/** Core */
import { FlatList, StyleSheet, View } from 'react-native';

/** Interfaces */
import { IMission } from '../../interfaces';
import { MissionComponent } from '../Mission/Mission.component';

const tempData: IMission[] = [
  {
    name: 'Assistir jogo do São Paulo',
    type: 'weekly',
    xp: 50,
    id: 1,
    completed: false,
  },
  {
    name: 'Tomar 2L de água',
    type: 'daily',
    xp: 10,
    id: 2,
    completed: false,
  },
  {
    name: 'Tomar 2L de águaaaaa',
    type: 'daily',
    xp: 10,
    id: 3,
    completed: true,
  },
];

export function ListComponent() {
  return (
    <FlatList
      style={styles.container}
      data={tempData}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <MissionComponent mission={item}/>
      )}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
    />
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  divider: { height: 8 },
});
