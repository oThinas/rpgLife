/** Core */
import { StyleSheet, View } from 'react-native';
import { colors } from '../../core/colors';

/** Components */
import { TextComponent } from '..';

/** Interfaces */
import { IProgressBarProps } from './progressBar.props';

export function ProgressBarComponent(props: IProgressBarProps) {
  const percent = (100 * props.currentXP) / props.nextLevelXP;

  return (
    <View style={styles.container}>
      <TextComponent>
        {String(props.level)}
      </TextComponent>

      <View style={styles.progressWrapper}>
        <View style={[styles.progress, { width: `${percent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  progressWrapper: {
    flex: 1,
    height: 20,
    backgroundColor: colors.coolGrey[400],
    borderRadius: 8,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: colors.green[600],
  },
});
