import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, StyleSheet, Text } from 'react-native';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(4);

  const styles = StyleSheet.create({
    container: {
      width: '80%', // This controls the width of the dropdown
    },
    input: {
      fontSize: 15,
      borderColor: '#6c7697',
      borderBottomWidth: 1,
      color: '#6c7697',
      padding: 15,
      textAlign: 'center',
      flex: 1, // This ensures the input takes the full width of its container
    }
  });

  const options = [
    { label: '1 ROUND', value: 1 },
    { label: '2 ROUNDS', value: 2 },
    { label: '3 ROUNDS', value: 3 },
    { label: '4 ROUNDS', value: 4 },
    { label: '5 ROUNDS', value: 5 },
    { label: '6 ROUNDS', value: 6 },
    { label: '7 ROUNDS', value: 7 },
    { label: '8 ROUNDS', value: 8 },
  ];

  return (
    <View style={styles.container}>
      <RNPickerSelect
        items={options}
        style={{
          inputIOS: styles.input,
          inputAndroid: styles.input,
          iconContainer: {
            top: 10,
            right: 10,
          },
        }}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
        useNativeAndroidPickerStyle={false} // Disables native styling to ensure consistency
      /> 
    </View>
  );
};



export default Dropdown;