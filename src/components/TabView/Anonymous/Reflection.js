/* eslint-disable prettier/prettier */
// Packages
import React, { useContext } from 'react';
import { View } from 'react-native';
import { Textarea } from 'native-base';

// Components
import { Layout } from '../../UI/Layout';
import { Content } from '../../UI/Content';
import { Header } from '../../UI/Header';
import { SubTitle } from '../../UI/SubTitle';
import { RadioButton } from '../../UI/RadioButton';

// Context
import { AnoContext } from '../../../context/AnoContext';

const radiogroup_options = [
  { id: 0, label: 'Si' },
  { id: 1, label: 'No' }
];

const radiogroup_options_2 = [
  { id: 0, label: 'Si' },
  { id: 1, label: 'No' }
];

const ReflectionRoute = () => {
  const user = useContext(AnoContext);
  return (
    <Layout>
      <Header title="Reflexión crítica" />
      <Content>
        <View style={{ marginTop: 10 }}>
          <SubTitle>
            ¿Crees que este incidente podría haberse evitado?
          </SubTitle>
          <View style={{ marginTop: 15 }} />
          <RadioButton options={radiogroup_options} onChange={user.setRadioGroup} />
        </View>
        <View style={{ marginTop: 15 }}>
          <SubTitle>Factores contribuyentes</SubTitle>
          <Textarea 
             bordered 
             rowSpan={5} 
             value={user.contributingFactor} 
             onChangeText={text => user.setContributingFactor(text)} 
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <SubTitle>Lecciones aprendidas</SubTitle>
          <Textarea 
             bordered 
             rowSpan={5} 
             value={user.learnedLessons} 
             onChangeText={text => user.setLearnedLessons(text)} 
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <SubTitle>
            Ante este evento, ¿utilizó el equipo algún manual de emergencia?
            (ayudas cognitivas, lista de verificación)
          </SubTitle>
          <View style={{ marginTop: 10 }} />
          <RadioButton options={radiogroup_options_2} onChange={user.setRadioGroup2} />
          <View style={{ marginTop: 5 }} />
        </View>
      </Content>
    </Layout>
  );
};

export { ReflectionRoute };
