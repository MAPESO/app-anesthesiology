// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const SubTitle = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14
  }
});

SubTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export { SubTitle };
