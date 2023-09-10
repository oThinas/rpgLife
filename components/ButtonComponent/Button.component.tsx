/** Core */
import { StyleSheet, TouchableOpacity } from 'react-native';

/** Components */
import { TextComponent } from '..';

/** Interfaces */
import { IButtonProps } from './button.props';
import { colors } from '../../core/colors';

export function ButtonComponent(props: IButtonProps) {
  return (
    <TouchableOpacity style={style.container} activeOpacity={0.75} {...props}>
      <TextComponent>
        {props.children}
      </TextComponent>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderColor: colors.coolGrey[100],
    borderWidth: 1,
  },
});
