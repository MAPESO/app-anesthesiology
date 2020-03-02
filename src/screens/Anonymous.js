/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { TabView } from 'react-native-tab-view';

// Components
import { DescriptionRoute } from '../components/TabView/Description';
import { Counter } from '../components/Counter';
import { Layout } from '../components/SignIn/Layout';
import { Label } from '../components/Form/Label';

const initialLayout = { width: Dimensions.get('window').width };

const Anonymous = () => {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState({
    patientSelect: '',
    ageSelect: '',
    imcSelect: '',
    asaSelect: '',
    locationSelect: '',
    timeSelect: '',
    assistantSelect: '',
    supevisorSelect: '',
    otherSelect: '',
    problemSelect: ''
  });
  const [routes] = useState([
    { key: 'description', title: 'Descripción' },
    { key: 'classification', title: 'Clasificar' },
    { key: 'reflect', title: 'Reflexión' }
  ]);
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'description':
        return (
          <DescriptionRoute jumpTo={jumpTo} state={state} setState={setState} />
        );
      case 'classification':
        return <Counter jumpTo={jumpTo} />;
      case 'reflect':
        return (
          <Layout>
            <Label>jhh{state.patientSelect}</Label>
            <Label> hhh{state.ageSelect}</Label>
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

export default Anonymous;
