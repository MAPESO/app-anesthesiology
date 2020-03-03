// Packages
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { View, ScrollView } from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <ScrollView>
        <View>{children}</View>
      </ScrollView>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export { Layout };
