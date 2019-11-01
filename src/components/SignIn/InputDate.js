import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const InputDate = props => {
  const { showDialog, date } = props;
  return (
    <TouchableOpacity onPress={showDialog}>
      <View style={styles.datePickerBox}>
        <Text style={styles.datePickerText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  datePickerBox: {
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  },
  datePickerText: {
    marginTop: 10,
    fontSize: 14,
    borderWidth: 0,
    color: '#121212'
  }
});

InputDate.propTypes = {
  showDialog: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
};

export { InputDate };
