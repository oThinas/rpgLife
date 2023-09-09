/** Core */
import * as Icon from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

/** Interfaces */
import { IIconButtonProps } from './iconButton.props';
import { IconProps } from 'phosphor-react-native';
import { FunctionComponent } from 'react';

export function IconButtonComponent(props: IIconButtonProps) {
  const IconComponent = Icon[props.iconName] as FunctionComponent<IconProps>;

  return (
    <TouchableOpacity>
      <IconComponent />
    </TouchableOpacity>
  );
}
