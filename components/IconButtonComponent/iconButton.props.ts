/** Interfaces */
import * as Icon from 'phosphor-react-native';
import { IconProps } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';

export interface IIconButtonProps {
  buttonProps?: TouchableOpacityProps;
  iconProps?: IconProps;
  iconName: keyof typeof Icon;
}
