import React from 'react';
import { Formik } from 'formik';

import { Layout } from '../SignIn/Layout';
import { Label } from '../Form/Label';
import { FormInput } from '../Form/FormInput';
import FormRadioButton from '../Form/FormRadio';

const intialState = {
  accident: '',
  factor: '',
  learnedLessons: '',
  manual: ''
};

const radiogroup_options = [
  { id: 0, label: 'Si' },
  { id: 1, label: 'No' }
];

const Reflection = () => {
  return (
    <Formik initialValues={intialState}>
      {bagFormik => {
        const { values, handleChange, handleBlur } = bagFormik;
        console.log(values);
        return (
          <Layout>
            <Label>¿Crees que este accidente podría haberse evitado?</Label>
            <FormRadioButton
              name="accident"
              options={radiogroup_options}
              horizontal={false}
            />
            <Label>Factores contribuyentes</Label>
            <FormInput
              name="factor"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Label>Lecciones aprendidas</Label>
            <FormInput
              name="learnedLessons"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Label>
              Ante este evento, ¿utilizó el equipo algún manual de emergencia?
              (ayudas cognitivas, lista de verificación)
            </Label>
            <FormRadioButton
              name="manual"
              options={radiogroup_options}
              horizontal={false}
            />
          </Layout>
        );
      }}
    </Formik>
  );
};

export { Reflection };
