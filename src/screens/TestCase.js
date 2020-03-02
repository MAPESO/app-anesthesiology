/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dimensions, Text, View, ScrollView } from 'react-native';
import { TabView } from 'react-native-tab-view';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import RadioButton from 'react-native-radio-button-group';

// Components
import { Label } from '../components/Form/Label';
import { Counter } from '../components/Counter';

// Utils
import {
  patients,
  ages,
  imc,
  asa,
  locations,
  time,
  doctor,
  other,
  typeProblem
} from '../lib/utils/describingOption';

const radiogroup_options = [
  { id: 0, label: 'Si' },
  { id: 1, label: 'No' }
];

const radiogroup_options_2 = [
  { id: 0, label: 'Si' },
  { id: 1, label: 'No' }
];

const TextArea = styled.TextInput`
  height: 80;
  justify-content: flex-start;
`;

const TextAreaContainer = styled.View`
  margin-top: 10px;
  padding: 5px;
  border-width: 0.5;
  border-color: #000;
`;

const Container = styled.View`
  flex: 1;
`;

const HeadContainer = styled.View`
  flex: 1;
  height: 30;
  background-color: #333;
  padding-top: 5;
  padding-left: 5;
`;

const Layout = props => {
  const { children } = props;
  return (
    <Container>
      <ScrollView>
        <View>{children}</View>
      </ScrollView>
    </Container>
  );
};

const Header = props => {
  const { children } = props;
  return <HeadContainer>{children}</HeadContainer>;
};

const styles = {
  inputIOS: {
    paddingLeft: 14,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  },
  inputAndroid: {
    paddingLeft: 14,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  }
};

const FormSelect = ({ options, value, updateSelect }) => {
  return (
    <RNPickerSelect
      items={options}
      value={value}
      onValueChange={selectValue => {
        updateSelect(selectValue);
      }}
      placeholder={{
        label: 'Seleccione...',
        value: null,
        color: '#9EA0A4'
      }}
      style={{ ...styles }}
      useNativeAndroidPickerStyle={false}
    />
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const TestCase = () => {
  const [index, setIndex] = useState(0);
  const [patientSelect, setPatient] = useState('');
  const [ageSelect, setAge] = useState('');
  const [imcSelect, setImc] = useState('');
  const [asaSelect, setAsa] = useState('');
  const [locationSelect, setLocation] = useState('');
  const [timeSelect, setTime] = useState('');
  const [assistantSelect, setAssistant] = useState('');
  const [supevisorSelect, setSupevisor] = useState('');
  const [otherSelect, setOther] = useState('');
  const [problemSelect, setProblem] = useState('');
  const [routes] = useState([
    { key: 'description', title: 'Descripción' },
    { key: 'classification', title: 'Clasificar' },
    { key: 'reflect', title: 'Reflexión' }
  ]);
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'description':
        return (
          <Layout>
            <Header>
              <Text style={{ color: '#fff' }}>Información general</Text>
            </Header>
            <View style={{ marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
              <Label>Paciente</Label>
              <FormSelect
                options={patients}
                value={patientSelect}
                updateSelect={setPatient}
              />
              <Label>Edad</Label>
              <FormSelect
                options={ages}
                value={ageSelect}
                updateSelect={setAge}
              />
              <Label>IMC</Label>
              <FormSelect
                options={imc}
                value={imcSelect}
                updateSelect={setImc}
              />
              <Label>ASA</Label>
              <FormSelect
                options={asa}
                value={asaSelect}
                updateSelect={setAsa}
              />
              <Label>Ubicación</Label>
              <FormSelect
                options={locations}
                value={locationSelect}
                updateSelect={setLocation}
              />
              <Label>Hora</Label>
              <FormSelect
                options={time}
                value={timeSelect}
                updateSelect={setTime}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  fontStyle: 'italic'
                }}
              >
                Personal
              </Text>
              <View style={{ marginTop: 20 }}>
                <Label>Médico Asistente</Label>
                <FormSelect
                  options={doctor}
                  value={assistantSelect}
                  updateSelect={setAssistant}
                />
                <Label>Médico Supervisor</Label>
                <FormSelect
                  options={doctor}
                  value={supevisorSelect}
                  updateSelect={setSupevisor}
                />
                <Label>Otro</Label>
                <FormSelect
                  options={other}
                  value={otherSelect}
                  updateSelect={setOther}
                />
                <Label>Tipo de procedimiento</Label>
                <FormSelect
                  options={typeProblem}
                  value={problemSelect}
                  updateSelect={setProblem}
                />
                <Label>Descripción del incidente</Label>
                <TextAreaContainer>
                  <TextArea
                    underlineColorAndroid="transparent"
                    placeholder="Escriba algo"
                    numberOfLines={10}
                    multiline={true}
                  />
                </TextAreaContainer>
                <View style={{ marginTop: 25 }}></View>
              </View>
            </View>
          </Layout>
        );
      case 'classification':
        return <Counter jumpTo={jumpTo} />;
      case 'reflect':
        return (
          <Layout>
            <Header>
              <Text style={{ color: '#fff' }}>Reflexión crítica</Text>
            </Header>
            <View style={{ marginTop: 10, paddingLeft: 15, paddingRight: 15 }}>
              <Text style={{ fontSize: 14 }}>
                ¿Crees que este incidente podría haberse evitado?
              </Text>
              <View style={{ marginTop: 15 }}>
                <RadioButton
                  circleStyle={{ fillColor: '#000' }}
                  options={radiogroup_options}
                  horizontal={false}
                  onChange={() => {}}
                />
              </View>
              <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 14 }}>Factores contribuyentes</Text>
                <TextAreaContainer>
                  <TextArea
                    underlineColorAndroid="transparent"
                    placeholder="Escriba algo"
                    numberOfLines={10}
                    multiline={true}
                  />
                </TextAreaContainer>
              </View>
              <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 14 }}>Lecciones aprendidas</Text>
                <TextAreaContainer>
                  <TextArea
                    underlineColorAndroid="transparent"
                    placeholder="Escriba algo"
                    numberOfLines={10}
                    multiline={true}
                  />
                </TextAreaContainer>
              </View>
              <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 14 }}>
                  Ante este evento, ¿utilizó el equipo algún manual de
                  emergencia? (ayudas cognitivas, lista de verificación)
                </Text>
                <RadioButton
                  circleStyle={{ fillColor: '#000' }}
                  options={radiogroup_options_2}
                  horizontal={false}
                  onChange={() => {}}
                />
              </View>
            </View>
          </Layout>
        );
    }
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default TestCase;
