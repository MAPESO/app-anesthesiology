// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    height: 30,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor: '#333'
  },
  title: {
    color: '#fff'
  }
});

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export { Header };
