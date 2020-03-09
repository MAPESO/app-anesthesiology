import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const MessageError = ({ children }) => {
  return <Text style={styles.messageError}>{children}</Text>;
};

const styles = StyleSheet.create({
  messageError: {
    fontSize: 13,
    color: '#ff3333',
    marginBottom: 10
  }
});

MessageError.propTypes = {
  children: PropTypes.string.isRequired
};

export { MessageError };
