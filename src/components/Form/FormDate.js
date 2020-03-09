// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'react-native-propel-kit';
import { withFormikControl } from 'react-native-formik';

// Components
import { MessageError } from '../Form/MessageError';

const FormDate = ({ setFieldValue, error }) => {
  return (
    <>
      <DatePicker style={{ borderColor: 'red' }} onChange={setFieldValue} />
      {error && <MessageError>{error}</MessageError>}
    </>
  );
};

FormDate.propTypes = {
  error: PropTypes.string,
  setFieldValue: PropTypes.any
};

export default withFormikControl(FormDate);
