/** Core */
import { ReactNode } from 'react';

/** Interfaces */
import { SafeAreaViewProps } from 'react-native-safe-area-context';

export interface IBaseScreenProps extends SafeAreaViewProps {
  children?: ReactNode;
}
