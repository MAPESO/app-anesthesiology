// Packages
import React, { useState } from 'react';
import { Tabs, Tab, ScrollableTab, Container } from 'native-base';
import { FloatingAction } from 'react-native-floating-action';

// Components
import { DescriptionRoute } from '../components/TabView/TestCase/Description';
import { ClassificationRoute } from '../components/TabView/TestCase/Classification';
import { ReflectionRoute } from '../components/TabView/TestCase/Reflection';
import { SummaryRoute } from '../components/TabView/TestCase/Summary';

// Context
import { TestProvider } from '../context/TestContext';

// Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const TestCase = () => {
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
  const [activeSections, setActiveSections] = useState([]);
  const [isChecked, setChecked] = useState([]);
  const [gravitySelect, setGravity] = useState();
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
    activeSections,
    setActiveSections,
    isChecked,
    setChecked,
    gravitySelect,
    setGravity,
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
      <TestProvider value={values}>
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
      </TestProvider>
    </Container>
  );
};

export default TestCase;
