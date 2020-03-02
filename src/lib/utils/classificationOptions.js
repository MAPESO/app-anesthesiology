const SECTIONS = [
  {
    id: 0,
    title: 'Manejo de las vías aéreas',
    data: [
      { label: 'Aspiración', value: false },
      {
        label: 'Tubo con manguito',
        subTitle: 'Fuego de las vías respiratorias',
        value: false
      },
      { label: 'Tubo sin manguito', value: false },
      { label: 'Fi02 > 30%', value: false },
      { label: 'Esperado', subTitle: 'No intubar', value: false },
      { label: 'Inesperado', value: false },
      { label: 'Esperado', subTitle: 'Intubación Difícil', value: false },
      { label: 'Inesperado', value: false },
      { label: 'Esperado', subTitle: 'Sin ventilación', value: false },
      { label: 'Inesperado', value: false },
      { label: 'Esperado', subTitle: 'Ventilación difícil', value: false },
      { label: 'Inesperado', value: false },
      { label: 'Dificultad de posicionamiento ML', value: false },
      { label: 'Lesiones Dentales', value: false },
      { label: 'Epistaxe', value: false },
      { label: 'Intubación esofágica', value: false },
      { label: 'Uso de dispositivos de emergencia', value: false },
      {
        label: 'Droga: Succinilcolina',
        subTitle: 'Laringoespasmo - tratado con',
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
        label: 'Difícil',
        subTitle: 'Extubación',
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
        label: 'Esperado',
        subTitle: 'Detención respiratoria',
        value: false
      },
      {
        label: 'Inesperado',
        value: false
      }
    ]
  },
  {
    id: 1,
    title: 'Pulmonar/Respiratorio',
    data: [
      { label: 'Apnea', value: false },
      { label: 'Aspiración', value: false },
      { label: 'Atelectasia', value: false },
      { label: 'Broncoespasmo', value: false },
      { label: 'Espontáneo', subTitle: 'Hemotórax', value: false },
      { label: 'Latrogénico', value: false },
      { label: 'Presión negativa edema pulmonar', value: false },
      { label: 'Espontáneo', subTitle: 'Neumotórax', value: false },
      { label: 'Latrogénico', value: false },
      { label: 'Hipertensión pulmonar', value: false },
      { label: 'Hipertensión', value: false },
      { label: 'Hipoxia', value: false }
    ]
  },
  {
    id: 2,
    title: 'Complicaciones anestésicas',
    data: [
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
    ]
  },
  {
    id: 3,
    title: 'Cardiaco',
    data: [
      { label: 'Seno', subTitle: 'Bradicardia', value: false },
      { label: 'Otro ritmo', value: false },
      { label: 'Paro cardíaco (asistolia)', value: false },
      { label: 'Insuficiencia cardíaca', value: false },
      { label: 'Edema pulmonar cardíaco', value: false },
      { label: 'Asistolia', subTitle: 'Arritmia', value: false },
      { label: 'Bradicardia', value: false },
      { label: 'Trastorno de la conducción', value: false },
      { label: 'Ventricular', value: false },
      { label: 'Supraventricular', value: false },
      { label: 'Hipertensión', value: false },
      { label: 'Hipotensión', value: false },
      { label: 'Infarto de miocardio', value: false },
      { label: 'Isquemia miocárdica', value: false },
      { label: 'Seno', subTitle: 'Taquicardia', value: false },
      { label: 'Otro ritmo', value: false },
      { label: 'Taponamiento cardíaco', value: false }
    ]
  },
  {
    id: 4,
    title: 'Neurológico',
    data: [
      { label: 'Visión alterada o pérdida de visión', value: false },
      { label: 'Despertar intra-operatório', value: false },
      { label: 'Coma', value: false },
      { label: 'AVC', value: false },
      { label: 'Dolor de cabeza', value: false },
      { label: 'Lesión neurológica', value: false },
      { label: 'Déficit neurológico', value: false },
      { label: 'Ataque', value: false },
      { label: 'Nuevos problemas de comportamiento', value: false }
    ]
  },
  {
    id: 5,
    title: 'Renal',
    data: [{ label: 'Insuficiencia renal', value: false }]
  },
  {
    id: 6,
    title: 'Inmunológico',
    data: [
      { label: 'Anafilaxia', value: false },
      { label: 'Ronchas', value: false },
      { label: 'Erupción cutánea', value: false }
    ]
  },
  {
    id: 6,
    title: 'Medicación',
    data: [
      { label: 'Erupción', subTitle: 'Reacción alérgica', value: false },
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
    ]
  },
  {
    id: 7,
    title: 'Sangre',
    data: [
      {
        label: 'Masivo (mayor de 1 volumen de sangre)',
        subTitle: 'Pérdida de sangre',
        value: false
      },
      {
        label: 'No esperado',
        value: false
      },
      {
        label: 'Atraso',
        subTitle: 'Banco de sangre',
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
      {
        label: '<30mg',
        subTitle: 'Hipoglicemia',
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
    ]
  },
  {
    id: 8,
    title: 'Anestesia regional',
    data: [
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
    ]
  },
  {
    id: 9,
    title: 'Complicaciones vasculares',
    data: [
      { label: 'Acceso venoso', value: true },
      { label: 'Acceso trombosis', subTitle: 'Línea arterial', value: false },
      { label: 'Hematoma', value: false },
      {
        label: 'Punción arterial involuntaria',
        subTitle: 'Acceso central',
        value: false
      },
      { label: 'Trombosis', value: false },
      { label: 'Arritmia que requiere tratamiento', value: false },
      { label: 'Hematoma', value: false },
      { label: 'Daño al catéter', value: false },
      { label: 'TVP', value: false },
      { label: 'Venoso', subTitle: 'Embolia', value: false },
      { label: 'Arterial', value: false },
      { label: 'Lesión vascular', value: false },
      { label: 'Neumotórax', value: false }
    ]
  },
  {
    id: 10,
    title: 'Mortalidad',
    data: [{ label: 'Muerte (excluir paciente ASA 6)', value: false }]
  },
  {
    id: 11,
    title: 'Administrativo',
    data: [
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
    ]
  },
  {
    id: 12,
    title: 'Documentación',
    data: [
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
    ]
  },
  {
    id: 13,
    title: 'Equipo',
    data: [
      { label: 'Equipo (mal funcionamiento)', value: false },
      { label: 'Equipo (no disponible)', value: false },
      { label: 'Equipo (error del usuario)', value: false },
      { label: 'Equipo (selección incorrecta)', value: false },
      { label: 'Peligro eléctrico', value: false },
      { label: 'Daño eléctrico', value: false }
    ]
  },
  {
    id: 14,
    title: 'Infrestructura/Sistema',
    data: [
      { label: 'Paciente(retraso)', value: false },
      { label: 'Asistente técnico (retraso/no disponible)', value: false },
      { label: 'Cama de piso (retraso/no disponible)', value: false },
      { label: 'CTI (retraso/ no disponible)', value: false },
      { label: 'Anestesia de malestar', value: false },
      { label: 'Distracción/fatiga/prisa', value: false },
      { label: 'Presión para proceder', value: false },
      { label: 'Técnica/procedimiento desconocido', value: false },
      { label: 'Comunicacion', value: false },
      { label: 'Inadecuado', subTitle: 'Supervisión', value: false },
      { label: 'No existente', value: false },
      { label: 'Insatisfactorio', subTitle: 'Ambiente', value: false },
      { label: 'No familiar', value: false },
      { label: 'Paciente incorrecto', value: false }
    ]
  },
  {
    id: 15,
    title: 'Otro',
    data: [{ label: 'Otro', value: false }]
  }
];

export { SECTIONS };
