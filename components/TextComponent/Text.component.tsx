/** Core */
import { StyleSheet, Text } from 'react-native';

/** Interfaces */
import { ITextProps } from './text.props';

export function TextComponent(props: ITextProps) {
  const textStyle = [style.base, props.additionalStyles];

  return (
    <Text style={textStyle} {...props}>
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  base: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});
