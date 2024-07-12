import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Link } from "expo-router";

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState(4);

  const options = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('@/assets/images/plectrum.png')}
        />
        <Text style={styles.title}>4-7-8 breathing</Text>
      </View>
      <Text style={styles.instructions}>
        Inhale for a count of <Text style={styles.bold}>4</Text>.
        Hold for a count of <Text style={styles.bold}>7</Text>. 
        Exhale for a count of <Text style={styles.bold}>8</Text>. 
      </Text>
      <Text style={styles.result}>Relieves stress, reduces anxiety and calms the nerves.</Text>
      <View style={styles.pickerContainer}>
        <View style={{borderBottomWidth: 1,borderColor: '#6c7697',}}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {options.map((option) => (
            <Picker.Item label={option.label} value={option.value} key={option.value} />
          ))}
        </Picker>
        </View>
        <Text style={{color:'#6c7697'}}>round(s)</Text>
      </View>
      <Link href={"exercise?rounds="+selectedValue} asChild>
        <TouchableOpacity onPress={() => console.log('PRESSED START')} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#f6e9c7',
    color: '#6c7697',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    color: '#6c7697',
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'AsapBold',
    fontSize: 37,
    marginTop: 10,  // Ensures the title is a bit closer to the logo
    color: '#6c7697',
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AsapItalic',
    marginTop: 20,
    marginBottom: 10,
    color: '#6c7697',
  },
  result: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'AsapItalic',
    color: '#6c7697',
  },
  pickerContainer: {
    marginTop: 100,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200, // Set the width of the container
  },
  picker: {
    height: 50,
    width: 200, // Set the width of the picker to be narrower
    color: '#6c7697',
  },
  pickerItem: {
    textAlign: 'center', // iOS text alignment
    color: '#6c7697',
    fontFamily:'AsapBold',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#6c7697',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#f6e9c7',
    fontSize: 22,
    letterSpacing: 1.5,
    fontFamily: 'AsapBold',
    textAlign: 'center',
  },
  bold: {
    fontFamily: 'AsapBold',
  },
});
