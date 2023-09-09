/** Core */
import { StyleSheet } from 'react-native';

/** Components */
import { TextComponent } from '..';

/** Interfaces */
import { ITitleProps } from './title.props';

export function TitleComponent(props: ITitleProps) {
  return (
    <TextComponent additionalStyles={styles.title}>
      {props.children}
    </TextComponent>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
