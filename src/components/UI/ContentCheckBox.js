// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const ContentCheckBox = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#EAEAEA'
  }
});

ContentCheckBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export { ContentCheckBox };
