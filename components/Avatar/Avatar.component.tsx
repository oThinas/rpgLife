/** Core */
import { useRef } from 'react';
import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Person } from 'phosphor-react-native';

/** Components */
import { IconButtonComponent, ProgressBarComponent, TextComponent } from '..';

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
      <View style={styles.header}>
        <TextComponent additionalStyles={styles.disclamer}>
          Nota: o nome será salvo apenas na execução atual do app. Infelizmente, a API não tem um endpoint para isso :(
        </TextComponent>

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

      <Person size={128} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 32,
    alignItems: 'center',
    gap: 32,
  },
  header: { alignItems: 'center' },
  disclamer: { fontSize: 12 },
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
