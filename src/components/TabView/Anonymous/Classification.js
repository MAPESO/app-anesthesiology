// Packages
import React, { useContext, useEffect } from 'react';
import { List } from 'react-native-paper';
import { Text, View, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';

// Components
import { ContentCheckBox } from '../../UI/ContentCheckBox';
import { Header } from '../../UI/Header';
import { Select } from '../../UI/Select';

// Context
import { AnoContext } from '../../../context/AnoContext';

// Utils
import {
  section_1,
  section_2,
  section_3,
  section_4,
  section_5,
  section_6,
  section_7,
  section_8,
  section_9,
  section_10,
  section_11,
  section_12,
  section_13,
  section_14,
  section_15,
  section_16,
  section_17,
  severityRating
} from '../../../lib/utils/classificationOptions';

const ClassificationRoute = () => {
  const user = useContext(AnoContext);
  useEffect(() => {
    user.setSection_1(section_1);
    user.setSection_2(section_2);
    user.setSection_3(section_3);
    user.setSection_4(section_4);
    user.setSection_5(section_5);
    user.setSection_6(section_6);
    user.setSection_7(section_7);
    user.setSection_8(section_8);
    user.setSection_9(section_9);
    user.setSection_10(section_10);
    user.setSection_11(section_11);
    user.setSection_12(section_12);
    user.setSection_13(section_13);
    user.setSection_14(section_14);
    user.setSection_15(section_15);
    user.setSection_16(section_16);
    user.setSection_17(section_17);
  }, []);
  return (
    <ScrollView>
      <List.Section>
        <List.Accordion title="Manejo de las vías aéreas">
          <ContentCheckBox>
            {user.section_1.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_1];
                        checkBox[index].value = !item.value;
                        user.setSection_1(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Pulmonar/Respiratorio">
          <ContentCheckBox>
            {user.section_2.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_2];
                        checkBox[index].value = !item.value;
                        user.setSection_2(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Complicaciones anestésicas">
          <ContentCheckBox>
            {user.section_3.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_3];
                        checkBox[index].value = !item.value;
                        user.setSection_3(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Cardiaco">
          <ContentCheckBox>
            {user.section_4.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_4];
                        checkBox[index].value = !item.value;
                        user.setSection_4(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Neurológico">
          <ContentCheckBox>
            {user.section_5.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_5];
                        checkBox[index].value = !item.value;
                        user.setSection_5(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Renal">
          <ContentCheckBox>
            {user.section_6.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_6];
                        checkBox[index].value = !item.value;
                        user.setSection_6(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Inmunológico">
          <ContentCheckBox>
            {user.section_7.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_7];
                        checkBox[index].value = !item.value;
                        user.setSection_7(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Medicación">
          <ContentCheckBox>
            {user.section_8.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_8];
                        checkBox[index].value = !item.value;
                        user.setSection_8(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Sangre">
          <ContentCheckBox>
            {user.section_9.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_9];
                        checkBox[index].value = !item.value;
                        user.setSection_9(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Anestesia regional">
          <ContentCheckBox>
            {user.section_10.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_10];
                        checkBox[index].value = !item.value;
                        user.setSection_10(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Complicaciones vasculares">
          <ContentCheckBox>
            {user.section_11.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_11];
                        checkBox[index].value = !item.value;
                        user.setSection_11(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Mortalidad">
          <ContentCheckBox>
            {user.section_12.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_12];
                        checkBox[index].value = !item.value;
                        user.setSection_12(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Administrativo">
          <ContentCheckBox>
            {user.section_13.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_13];
                        checkBox[index].value = !item.value;
                        user.setSection_13(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Documentación">
          <ContentCheckBox>
            {user.section_14.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_14];
                        checkBox[index].value = !item.value;
                        user.setSection_14(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Equipo">
          <ContentCheckBox>
            {user.section_15.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_15];
                        checkBox[index].value = !item.value;
                        user.setSection_15(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Infrestructura/Sistema">
          <ContentCheckBox>
            {user.section_16.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_16];
                        checkBox[index].value = !item.value;
                        user.setSection_16(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <List.Accordion title="Otro">
          <ContentCheckBox>
            {user.section_17.map((item, index) => {
              return (
                <View key={index}>
                  {item.subTitle !== undefined ? (
                    <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                      {item.subTitle}
                    </Text>
                  ) : (
                    <CheckBox
                      onClick={() => {
                        const checkBox = [...section_17];
                        checkBox[index].value = !item.value;
                        user.setSection_17(checkBox);
                      }}
                      isChecked={item.value}
                      rightText={item.label}
                    />
                  )}
                </View>
              );
            })}
          </ContentCheckBox>
        </List.Accordion>
        <Header title="Clasificación de gravedad" />
        <Select
          value={user.severitySelect}
          options={severityRating}
          onValueChange={user.setSeverity}
        />
      </List.Section>
    </ScrollView>
  );
};

export { ClassificationRoute };
