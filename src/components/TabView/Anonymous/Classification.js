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
import { severityRating } from '../../../lib/utils/classificationOptions';

const section_1 = [
  // Manejo de las vías aéreas
  { label: 'Aspiración', value: false },
  { subTitle: 'Fuego de las vías respiratorias' },
  {
    label: 'Tubo con manguito',
    value: false
  },
  { label: 'Tubo sin manguito', value: false },
  { label: 'Fi02 > 30%', value: false },
  { subTitle: 'No intubar' },
  { label: 'Esperado', value: false },
  { label: 'Inesperado', value: false },
  { subTitle: 'Intubación Difícil' },
  { label: 'Esperado', value: false },
  { label: 'Inesperado', value: false },
  { subTitle: 'Sin ventilación' },
  { label: 'Esperado', value: false },
  { label: 'Inesperado', value: false },
  { subTitle: 'Ventilación difícil' },
  { label: 'Esperado', value: false },
  { label: 'Inesperado', value: false },
  { label: 'Dificultad de posicionamiento ML', value: false },
  { label: 'Lesiones Dentales', value: false },
  { label: 'Epistaxe', value: false },
  { label: 'Intubación esofágica', value: false },
  { label: 'Uso de dispositivos de emergencia', value: false },
  { subTitle: 'Laringoespasmo - tratado con' },
  {
    label: 'Droga: Succinilcolina',
    value: false
  },
  {
    label: 'Droga: Otro relajante',
    value: false
  },
  {
    label: 'Droga: Otra clase',
    value: false
  },
  {
    label: 'Presión positiva',
    value: false
  },
  {
    label: 'Reintubation',
    value: false
  },
  {
    label: 'Post extubación estridor',
    value: false
  },
  {
    label: 'Estenosis subglótica',
    value: false
  },
  {
    label: 'Lesión de tejidos blandos',
    value: false
  },
  {
    subTitle: 'Extubación'
  },
  {
    label: 'Difícil',
    value: false
  },
  {
    label: 'No planeado',
    value: false
  },
  {
    label: 'Re-intubación requerida',
    value: false
  },
  {
    label: 'Extubación no planificada',
    value: false
  },
  {
    subTitle: 'Detención respiratoria'
  },
  {
    label: 'Esperado',
    value: false
  },
  {
    label: 'Inesperado',
    value: false
  }
];

const section_2 = [
  //  title: 'Pulmonar/Respiratorio',
  { label: 'Apnea', value: false },
  { label: 'Aspiración', value: false },
  { label: 'Atelectasia', value: false },
  { label: 'Broncoespasmo', value: false },
  { subTitle: 'Hemotórax' },
  { label: 'Espontáneo', value: false },
  { label: 'Latrogénico', value: false },
  { label: 'Presión negativa edema pulmonar', value: false },
  { subTitle: 'Neumotórax' },
  { label: 'Espontáneo', value: false },
  { label: 'Latrogénico', value: false },
  { label: 'Hipertensión pulmonar', value: false },
  { label: 'Hipertensión', value: false },
  { label: 'Hipoxia', value: false }
];

const section_3 = [
  //  title: 'Complicaciones anestésicas'
  { label: 'Despertar intra-operatorio', value: false },
  { label: 'Reacción alérgica', value: false },
  { label: 'Error en la técnica quirúrgica', value: false },
  { label: 'Caer', value: false },
  { label: 'Hipertermia maligna', value: false },
  { label: 'Lesión de posicionamiento', value: false },
  { label: 'Náuseas post-operatorias', value: false },
  { label: 'Vomitos post-operatorios', value: false },
  { label: 'Úlcera por presión', value: false },
  { label: 'Despertar prolongado', value: false },
  { label: 'Hipertermia no planificada', value: false },
  { label: 'Hipotermia no planificada', value: false }
];

const section_4 = [
  // title: 'Cardiaco'
  { subTitle: 'Bradicardia' },
  { label: 'Seno', value: false },
  { label: 'Otro ritmo', value: false },
  { label: 'Paro cardíaco (asistolia)', value: false },
  { label: 'Insuficiencia cardíaca', value: false },
  { label: 'Edema pulmonar cardíaco', value: false },
  { subTitle: 'Arritmia' },
  { label: 'Asistolia', value: false },
  { label: 'Bradicardia', value: false },
  { label: 'Trastorno de la conducción', value: false },
  { label: 'Ventricular', value: false },
  { label: 'Supraventricular', value: false },
  { label: 'Hipertensión', value: false },
  { label: 'Hipotensión', value: false },
  { label: 'Infarto de miocardio', value: false },
  { label: 'Isquemia miocárdica', value: false },
  { subTitle: 'Taquicardia' },
  { label: 'Seno', value: false },
  { label: 'Otro ritmo', value: false },
  { label: 'Taponamiento cardíaco', value: false }
];

