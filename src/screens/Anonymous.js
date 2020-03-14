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
  const [section_1, setSection_1] = useState([]);
  const [section_2, setSection_2] = useState([]);
  const [section_3, setSection_3] = useState([]);
  const [section_4, setSection_4] = useState([]);
  const [section_5, setSection_5] = useState([]);
  const [section_6, setSection_6] = useState([]);
  const [section_7, setSection_7] = useState([]);
  const [section_8, setSection_8] = useState([]);
  const [section_9, setSection_9] = useState([]);
  const [section_10, setSection_10] = useState([]);
  const [section_11, setSection_11] = useState([]);
  const [section_12, setSection_12] = useState([]);
  const [section_13, setSection_13] = useState([]);
  const [section_14, setSection_14] = useState([]);
  const [section_15, setSection_15] = useState([]);
  const [section_16, setSection_16] = useState([]);
  const [section_17, setSection_17] = useState([]);
  const [severitySelect, setSeverity] = useState('');
  // State of reflection
  const [radioGroup, setRadioGroup] = useState('');
  const [radioGroup2, setRadioGroup2] = useState('');
  const [contributingFactor, setContributingFactor] = useState('');
  const [learnedLessons, setLearnedLessons] = useState('');

  // lo que sea
  const onlyLabel = section_1.filter(item => item.label);
  const onlyLabel_2 = section_2.filter(item => item.label);
  const onlyLabel_3 = section_3.filter(item => item.label);
  const onlyLabel_4 = section_4.filter(item => item.label);
  const onlyLabel_5 = section_5.filter(item => item.label);
  const onlyLabel_6 = section_6.filter(item => item.label);
  const onlyLabel_7 = section_7.filter(item => item.label);
  const onlyLabel_8 = section_8.filter(item => item.label);
  const onlyLabel_9 = section_9.filter(item => item.label);
  const onlyLabel_10 = section_10.filter(item => item.label);
  const onlyLabel_11 = section_11.filter(item => item.label);
  const onlyLabel_12 = section_12.filter(item => item.label);
  const onlyLabel_13 = section_13.filter(item => item.label);
  const onlyLabel_14 = section_14.filter(item => item.label);
  const onlyLabel_15 = section_15.filter(item => item.label);
  const onlyLabel_16 = section_16.filter(item => item.label);
  const onlyLabel_17 = section_17.filter(item => item.label);

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
  const logClassification = [
    ...onlyLabel,
    ...onlyLabel_2,
    ...onlyLabel_3,
    ...onlyLabel_4,
    ...onlyLabel_5,
    ...onlyLabel_6,
    ...onlyLabel_7,
    ...onlyLabel_8,
    ...onlyLabel_9,
    ...onlyLabel_10,
    ...onlyLabel_11,
    ...onlyLabel_12,
    ...onlyLabel_13,
    ...onlyLabel_14,
    ...onlyLabel_15,
    ...onlyLabel_16,
    ...onlyLabel_17
  ];
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
    section_1,
    setSection_1,
    section_2,
    setSection_2,
    section_3,
    setSection_3,
    section_4,
    setSection_4,
    section_5,
    setSection_5,
    section_6,
    setSection_6,
    section_7,
    setSection_7,
    section_8,
    setSection_8,
    section_9,
    setSection_9,
    section_10,
    setSection_10,
    section_11,
    setSection_11,
    section_12,
    setSection_12,
    section_13,
    setSection_13,
    section_14,
    setSection_14,
    section_15,
    setSection_15,
    section_16,
    setSection_16,
    section_17,
    setSection_17,
    severitySelect,
    setSeverity,
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
    logReflection,
    logClassification
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
