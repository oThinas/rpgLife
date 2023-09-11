/** Core */
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group';
import { colors } from '../core';

/** Components */
import { BaseScreenHeaderComponent, ButtonComponent, TextComponent } from '../components';

/** Utils */
import { missionTypeMapper } from '../utils';

/** API */
import { missionApi } from '../api/mission.api';

/** Interfaces */
import { NavigationProps } from '../types';
import { IMissionRequest } from '../interfaces';

export function AddMission(props: NavigationProps<'AddMission'>) {
  const { control, handleSubmit } = useForm<{
    missionName: string;
    missionXP: string;
    missionType: string;
  }>({ defaultValues: { missionName: '', missionXP: '', missionType: '1' } });

  const radioButtonOptions: RadioButtonProps[] = [
    { id: '1', label: 'Diária', value: 'daily', ...radioButtonStyles },
    { id: '2', label: 'Semanal', value: 'weekly', ...radioButtonStyles },
  ];

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsButtonDisabled(true);

    const mission: IMissionRequest = {
      name: data.missionName,
      exp: Number(data.missionXP),
      period: missionTypeMapper(data.missionType as '1' | '2'),
    };

    try {
      await missionApi.createMission(mission);
      props.navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setIsButtonDisabled(false);
    }
  });

  return (
    <BaseScreenHeaderComponent navigationProps={props} style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextComponent>
          Nome da missão
          </TextComponent>

          <Controller
            control={control}
            name='missionName'
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={(value) => onChange(value)}
                value={value}
                style={styles.input}
              />
            )}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextComponent>
          XP concedida
          </TextComponent>

          <Controller
            control={control}
            name='missionXP'
            render={({ field: { onChange, value } }) => (
              <TextInput
                onChangeText={(value) => onChange(value)}
                keyboardType='numeric'
                value={value}
                style={styles.input}
              />
            )}
          />
        </View>

        <View style={[styles.inputContainer, { alignItems: 'center' }]}>
          <TextComponent>
          Tipo de missão
          </TextComponent>

          <Controller
            control={control}
            name='missionType'
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                containerStyle={styles.radioButtonCotainer}
                radioButtons={radioButtonOptions}
                selectedId={value}
                onPress={(id) => onChange(id)}
              />
            )}
          />
        </View>
      </View>

      <ButtonComponent onPress={onSubmit} disabled={isButtonDisabled}>
        Criar missão
      </ButtonComponent>
    </BaseScreenHeaderComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 64,
    gap: 16,
    justifyContent: 'space-between',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    gap: 16,
  },
  inputContainer: {
    width: '100%',
    gap: 8,
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.coolGrey[100],
    borderWidth: 1,
    borderColor: colors.coolGrey[100],
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 8,
  },
  radioButtonCotainer: {
    flexDirection: 'row',
    color: 'white',
  },
});

const radioButtonStyles: Partial<RadioButtonProps> = {
  color: colors.coolGrey[100],
  labelStyle: {
    color: colors.coolGrey[100],
    fontSize: 24,
    fontWeight: 'bold',
  },
};
