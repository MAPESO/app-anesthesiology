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
import { ConfiContext } from '../../../context/ConfiContext';

// Helpers
import { checkLogDescription } from '../../../lib/helpers/logDescription';
import { checkLogReflection } from '../../../lib/helpers/logReflection';
import { checkLogClassification } from '../../../lib/helpers/logClassification';

const SummaryRoute = () => {
  const user = useContext(ConfiContext);
  const logDescriptionArray = [user.logDescription];
  const logReflectionArray = [user.logReflection];
  const isDescription = checkLogDescription(logDescriptionArray);
  const isReflection = checkLogReflection(logReflectionArray);
  const isClassification = checkLogClassification(user.logClassification);
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
        <Label>
          CLASIFICAR -{' '}
          {isClassification === true || user.severitySelect !== ''
            ? ''
            : 'VACIO'}{' '}
        </Label>
        {isClassification === true || user.severitySelect !== '' ? (
          <View>
            <Text style={{ fontSize: 15 }}>Manejo de las vías aéreas</Text>
            {user.section_1.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Pulmonar/Respiratorio</Text>
            {user.section_2.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Complicaciones anestésicas</Text>
            {user.section_3.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Cardiaco</Text>
            {user.section_4.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Neurológico</Text>
            {user.section_5.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Renal</Text>
            {user.section_6.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Inmunológico</Text>
            {user.section_7.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Medicación</Text>
            {user.section_8.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Sangre</Text>
            {user.section_9.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Anestesia regional</Text>
            {user.section_10.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Complicaciones vasculares</Text>
            {user.section_11.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Mortalidad</Text>
            {user.section_12.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Administrativo</Text>
            {user.section_13.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Documentación</Text>
            {user.section_14.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Equipo</Text>
            {user.section_15.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Infrestructura/Sistema</Text>
            {user.section_16.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Otro</Text>
            {user.section_17.map((item, index) => {
              return (
                <View key={index}>
                  {item.value === true ? (
                    <View>
                      <Text style={{ marginLeft: 30 }}>> {item.label}</Text>
                    </View>
                  ) : null}
                  {item.subTitle ? (
                    <View>
                      <Text
                        style={{
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          marginLeft: 10
                        }}
                      >
                        {item.subTitle}
                      </Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            <View style={{ marginTop: 15 }} />
            <Text>Clasificación de gravedad</Text>
            {user.severitySelect !== '' ? (
              <Text style={{ marginLeft: 30 }}>> {user.severitySelect}</Text>
            ) : null}
          </View>
        ) : null}
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
