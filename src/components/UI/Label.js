// Packages
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 18;
  margin-bottom: 8;
  text-align: left;
`;

const Label = ({ children }) => {
  return <Title>{children}</Title>;
};

Label.propTypes = {
  children: PropTypes.string.isRequired
};

export { Label };
