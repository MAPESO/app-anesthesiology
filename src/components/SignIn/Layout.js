import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
  flex: 1;
  margin-top: 30;
  padding-left: 15;
  padding-right: 15;
`;

const Layout = props => {
  const { children } = props;
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
