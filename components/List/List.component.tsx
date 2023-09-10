/** Core */
import { FlatList, StyleSheet, View } from 'react-native';

/** Hooks */
import { useAppSelector } from '../../hooks/reduxHooks';

/** Interfaces */
import { MissionComponent } from '../Mission/Mission.component';

export function ListComponent() {
  const missions = useAppSelector((state) => state.missions);

  return (
    <FlatList
      style={styles.container}
      data={missions}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <MissionComponent mission={item} key={item.id} />
      )}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
    />
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  divider: { height: 8 },
});
