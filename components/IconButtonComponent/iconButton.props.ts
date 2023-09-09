/** Interfaces */
import * as Icon from 'phosphor-react-native';
import { IButtonProps } from '../ButtonComponent/button.props';
import { IconProps } from 'phosphor-react-native';

export interface IIconButtonProps extends Partial<IButtonProps>, IconProps {
  iconName: keyof typeof Icon;
}
