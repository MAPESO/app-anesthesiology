// Packages
import React, { useState } from 'react';
import { Tabs, Tab, ScrollableTab, Container } from 'native-base';
import { FloatingAction } from 'react-native-floating-action';

// Components
import { DescriptionRoute } from '../components/TabView/Anonymous/Description';
import { ClassificationRoute } from '../components/TabView/Anonymous/Classification';
import { ReflectionRoute } from '../components/TabView/Anonymous/Reflection';
import { SummaryRoute } from '../components/TabView/Anonymous/Summary';

// Context
import { AnoProvider } from '../context/AnoContext';

// Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const Anonymous = () => {
  // State Tab
  const [tabIndex, setTab] = useState(0);
  // State of description
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
  const [descriptionProblem, setDescription] = useState('');
  // State of classification

  // State of reflection
  const [radioGroup, setRadioGroup] = useState('');
  const [radioGroup2, setRadioGroup2] = useState('');
  const [contributingFactor, setContributingFactor] = useState('');
  const [learnedLessons, setLearnedLessons] = useState('');

  // Logs
  const logDescription = {
    patientSelect,
    ageSelect,
    imcSelect,
    asaSelect,
    locationSelect,
    timeSelect,
    assistantSelect,
    supevisorSelect,
    otherSelect,
    problemSelect,
    descriptionProblem
  };
  const logReflection = {
    radioGroup,
    radioGroup2,
    contributingFactor,
    learnedLessons
  };
  const values = {
    // State of description
    patientSelect,
    setPatient,
    ageSelect,
    setAge,
    imcSelect,
    setImc,
    asaSelect,
    setAsa,
    locationSelect,
    setLocation,
    timeSelect,
    setTime,
    assistantSelect,
    setAssistant,
    supevisorSelect,
    setSupevisor,
    otherSelect,
    setOther,
    problemSelect,
    setProblem,
    descriptionProblem,
    setDescription,
    // State of classification
    // State of reflection
    radioGroup,
    setRadioGroup,
    radioGroup2,
    setRadioGroup2,
    contributingFactor,
    setContributingFactor,
    learnedLessons,
    setLearnedLessons,
    // Logs
    logDescription,
    logReflection
  };
  const BtChangeTab = () => {
    setTab(tabIndex + 1);
  };
  const handleChangeTab = tabChange => {
    setTab(tabChange.i);
  };
  return (
    <Container>
      <AnoProvider value={values}>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          page={tabIndex}
          onChangeTab={tabChange => handleChangeTab(tabChange)}
        >
          <Tab heading="DESCRIPCIÓN">
            <DescriptionRoute />
          </Tab>
          <Tab heading="CLASIFICAR">
            <ClassificationRoute />
          </Tab>
          <Tab heading="REFLEXIÓN">
            <ReflectionRoute />
          </Tab>
          <Tab heading="REVISIÓN">
            <SummaryRoute />
          </Tab>
        </Tabs>
        {tabIndex === 3 ? (
          <FloatingAction
            animated={false}
            showBackground={false}
            color="#7928CA"
            floatingIcon={<Icon name={'send'} size={30} color="#fff" />}
            onPressMain={() => console.log('Envio de datos')}
          />
        ) : (
          <FloatingAction
            animated={false}
            showBackground={false}
            color="#0070F3"
            floatingIcon={<Icon name={'check'} size={30} color="#fff" />}
            onPressMain={BtChangeTab}
          />
        )}
      </AnoProvider>
    </Container>
  );
};

export default Anonymous;
