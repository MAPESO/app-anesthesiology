// Pakages
import React from 'react';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

const styles = {
  inputIOS: {
    paddingLeft: 14,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  },
  inputAndroid: {
    paddingLeft: 14,
    height: 40,
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 20
  }
};

const Select = ({ value, options, onValueChange }) => {
  return (
    <RNPickerSelect
      placeholder={{
        label: 'Seleccione...',
        value: '',
        color: '#9EA0A4'
      }}
      value={value}
      items={options}
      onValueChange={selectValue => onValueChange(selectValue)}
      useNativeAndroidPickerStyle={false}
      style={{ ...styles }}
    />
  );
};

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array.isRequired,
  onValueChange: PropTypes.func
};

export { Select };
