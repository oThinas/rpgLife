/** Core */
import * as Icon from 'phosphor-react-native';

/** Interfaces */
import { IIconButtonProps } from './iconButton.props';
import { IconProps } from 'phosphor-react-native';
import { FunctionComponent } from 'react';
import { ButtonComponent } from '../ButtonComponent/Button.component';

export function IconButtonComponent(props: IIconButtonProps) {
  const IconComponent = Icon[props.iconName] as FunctionComponent<IconProps>;

  return (
    <ButtonComponent style={{}} {...props.buttonProps}>
      <IconComponent {...props.iconProps}/>
    </ButtonComponent>
  );
}
