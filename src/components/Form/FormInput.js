// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';

// Components
import { MessageError } from './MessageError';

const FormInput = ({ name, error, handleChange, handleBlur }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
      {error && <MessageError>{error}</MessageError>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 10,
    borderColor: '#000'
  }
});

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export { FormInput };
