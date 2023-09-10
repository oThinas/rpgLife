/** Components */
import { BaseScreenHeaderComponent, MissionComponent } from '../components';

/** Types */
import { NavigationProps } from '../types';

export function MissionsList(props: NavigationProps<'MissionsList'>) {
  return (
    <BaseScreenHeaderComponent navigationProps={props}>
      <MissionComponent />
    </BaseScreenHeaderComponent>
  );
}
