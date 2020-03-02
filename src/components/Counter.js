import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

// Utils
import { SECTIONS } from '../lib/utils/classificationOptions';
import { severityRating } from '../lib/utils/describingOption';

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

const Container = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 10px;
`;

const Layout = props => {
  const { children } = props;
  return (
    <Container>
      <View>{children}</View>
    </Container>
  );
};

const Label = styled.Text`
  font-size: 18;
  margin-bottom: 8;
  text-align: left;
`;

const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
  padding-left: 25px;
  padding-right: 18px;
  align-items: center;
  background-color: #fff;
  margin-top: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
`;

const CardContent = styled.View`
  background-color: #eaeaea;
  padding: 20px;
`;

const Title = styled.Text`
  color: #444;
  font-size: 14px;
  font-weight: bold;
`;

// eslint-disable-next-line no-unused-vars
const renderHeader = (section, index, isActive, sections) => {
  return (
    <Animatable.View
      duration={300}
      transition="backgroundColor"
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: isActive
          ? 'rgba(255,255,255,1)'
          : 'rgba(245,252,255,1)'
      }}
    >
      {isActive ? (
        <Card>
          <Title>{section.title}</Title>
          <Icon name="keyboard-arrow-up" size={30} color="red" />
        </Card>
      ) : (
        <Card>
          <Title>{section.title}</Title>
          <Icon name="keyboard-arrow-down" size={30} color="#444" />
        </Card>
      )}
    </Animatable.View>
  );
};

const Counter = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [isChecked, setChecked] = useState([]);
  const [gravitySelect, setGravity] = useState();
  const updateSections = activeSections => {
    setActiveSections(activeSections);
  };
  const handleClick = (indexA, indexB) => {
    const temp = [...isChecked];
    temp[indexA].data[indexB].value = !temp[indexA].data[indexB].value;
    setChecked(temp);
  };
  const renderContent = (section, indexA, isActive, sections) => {
    setChecked(sections);
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: isActive
            ? 'rgba(255,255,255,1)'
            : 'rgba(245,252,255,1)'
        }}
      >
        <CardContent>
          {section.data.map((item, indexB) => {
            return (
              <View key={item.id}>
                {item.subTitle && (
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        marginBottom: 4
                      }}
                    >
                      {item.subTitle}
                    </Text>
                  </View>
                )}
                <CheckBox
                  style={{ marginTop: 5 }}
                  onClick={() => handleClick(indexA, indexB)}
                  isChecked={item.value}
                  rightText={item.label}
                />
              </View>
            );
          })}
        </CardContent>
      </Animatable.View>
    );
  };
  return (
    <ScrollView>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
      <Layout>
        <Label>Grado de gravedad</Label>
        <RNPickerSelect
          placeholder={{
            label: 'Seleccione...',
            value: null,
            color: '#9EA0A4'
          }}
          style={{ ...styles }}
          items={severityRating}
          value={gravitySelect}
          onValueChange={() => {}}
        />
      </Layout>
    </ScrollView>
  );
};

export { Counter };
