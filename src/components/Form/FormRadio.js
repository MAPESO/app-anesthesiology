import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'react-native-radio-button-group';
import { withFormikControl } from 'react-native-formik';

// Components
import { MessageError } from './MessageError';

const FormRadioButton = ({ options, setFieldValue, error, horizontal }) => {
  return (
    <>
      <RadioButton
        circleStyle={{ fillColor: '#000' }}
        options={options}
        horizontal={horizontal}
        onChange={setFieldValue}
      />
      {error && <MessageError>{error}</MessageError>}
    </>
  );
};

FormRadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  horizontal: PropTypes.bool.isRequired,
  error: PropTypes.string,
  setFieldValue: PropTypes.any
};

export default withFormikControl(FormRadioButton);
