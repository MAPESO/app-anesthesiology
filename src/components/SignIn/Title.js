import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'left'
  }
});

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export { Title };
