import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Link } from "expo-router";

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState(4);

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
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('@/assets/images/plectrum.png')}
        />
        <Text style={styles.title}>4-7-8 Breathing</Text>
      </View>
      <Text style={styles.instructions}>
        Inhale for a count of <Text style={styles.bold}>4</Text>.
        Hold for a count of <Text style={styles.bold}>7</Text>. 
        Exhale for a count of <Text style={styles.bold}>8</Text>. 
      </Text>
      <Text style={styles.result}>Relieves stress, reduces anxiety and calms the nerves.</Text>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'AsapItalic',
    marginTop: 20,
    marginBottom: 10,
  },
  result: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'AsapItalic',
    marginBottom: 20,
  },
  input: {
    fontSize: 15,
    borderColor: '#6c7697',
    borderBottomWidth: 1,
    color: '#6c7697',
    padding: 15,
    textAlign: 'center',
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
    width: '70%',
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
