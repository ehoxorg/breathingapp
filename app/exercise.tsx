import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

const ExerciseScreen: React.FC = () => {
    const [fadeAnimReady] = useState(new Animated.Value(0));
    const [fadeAnimSteady] = useState(new Animated.Value(0));
    const [fadeAnimGo] = useState(new Animated.Value(0));

    useEffect(() => {
        // Animate "Ready"
        const timeoutReady = setTimeout(() => {
            Animated.timing(
                fadeAnimReady,
                {
                    toValue: 1,
                    duration: 500,  // Quicker animation
                    useNativeDriver: true
                }
            ).start();
        }, 300);  // Shorter delay

        // Animate "Steady"
        const timeoutSteady = setTimeout(() => {
            Animated.timing(
                fadeAnimSteady,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ).start();
        }, 1300);  // Longer delay

        // Animate "Go"
        const timeoutGo = setTimeout(() => {
            Animated.timing(
                fadeAnimGo,
                {
                    toValue: 1,
                    duration: 1500,  // Longest duration
                    useNativeDriver: true
                }
            ).start();
        }, 2300);  // Longest delay

        return () => {
            clearTimeout(timeoutReady);
            clearTimeout(timeoutSteady);
            clearTimeout(timeoutGo);
        };
    }, []);

    return (
        <View style={styles.main}>
            <Link href="" style={styles.button} asChild>
                <TouchableOpacity onPress={() => console.log("pressed exit!!!")} style={styles.button}>
                    <AntDesign name="close" size={40} color="black" />
                </TouchableOpacity>
            </Link>
            <View style={styles.instructions}>
                <Animated.Text style={[styles.exerciseTitle, { opacity: fadeAnimReady }]}>
                    Ready
                </Animated.Text>
                <Animated.Text style={[styles.exerciseAction, { opacity: fadeAnimSteady }]}>
                    Steady
                </Animated.Text>
                <Animated.Text style={[styles.exerciseCountdown, { opacity: fadeAnimGo }]}>
                    Go
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    exerciseTitle: {
        fontSize: 30,
        fontWeight: '500',
        fontFamily: 'AsapRegular',
        textAlign: 'center',
    },
    exerciseAction: {
        fontSize: 50,
        fontWeight: '700',
        fontFamily: 'AsapRegular',
        textAlign: 'center',
    },
    exerciseCountdown: {
        fontSize: 230,
        fontWeight: '900',
        fontFamily: 'AsapRegular',
        textAlign: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: '10%',
        marginRight: '5%',
    },
    main: {
        flex: 1,
    },
    instructions: {
        flex: 6,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
});

export default ExerciseScreen;
