// Packages
import React, { useContext } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

// Components
import { Layout } from '../../UI/Layout';
import { Label } from '../../UI/Label';
import { Select } from '../../UI/Select';

// Context
import { ConfiContext } from '../../../context/ConfiContext';

// Utils
import { SECTIONS } from '../../../lib/utils/classificationOptions';
import { severityRating } from '../../../lib/utils/describingOption';

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
const ClassificationRoute = () => {
  const user = useContext(ConfiContext);
  const updateSections = activeSections => {
    user.setActiveSections(activeSections);
  };
  const handleClick = (indexA, indexB) => {
    const temp = [...user.isChecked];
    temp[indexA].data[indexB].value = !temp[indexA].data[indexB].value;
    user.setChecked(temp);
  };
  const renderContent = (section, indexA, isActive, sections) => {
    user.setChecked(sections);
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
        activeSections={user.activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
      <Layout>
        <Label>Grado de gravedad</Label>
        <Select
          value={user.gravitySelect}
          options={severityRating}
          onValueChange={user.setGravity}
        />
      </Layout>
    </ScrollView>
  );
};

export { ClassificationRoute };
