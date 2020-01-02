import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 13;
  color: #ff3333;
  margin-bottom: 10;
`;

const MessageError = ({ children }) => {
  return <Title>{children}</Title>;
};

MessageError.propTypes = {
  children: PropTypes.string.isRequired
};

export { MessageError };
