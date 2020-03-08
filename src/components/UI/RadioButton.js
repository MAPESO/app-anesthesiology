// Packages
import React from 'react';
import RadioGroup from 'react-native-radio-button-group';
import PropTypes from 'prop-types';

const RadioButton = ({ options, onChange }) => {
  return (
    <RadioGroup
      horizontal={false}
      circleStyle={{ fillColor: '#000' }}
      options={options}
      onChange={option => {
        onChange(option);
      }}
    />
  );
};

RadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export { RadioButton };
