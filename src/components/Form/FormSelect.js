import React from 'react';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { withFormikControl } from 'react-native-formik';
import { StyleSheet } from 'react-native';

// Components
import { MessageError } from './MessageError';

const FormSelect = ({ options, setFieldValue, error }) => {
  return (
    <>
      <RNPickerSelect
        placeholder={{
          label: 'Seleccione...',
          value: '',
          color: '#9EA0A4'
        }}
        items={options}
        onValueChange={setFieldValue}
        style={{ ...styles }}
        useNativeAndroidPickerStyle={false}
      />
      {error && <MessageError>{error}</MessageError>}
    </>
  );
};

const styles = StyleSheet.create({
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
});

FormSelect.propTypes = {
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
  setFieldValue: PropTypes.any
};

export default withFormikControl(FormSelect);
