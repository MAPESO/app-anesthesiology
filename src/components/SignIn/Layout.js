import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const Layout = props => {
  const { children } = props;
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
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15
  }
});

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export { Layout };
