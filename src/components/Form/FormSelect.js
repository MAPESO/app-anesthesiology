import React from 'react';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import { withFormikControl } from 'react-native-formik';

// Components
import { MessageError } from './MessageError';

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

const FormSelect = ({ placeholder, options, setFieldValue, error }) => {
  return (
    <>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={setFieldValue}
        style={{ ...styles }}
        useNativeAndroidPickerStyle={false}
      />
      {error && <MessageError>{error}</MessageError>}
    </>
  );
};

FormSelect.propTypes = {
  placeholder: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
  setFieldValue: PropTypes.any
};

export default withFormikControl(FormSelect);
