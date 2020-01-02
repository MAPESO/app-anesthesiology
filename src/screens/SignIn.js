// Packages
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from 'react-native-button';
import tinytime from 'tinytime';

// Components
import { Layout } from '../components/SignIn/Layout';
import { Label } from '../components/Form/Label';
import { FormInput } from '../components/Form/FormInput';
import FormRadioButton from '../components/Form/FormRadio';
import FormSelect from '../components/Form/FormSelect';

// Utils
import { countries } from '../lib/utils/country';
import { societys } from '../lib/utils/society';

const MessageSuccess = styled.Text`
  color: #0070f3;
  padding: 10px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
`;

const radiogroup_options = [
  { id: 0, label: 'anestesiólogo' },
  { id: 1, label: 'residente' }
];

const initialState = {
  name: '',
  lastName: '',
  email: '',
  dni: '',
  jobRole: '',
  country: '',
  society: ''
};
const yupSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  lastName: Yup.string().required('Requerido'),
  email: Yup.string()
    .email()
    .required('Requerido'),
  dni: Yup.string().required('Requerido'),
  jobRole: Yup.string().required('Requerido'),
  country: Yup.string().required('Requerido'),
  society: Yup.string().required('Requerido')
});

const SignIn = () => {
  const [successRegistry, setRegistry] = useState(false);
  return (
    <Formik
      initialValues={initialState}
      validationSchema={yupSchema}
      onSubmit={values => {
        const template = tinytime('{DD}/{MM}/{YYYY}');
        fetch('https://anestesia-dashboard.justinmark.now.sh/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            jobRole: values.jobRole.label,
            dni: values.dni,
            country: values.country,
            society: values.society,
            date: template.render(new Date())
          })
        })
          .then(() => {
            console.log('se enviaron los datos');
            setRegistry(true);
            fetch('https://anestesia-registry.now.sh/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: values.email,
                society: values.society
              })
            });
          })
          .catch(err => {
            console.log(err);
          });
      }}
    >
      {bagFormik => {
        const { handleSubmit, handleBlur, handleChange, errors } = bagFormik;
        return (
          <Layout>
            <Label>Nombre</Label>
            <FormInput
              name="name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.name}
            />
            <Label>Apellido</Label>
            <FormInput
              name="lastName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.lastName}
            />
            <Label>Email</Label>
            <FormInput
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.email}
            />
            <Label>DNI</Label>
            <FormInput
              name="dni"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.dni}
            />
            <FormRadioButton
              name="jobRole"
              options={radiogroup_options}
              horizontal={true}
              error={errors.jobRole}
            />
            <Label>País</Label>
            <FormSelect
              name="country"
              placeholder={{
                label: 'Seleccione un país...',
                value: null,
                color: '#9EA0A4'
              }}
              options={countries}
              error={errors.country}
            />
            <Label>Sociedad</Label>
            <FormSelect
              name="society"
              placeholder={{
                label: 'Seleccione una sociedad...',
                value: null,
                color: '#9EA0A4'
              }}
              options={societys}
              error={errors.society}
            />
            {successRegistry && (
              <MessageSuccess>Registro exitoso</MessageSuccess>
            )}
            <Button
              style={{ color: '#fff' }}
              containerStyle={{
                flex: 1,
                margin: 10,
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#000'
              }}
              onPress={handleSubmit}
            >
              Enviar
            </Button>
          </Layout>
        );
      }}
    </Formik>
  );
};

export default SignIn;
