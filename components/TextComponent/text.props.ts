import { TextProps } from 'react-native';

export interface ITextProps extends TextProps {
  children: string | JSX.Element;
  additionalStyles?: Record<string, string | number>;
}
