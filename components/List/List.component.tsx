/** Core */
import { FlatList, StyleSheet, View } from 'react-native';
import { SmileyWink } from 'phosphor-react-native';

/** Hooks */
import { useAppSelector } from '../../hooks/reduxHooks';

/** Components */
import { MissionComponent, TextComponent } from '..';

export function ListComponent() {
  const missions = useAppSelector((state) => state.missions);

  return (
    <>
      {!missions.length ? (
        <View style={styles.emptyList}>
          <TextComponent additionalStyles={styles.disclamer}>
            Todas as missões foram concluídas! Parabéns!
          </TextComponent>

          <SmileyWink size={128}/>
        </View>
      ) : (
        <FlatList
          style={styles.container}
          data={missions}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MissionComponent mission={item} />}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  disclamer: { textAlign: 'center' },
  container: { width: '100%' },
  divider: { height: 8 },
});
