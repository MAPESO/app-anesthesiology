// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Content = ({ children }) => {
  return <View style={styles.contentContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
});

Content.propTypes = {
  children: PropTypes.array.isRequired
};

export { Content };
