import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const ExerciseScreen: React.FC = () => {
    return (
        <View style={styles.main}>
            <Link href=""  style={styles.button} asChild>
                <TouchableOpacity onPress={() => console.log("pressed exit!!!")} style={styles.button}>
                <AntDesign name="close" size={40} color="black" />
                </TouchableOpacity>
            </Link>
            <View style={styles.instructions}>
                <Text>Ready</Text>
                <Text>Steady</Text>
                <Text>Go</Text>
            </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
    button: {
        flex:1,
        alignItems: 'flex-end',
        marginTop: '10%',
        marginRight: '5%',
    }, 
    main: {
        flex:1,
    },
    instructions: {
        flex: 6,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
  });

  export default ExerciseScreen;