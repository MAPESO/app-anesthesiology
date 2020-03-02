// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Layout } from '../SignIn/Layout';
import { Label } from '../Form/Label';
import RNPickerSelect from 'react-native-picker-select';

// Utils
import { patients, ages } from '../../lib/utils/describingOption';

const styles = {
  inputIOS: {
    paddingLeft: 14,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  },
  inputAndroid: {
    paddingLeft: 14,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  }
};

// eslint-disable-next-line react/prop-types
const FormSelect = ({ value, options, onValueChange }) => {
  return (
    <RNPickerSelect
      placeholder={{
        label: 'Seleccione...',
        value: null,
        color: '#9EA0A4'
      }}
      value={value}
      items={options}
      onValueChange={onValueChange}
      useNativeAndroidPickerStyle={false}
      style={{ ...styles }}
    />
  );
};

const DescriptionRoute = ({ state, setState }) => {
  console.log(state.patientSelect);
  console.log(state.ageSelect);
  return (
    <Layout>
      <Label>Paciente</Label>
      <FormSelect
        value={state.patientSelect}
        options={patients}
        onValueChange={value => setState({ patientSelect: value })}
      />
      <Label>Edad</Label>
      <FormSelect
        value={state.ageSelect}
        options={ages}
        onValueChange={value => setState({ ageSelect: value })}
      />
    </Layout>
  );
};

DescriptionRoute.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.object.isRequired
};

export { DescriptionRoute };
