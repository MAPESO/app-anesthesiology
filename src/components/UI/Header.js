// Packages
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex: 1;
  height: 30;
  background-color: #333;
  padding-top: 5;
  padding-left: 5;
`;

const Text = styled.Text`
  color: #fff;
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Text>{title}</Text>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export { Header };
