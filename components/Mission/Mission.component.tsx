/** Core */
import { StyleSheet, View } from 'react-native';
import { colors } from '../../core/colors';

/** Components */
import { IconButtonComponent, TextComponent } from '..';

export function MissionComponent() {
  function handleDone() {
    console.log('handleDone');
  }

  function handleDelete() {
    console.log('handleDelete');
  }

  return (
    <View style={styles.container}>
      <TextComponent>
        MissionComponent
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
