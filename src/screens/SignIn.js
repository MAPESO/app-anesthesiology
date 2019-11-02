// Packages
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioGroup from 'react-native-radio-button-group';
import CheckBox from 'react-native-check-box';
import RNPickerSelect from 'react-native-picker-select';
import tinytime from 'tinytime';

import { Layout } from '../components/SignIn/Layout';
import { Title } from '../components/SignIn/Title';
import { InputDate } from '../components/SignIn/InputDate';
import { countries } from '../lib/utils/country';
import { societys } from '../lib/utils/society';

const SignIn = () => {
  const [nameInput, setName] = useState('');
  const [lastInput, setLast] = useState('');
  const [emailInput, setEmail] = useState('');
  const [ageInput, setAge] = useState('');
  const [phoneInput, setPhone] = useState('');
  const [countryInput, setCountry] = useState('');
  const [addressInput, setAddress] = useState('');
  const [specialtyInput, setSpecialty] = useState('');
  const [subspecialtyInput, setSubspecialty] = useState('');
  const [societyInput, setSociety] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [userID, setUserID] = useState('');
  const [residentInput, setResident] = useState(false);
  const [isDateVisible, setDateVisible] = useState(false);

  const residentValue = residentInput ? 'si' : 'no';
  const showDateTimePicker = () => {
    setDateVisible(true);
  };
  const hideDateTimePicker = () => {
    setDateVisible(false);
  };
  const handleDate = date => {
    // formatear la hora
    const template = tinytime('{DD}-{MMMM}-{YYYY}');
    setBirthday(template.render(date));
    hideDateTimePicker();
  };
  const sendData = () => {
    fetch('https://anestesia.now.sh/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput,
        lastName: lastInput,
        age: ageInput,
        email: emailInput,
        phone: phoneInput,
        birthday,
        gender: gender.label,
        nationality: countryInput,
        address: addressInput,
        specialty: specialtyInput,
        subSpecialty: subspecialtyInput,
        resident: residentValue,
        userID,
        society: societyInput
      })
    });
  };
  const handlePress = () => {
    sendData();
  };
  return (
    <Layout>
      <Title>Nombre</Title>
      <TextInput
        style={styles.input}
        value={nameInput}
        onChangeText={value => setName(value)}
      />
      <Title>Apellido</Title>
      <TextInput
        style={styles.input}
        value={lastInput}
        onChangeText={value => setLast(value)}
      />
      <Title>Edad</Title>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={ageInput}
        onChangeText={value => setAge(value)}
      />
      <Title>Email</Title>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={emailInput}
        onChangeText={value => setEmail(value)}
      />
      <Title>Teléfono</Title>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneInput}
        onChangeText={value => setPhone(value)}
      />
      <Title>Fecha de nacimiento</Title>
      <InputDate showDialog={showDateTimePicker} date={birthday} />
      <DateTimePicker
        isVisible={isDateVisible}
        onCancel={hideDateTimePicker}
        onConfirm={handleDate}
      />
      <Title>Genero</Title>
      <RadioGroup
        circleStyle={{
          borderColor: '#999',
          borderWidth: 0.5,
          marginRight: 10,
          fillColor: '#111'
        }}
        options={[{ id: 0, label: 'hombre' }, { id: 1, label: 'mujer' }]}
        onChange={option => setGender(option)}
      />
      <Title>Nacionalidad</Title>
      <RNPickerSelect
        placeholder={{ label: '' }}
        value={countryInput}
        items={countries}
        onValueChange={value => setCountry(value)}
        useNativeAndroidPickerStyle={false}
        style={{ ...styles }}
      />
      <Title>Dirección</Title>
      <TextInput
        style={styles.input}
        value={addressInput}
        onChangeText={value => setAddress(value)}
      />
      <Title>Especialidad</Title>
      <TextInput
        style={styles.input}
        value={specialtyInput}
        onChangeText={value => setSpecialty(value)}
      />
      <Title>Subespecialidad</Title>
      <TextInput
        style={styles.input}
        value={subspecialtyInput}
        onChangeText={value => setSubspecialty(value)}
      />
      <Title>¿Eres residente?</Title>
      <CheckBox
        style={{ flex: 1, padding: 5 }}
        isChecked={residentInput}
        onClick={() => setResident(!residentInput)}
      />
      <Title>Cédula (una foto de calidad)</Title>
      <TextInput
        style={styles.input}
        value={userID}
        onChangeText={value => setUserID(value)}
      />
      <Title>Socidad a la que pertenece</Title>
      <RNPickerSelect
        placeholder={{ label: '' }}
        value={societyInput}
        items={societys}
        onValueChange={value => setSociety(value)}
        useNativeAndroidPickerStyle={false}
        style={{ ...styles }}
      />
      <Button
        style={{ color: '#fff' }}
        containerStyle={{
          flex: 1,
          margin: 10,
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#000'
        }}
        onPress={handlePress}
      >
        Enviar
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  },
  inputIOS: {
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  },
  inputAndroid: {
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  }
});

export default SignIn;
