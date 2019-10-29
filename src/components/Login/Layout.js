import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>{children}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export { Layout };
