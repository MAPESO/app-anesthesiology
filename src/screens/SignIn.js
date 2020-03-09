// Packages
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Button from 'react-native-button';
import tinytime from 'tinytime';

// Components
import { Layout } from '../components/SignIn/Layout';
import { Label } from '../components/UI/Label';
import { FormInput } from '../components/Form/FormInput';
import FormRadioButton from '../components/Form/FormRadio';
import FormSelect from '../components/Form/FormSelect';
import FormDate from '../components/Form/FormDate';

// Utils
import { countries } from '../lib/utils/country';
import { societys } from '../lib/utils/society';

const radiogroup_options = [
  { id: 0, label: 'anestesiólogo' },
  { id: 1, label: 'residente' }
];

const radiogroup_options2 = [
  { id: 0, label: 'masculino' },
  { id: 1, label: 'femenino' }
];

const initialState = {
  name: '',
  lastName: '',
  birthday: '',
  gender: '',
  email: '',
  jobRole: '',
  country: '',
  city: '',
  society: ''
};
const yupSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  lastName: Yup.string().required('Requerido'),
  birthday: Yup.string().required('Ingrese una fecha de nacimiento'),
  email: Yup.string()
    .email()
    .required('Requerido'),
  gender: Yup.string().required('Requerido'),
  jobRole: Yup.string().required('Requerido'),
  country: Yup.string().required('Requerido'),
  city: Yup.string().required('Requerido'),
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
            <Label>Fecha de Nacimiento</Label>
            <FormDate name="birthday" error={errors.birthday} />
            <Label>Email</Label>
            <FormInput
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.email}
            />
            <Label>Teléfono</Label>
            <Label>Categoría</Label>
            <FormRadioButton
              name="jobRole"
              options={radiogroup_options}
              horizontal={true}
              error={errors.jobRole}
            />
            <Label>Genero</Label>
            <FormRadioButton
              name="gender"
              options={radiogroup_options2}
              horizontal={true}
              error={errors.gender}
            />
            <Label>País</Label>
            <FormSelect
              name="country"
              options={countries}
              error={errors.country}
            />
            <Label>Ciudad</Label>
            <FormInput
              name="city"
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.city}
            />
            <Label>Sociedad</Label>
            <FormSelect
              name="society"
              options={societys}
              error={errors.society}
            />
            {successRegistry && (
              <Text style={styles.messageSucces}>Registro exitoso</Text>
            )}
            <Button
              style={{ color: '#fff' }}
              containerStyle={styles.btContainer}
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

const styles = StyleSheet.create({
  messageSucces: {
    color: '#0070f3',
    padding: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700'
  },
  btContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#000'
  }
});

export default SignIn;
