/** Core */
import { useRef } from 'react';
import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

/** Components */
import { IconButtonComponent, ProgressBarComponent } from '..';

/** Hooks */
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

/** Reducers */
import { setName } from '../../reducers/avatars.reducer';

export function AvatarComponent() {
  const textInputRef = useRef<TextInput>(null);

  const avatar = useAppSelector((state) => state.avatar);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, setValue } = useForm<{ avatarName: string }>({ defaultValues: { avatarName: avatar.name } });

  Keyboard.addListener('keyboardDidHide', () => textInputRef.current?.blur());

  function handleFocusInput() {
    textInputRef.current?.focus();
  }

  const onSubmit = handleSubmit((data) => {
    if (!data.avatarName) {
      dispatch(setName('Anonymous'));
      setValue('avatarName', avatar.name);
      return;
    }

    dispatch(setName(data.avatarName));
  });

  return (
    <View style={styles.container}>
      <View style={styles.avatarNameContainer}>
        <Controller
          control={control}
          name='avatarName'
          render={({ field: { onChange, value } }) => (
            <TextInput
              ref={textInputRef}
              onBlur={onSubmit}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.avatarName}
            />
          )}
        />

        <IconButtonComponent iconName='NotePencil' buttonProps={{ onPress: () => handleFocusInput() }} />
      </View>

      <ProgressBarComponent currentXP={avatar.currentXP} level={avatar.level} nextLevelXP={avatar.nextLevelXP} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  avatarNameContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  avatarName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