const section_5 = [
  // title: 'Neurológico'
  { label: 'Visión alterada o pérdida de visión', value: false },
  { label: 'Despertar intra-operatório', value: false },
  { label: 'Coma', value: false },
  { label: 'AVC', value: false },
  { label: 'Dolor de cabeza', value: false },
  { label: 'Lesión neurológica', value: false },
  { label: 'Déficit neurológico', value: false },
  { label: 'Ataque', value: false },
  { label: 'Nuevos problemas de comportamiento', value: false }
];

const section_6 = [
  // title: 'Renal'
  { label: 'Insuficiencia renal', value: false }
];

const section_7 = [
  // title: 'Inmunológico'
  { label: 'Anafilaxia', value: false },
  { label: 'Ronchas', value: false },
  { label: 'Erupción cutánea', value: false }
];

const section_8 = [
  // title: 'Medicación'
  { subTitle: 'Reacción alérgica' },
  { label: 'Erupción', value: false },
  { label: 'Ronchas', value: false },
  { label: 'Anafilaxia', value: false },
  { label: 'sintomas de abstinencia', value: false },
  { label: 'Filtro no utilizado', value: false },
  { label: 'Uso inadecuado de corticosteroides', value: false },
  { label: 'Infiltración', value: false },
  { label: 'Medicamentos administrados muy rápido', value: false },
  { label: 'Stock de medicamentos inadecuado', value: false },
  { label: 'Dilución con medicación incompatible', value: false },
  { label: 'Diluyente incorrecto', value: false },
  { label: 'Dosis incorrecta (casi administrada)', value: false },
  { label: 'Dosis incorrecta (sobredosis)', value: false },
  { label: 'Dosis incorrecta (subdosis)', value: false },
  { label: 'Medicamento incorrecto (casi administrado)', value: false },
  { label: 'Medicamento incorrecto (contraindicado)', value: false },
  { label: 'Medicamento incorrecto (administrado)', value: false },
  { label: 'Droga incorrecta (identificada erróneamente)', value: false },
  { label: 'Medicamento incorrecto (interacción potencial)', value: false },
  {
    label: 'Medicamento incorrecto (intercambio de jeringas)',
    value: false
  },
  {
    label: 'Medicamento incorrecto (botella/ampolla incorrecta)',
    value: false
  },
  {
    label: 'Frecuencia incorrecta',
    value: false
  },
  {
    label: 'Camino equivocado',
    value: false
  },
  {
    label: 'Uso antagonista no planificado',
    value: false
  },
  {
    label: 'Uso de antagonistas sedantes/narcóticos',
    value: false
  }
];

const section_9 = [
  // title: 'Sangre'
  { subTitle: 'Pérdida de sangre' },
  {
    label: 'Masivo (mayor de 1 volumen de sangre)',
    value: false
  },
  {
    label: 'No esperado',
    value: false
  },
  { subTitle: 'Banco de sangre' },
  {
    label: 'Atraso',
    value: false
  },
  {
    label: 'Engaño',
    value: false
  },
  {
    label: 'Reacción de transfusión',
    value: false
  },
  {
    label: 'Sangre específica no disponible',
    value: false
  },
  {
    label: 'Coagulopatía incontrolable',
    value: false
  },
  {
    label: 'Transfusión inesperada',
    value: false
  },
  { subTitle: 'Hipoglicemia' },
  {
    label: '<30mg',
    value: false
  },
  {
    label: '<45mg',
    value: false
  },
  {
    label: '<60mg',
    value: false
  },
  {
    label: 'Hiperglucemia',
    value: false
  },
  {
    label: 'Acidosis',
    value: false
  },
  {
    label: 'Hiperlactemia',
    value: false
  },
  {
    label: 'Hipercalemia',
    value: false
  }
];

