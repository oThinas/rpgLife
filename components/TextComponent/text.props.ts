import { TextProps } from 'react-native';

export interface ITextProps extends TextProps {
  children: string;
  additionalStyles?: Record<string, string | number>;
}
