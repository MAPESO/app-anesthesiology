/* eslint-disable react/no-unescaped-entities */
// Packages
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

// Components
import { Layout } from '../../UI/Layout';
import { Content } from '../../UI/Content';
import { Header } from '../../UI/Header';
import { Label } from '../../UI/Label';

// Context
import { TestContext } from '../../../context/TestContext';

// Helpers
import { checkLogDescription } from '../../../lib/helpers/logDescription';
import { checkLogReflection } from '../../../lib/helpers/logReflection';

const SummaryRoute = () => {
  const user = useContext(TestContext);
  const logDescriptionArray = [user.logDescription];
  const logReflectionArray = [user.logReflection];
  const isDescription = checkLogDescription(logDescriptionArray);
  const isReflection = checkLogReflection(logReflectionArray);
  const showEquipment = user => {
    if (
      user.assistantSelect !== '' ||
      user.supevisorSelect !== '' ||
      user.otherSelect !== ''
    ) {
      return (
        <View>
          <View>
            <Text style={{ marginLeft: 14 }}>Equipo</Text>
          </View>
          <View>
            {user.assistantSelect !== '' ? (
              <Text style={{ marginLeft: 22 }}>> {user.assistantSelect}</Text>
            ) : null}
            {user.supevisorSelect !== '' ? (
              <Text style={{ marginLeft: 22 }}>> {user.supevisorSelect}</Text>
            ) : null}
            {user.otherSelect !== '' ? (
              <Text style={{ marginLeft: 22 }}>> {user.otherSelect}</Text>
            ) : null}
          </View>
        </View>
      );
    }
  };
  return (
    <Layout>
      <Header title="Revise sus datos" />
      <Content>
        <Label>DESCRIPCIÓN - {isDescription === true ? '' : 'VACIO'}</Label>
        {isDescription && (
          <View>
            <Text style={{ marginLeft: 5 }}>Información general</Text>
            {user.patientSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>Paciente</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>> {user.patientSelect}</Text>
                </View>
              </View>
            ) : null}
            {user.ageSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>Edad</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>> {user.ageSelect}</Text>
                </View>
              </View>
            ) : null}
            {user.imcSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>IMC</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>> {user.imcSelect}</Text>
                </View>
              </View>
            ) : null}
            {user.asaSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>ASA</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>> {user.asaSelect}</Text>
                </View>
              </View>
            ) : null}
            {user.locationSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>Ubicación</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>
                    > {user.locationSelect}
                  </Text>
                </View>
              </View>
            ) : null}
            {user.timeSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>Horario</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>> {user.timeSelect}</Text>
                </View>
              </View>
            ) : null}
            {showEquipment(user)}
            {user.problemSelect !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>Tipo de procedimiento</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>> {user.problemSelect}</Text>
                </View>
              </View>
            ) : null}
            {user.descriptionProblem !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>
                    Descripción del incidente
                  </Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 22 }}>
                    > {user.descriptionProblem}
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        )}
        <View style={{ marginTop: 15 }} />
        <Label>REFLEXIÓN - {isReflection === true ? '' : 'VACIO'} </Label>
        {isReflection && (
          <View>
            <Text style={{ marginLeft: 5 }}>Reflexión</Text>
            {user.radioGroup !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>
                    ¿Crees que este incidente podría haberse evitado?
                  </Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 32 }}>
                    > {user.radioGroup.label}
                  </Text>
                </View>
              </View>
            ) : null}
            {user.contributingFactor !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>
                    Factores contribuyentes
                  </Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 32 }}>
                    > {user.contributingFactor}
                  </Text>
                </View>
              </View>
            ) : null}
            {user.learnedLessons !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>Lecciones aprendidas</Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 32 }}>
                    > {user.learnedLessons}
                  </Text>
                </View>
              </View>
            ) : null}
            <View style={{ marginTop: 2 }} />
            {user.radioGroup2 !== '' ? (
              <View>
                <View>
                  <Text style={{ marginLeft: 14 }}>
                    Ante este evento, ¿utilizó el equipo algún manual de
                    emergencia? (ayudas cognitivas, lista de verificación)
                  </Text>
                </View>
                <View>
                  <Text style={{ marginLeft: 32 }}>
                    > {user.radioGroup2.label}
                  </Text>
                </View>
              </View>
            ) : null}
            <View style={{ marginTop: 20 }} />
          </View>
        )}
      </Content>
    </Layout>
  );
};

export { SummaryRoute };