const section_10 = [
  // title: 'Anestesia regional'
  { label: 'Abandonar bloqueo', value: false },
  { label: 'Absceso', value: false },
  { label: 'Reacción adversa al fármaco', value: false },
  { label: 'Complicación del catéter', value: false },
  { label: 'Punción dura', value: false },
  { label: 'Bloqueo motor excesivo', value: false },
  { label: 'Fallo de bloqueo', value: false },
  { label: 'Hematoma', value: false },
  { label: 'Anestesia espinal alta', value: false },
  { label: 'Control inadecuado del dolor', value: false },
  { label: 'Inyección intravascular', value: false },
  { label: 'Complicaciones neurológicas', value: false },
  { label: 'Déficit neurológico postoperatorio', value: false },
  { label: 'Bloqueo extendido (más de 12 horas)', value: false },
  { label: 'Picazón', value: false },
  { label: 'Complicación respiratoria', value: false },
  { label: 'Bloqueo unilateral no intencional', value: false },
  { label: 'Punción vascular', value: false },
  {
    label: 'Imposibilidad de revertir el bloqueo neuromuscular',
    value: false
  },
  {
    label: 'Toxicidad sistémica anestésica local',
    value: false
  }
];

const section_11 = [
  // title: 'Complicaciones vasculares'
  { label: 'Acceso venoso', value: false },
  { subTitle: 'Línea arterial' },
  { label: 'Acceso trombosis', value: false },
  { label: 'Hematoma', value: false },
  { subTitle: 'Acceso central' },
  {
    label: 'Punción arterial involuntaria',
    value: false
  },
  { label: 'Trombosis', value: false },
  { label: 'Arritmia que requiere tratamiento', value: false },
  { label: 'Hematoma', value: false },
  { label: 'Daño al catéter', value: false },
  { label: 'TVP', value: false },
  { subTitle: 'Embolia' },
  { label: 'Venoso', value: false },
  { label: 'Arterial', value: false },
  { label: 'Lesión vascular', value: false },
  { label: 'Neumotórax', value: false }
];

const section_12 = [
  // title: 'Mortalidad'
  { label: 'Muerte (excluir paciente ASA 6)', value: false }
];

const section_13 = [
  // title: 'Administrativo'
  {
    label: 'Suspensión de cirugía en el día',
    value: false
  },
  {
    label: 'Hospitalización no planificada en la UTI',
    value: false
  },
  {
    label: 'Hospitalización de un paciente externo no planificado',
    value: false
  },
  {
    label: 'Cirugía de localización incorrecta',
    value: false
  },
  {
    label: 'Cirugía incorrecta del paciente',
    value: false
  },
  {
    label: 'Procedimiento equivocado',
    value: false
  }
];

const section_14 = [
  // title: 'Documentación'
  { label: 'Evaluación clínica (inadecuada/incorrecta)', value: false },
  { label: 'Documentación (retraso de disponibilidad)', value: false },
  { label: 'Documentación (faltante o ilegible)', value: false },
  { label: 'Paciente incorrecto', value: false },
  { label: 'Informe operativo modificado (caso electivo)', value: false },
  { label: 'Informe operativo alterado (emergencia)', value: false },
  { label: 'Programa de cirugía incorrecto', value: false },
  { label: 'Evaluación de riesgos (inadecuada/incorrecta)', value: false },
  { label: 'Resultados del examen no disponibles', value: false },
  { label: 'Pruebas inadecuadas realizadas', value: false }
];

const section_15 = [
  // title: 'Equipo'
  { label: 'Equipo (mal funcionamiento)', value: false },
  { label: 'Equipo (no disponible)', value: false },
  { label: 'Equipo (error del usuario)', value: false },
  { label: 'Equipo (selección incorrecta)', value: false },
  { label: 'Peligro eléctrico', value: false },
  { label: 'Daño eléctrico', value: false }
];

const section_16 = [
  // title: 'Infrestructura/Sistema'
  { label: 'Paciente(retraso)', value: false },
  { label: 'Asistente técnico (retraso/no disponible)', value: false },
  { label: 'Cama de piso (retraso/no disponible)', value: false },
  { label: 'CTI (retraso/ no disponible)', value: false },
  { label: 'Anestesia de malestar', value: false },
  { label: 'Distracción/fatiga/prisa', value: false },
  { label: 'Presión para proceder', value: false },
  { label: 'Técnica/procedimiento desconocido', value: false },
  { label: 'Comunicacion', value: false },
  { subTitle: 'Supervisión' },
  { label: 'Inadecuado', value: false },
  { label: 'No existente', value: false },
  { subTitle: 'Ambiente' },
  { label: 'Insatisfactorio', value: false },
  { label: 'No familiar', value: false },
  { label: 'Paciente incorrecto', value: false }
];

const section_17 = [
  // title: 'Otro'
  { label: 'Otro', value: false }
];

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
