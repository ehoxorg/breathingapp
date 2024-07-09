import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from "expo-router";

// Props interface
interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

// Button component using TypeScript
const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <Link href="exercise"  asChild>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

// Styles
const styles = StyleSheet.create({
  button: {
    width:'70%',
    backgroundColor: '#6c7697',
    paddingVertical: 16,
    paddingHorizontal: 32,
    margin: 4,
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: '#f6e9c7',
    fontSize: 22, // This is a static value; adjust as needed
    letterSpacing: 1.5,
    fontFamily: 'AsapBold',
    textAlign: 'center',
  }
});

export default CustomButton;
