import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

// Components
import { MessageError } from './MessageError';

const Input = styled.TextInput`
  padding-left: 15;
  height: 40;
  border-color: #000;
  border-width: 0.5;
  border-radius: 4;
  margin-bottom: 10;
`;

const FormInput = ({ name, error, handleChange, handleBlur }) => {
  return (
    <>
      <Input onChangeText={handleChange(name)} onBlur={handleBlur(name)} />
      {error && <MessageError>{error}</MessageError>}
    </>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired
};

export { FormInput };
