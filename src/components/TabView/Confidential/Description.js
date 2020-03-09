// Packages
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Textarea } from 'native-base';

// Components
import { Layout } from '../../UI/Layout';
import { Content } from '../../UI/Content';
import { Label } from '../../UI/Label';
import { Header } from '../../UI/Header';
import { Select } from '../../UI/Select';

// Context
import { ConfiContext } from '../../../context/ConfiContext';

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
} from '../../../lib/utils/describingOption';

const DescriptionRoute = () => {
  const user = useContext(ConfiContext);
  return (
    <Layout>
      <Header title="Información general" />
      <Content>
        <Label>Paciente</Label>
        <Select
          value={user.patientSelect}
          options={patients}
          onValueChange={user.setPatient}
        />
        <Label>Edad</Label>
        <Select
          value={user.ageSelect}
          options={ages}
          onValueChange={user.setAge}
        />
        <Label>IMC</Label>
        <Select
          value={user.imcSelect}
          options={imc}
          onValueChange={user.setImc}
        />
        <Label>ASA</Label>
        <Select
          value={user.asaSelect}
          options={asa}
          onValueChange={user.setAsa}
        />
        <Label>Ubicación</Label>
        <Select
          value={user.locationSelect}
          options={locations}
          onValueChange={user.setLocation}
        />
        <Label>Hora</Label>
        <Select
          value={user.timeSelect}
          options={time}
          onValueChange={user.setTime}
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
          <Select
            value={user.assistantSelect}
            options={doctor}
            onValueChange={user.setAssistant}
          />
          <Label>Médico Supervisor</Label>
          <Select
            value={user.supevisorSelect}
            options={doctor}
            onValueChange={user.setSupevisor}
          />
          <Label>Otro</Label>
          <Select
            value={user.otherSelect}
            options={other}
            onValueChange={user.setOther}
          />
          <Label>Tipo de procedimiento</Label>
          <Select
            value={user.problemSelect}
            options={typeProblem}
            onValueChange={user.setProblem}
          />
          <Label>Descripción del incidente</Label>
          <Textarea
            bordered
            rowSpan={5}
            value={user.descriptionProblem}
            onChangeText={text => user.setDescription(text)}
          />
          <View style={{ marginTop: 25 }}></View>
        </View>
      </Content>
    </Layout>
  );
};

export { DescriptionRoute };
