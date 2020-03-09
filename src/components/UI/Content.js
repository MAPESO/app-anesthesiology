// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Content = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
});

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export { Content };
