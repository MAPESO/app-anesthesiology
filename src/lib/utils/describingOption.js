const patients = [
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Femenino', value: 'Femenino' },
  {
    label: 'Ningún paciente involucrado',
    value: 'Ningún paciente involucrado'
  },
  {
    label: 'Múltiples pacientes involucrados',
    value: 'Múltiples pacientes involucrados'
  }
];

const ages = [
  { label: 'Menos de 28 días', value: 'Menos de 28 días' },
  { label: 'Menos de 1 año', value: 'Menos de 1 años' },
  { label: '1 a 17 años', value: '1 a 17 años' },
  { label: '18 a 34 años', value: '18 a 34 años' },
  { label: '35 a 49 años', value: '35 a 49 años' },
  { label: '50 a 64 años', value: '50 a 64 años' },
  { label: '65 a 79 años', value: '65 a 79 años' },
  { label: '80 años o más', value: '80 años o más' }
];

const imc = [
  { label: 'Bajo de peso (IMC < 18,5)', value: 'Bajo de peso (IMC < 18,5)' },
  { label: 'Peso ideal (IMC 18,5 - 25)', value: 'Peso ideal (IMC 18,5 - 25)' },
  { label: 'Sobrepeso (IMC > 25)', value: 'Sobrepeso (IMC > 25)' },
  { label: 'Obeso (IMC > 30)', value: 'Obeso (IMC > 30)' },
  { label: 'Obeso Morbido (IMC > 40)', value: 'Obeso Morbido (IMC > 40)' }
];

const asa = [
  { label: 'I', value: 'I' },
  { label: 'I E', value: 'I E' },
  { label: 'II', value: 'II' },
  { label: 'II E', value: 'II E' },
  { label: 'III', value: 'III' },
  { label: 'III E', value: 'III E' },
  { label: 'IV', value: 'IV' },
  { label: 'IV E', value: 'IV E' },
  { label: 'V', value: 'V' },
  { label: 'V E', value: 'V E' },
  { label: 'VI', value: 'VI' }
];

const locations = [
  { label: 'Quirófano', value: 'Quirófano' },
  { label: 'Sala De Procedimientos', value: 'Sala De Procedimientos' },
  { label: 'Centro Obstétrico', value: 'Centro Obstétrico' },
  {
    label: 'Centro De Cirugía Ambulatoria',
    value: 'Centro De Cirugía Ambulatoria'
  },
  {
    label: 'Clínica De Evaluación Pre-Anestésica',
    value: 'Clínica De Evaluación Pre-Anestésica'
  },
  {
    label: 'Sala De Admisión Pre-Operatoria',
    value: 'Sala De Admisión Pre-Operatoria'
  },
  {
    label: 'Sala De Recuperación Post-Anestésica',
    value: 'Sala De Recuperación Post-Anestésica'
  },
  { label: 'Sala', value: 'Sala' },
  { label: 'UTI', value: 'UTI' },
  { label: 'Fuera Del Hospital', value: 'Fuera Del Hospital' },
  { label: 'Otros', value: 'Otros' },
  { label: 'Desconocido', value: 'Desconocido' }
];

const time = [
  {
    label: 'Día (6:00 am - 16:00 pm)',
    value: 'Día (6:00 am - 16:00 pm)'
  },
  {
    label: 'Tarde (16:00 pm - 22:00 pm)',
    value: 'Tarde (16:00 pm - 22:00 pm)'
  },
  {
    label: 'Noche (22:00 pm - 6:00 am)',
    value: 'Noche (22:00 pm - 6:00 am)'
  }
];

const doctor = [
  { label: 'Anestesiólogo', value: 'Anestesiólogo' },
  { label: 'Residente', value: 'Residente' },
  { label: 'Anestesista Auxiliar', value: 'Anestesista Auxiliar' },
  { label: 'Otro', value: 'Otro' }
];

const other = [
  { label: 'Anestesiólogo', value: 'Anestesiólogo' },
  { label: 'Residente', value: 'Residente' },
  { label: 'Anestesista Auxiliar', value: 'Anestesista Auxiliar' },
  { label: 'Enfermería', value: 'Enfermería' },
  { label: 'Otro', value: 'Otro' }
];

const typeProblem = [
  { label: 'Cirurgia general', value: 'Cirurgia general' },
  { label: 'Cirugía cardiotorácica', value: 'Cirugía cardiotorácica' },
  { label: 'Cirugía vascular', value: 'Cirugía vascular' },
  { label: 'Cirugía ortopédica', value: 'Cirugía ortopédica' },
  { label: 'Cirugía de cabeza y cuello', value: 'Cirugía de cabeza y cuello' },
  { label: 'Maxilofacial', value: 'Maxilofacial' },
  { label: 'Cirugía plástica', value: 'Cirugía plástica' },
  { label: 'Otorrinolaringología', value: 'Otorrinolaringología' },
  { label: 'Neurocirugía', value: 'Neurocirugía' },
  { label: 'Oftalmologia', value: 'Oftalmologia' },
  { label: 'Trasplante', value: 'Trasplante' },
  { label: 'Cirugía de trauma', value: 'Cirugía de trauma' },
  {
    label: 'Cirugía obstétrica/ginecológica',
    value: 'Cirugía obstétrica/ginecológica'
  },
  { label: 'Gastrointestinal', value: 'Gastrointestinal' },
  { label: 'Cirugía urológica', value: 'Cirugía urológica' },
  {
    label: 'Radiología intervencionista',
    value: 'Radiología intervencionista'
  },
  { label: 'Foto', value: 'Foto' },
  { label: 'Solo Anestesia', value: 'Solo Anestesia' },
  { label: 'Otro', value: 'Otro' },
  { label: 'Desconocido', value: 'Desconocido' }
];

export {
  patients,
  ages,
  imc,
  asa,
  locations,
  time,
  doctor,
  other,
  typeProblem
};
