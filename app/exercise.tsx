import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, Link } from 'expo-router';

const ExerciseScreen: React.FC = () => {
    const { rounds } = useLocalSearchParams<{ rounds?: string }>();
    const [titleText, setTitleText] = useState('Ready');
    const [actionText, setActionText] = useState('Steady');
    const [countdownText, setCountdownText] = useState('Go');
    const initialCountdown = { 'Inhale': 4, 'Hold': 7, 'Exhale': 8, 'Total': 19 };
    const [countdown, setCountdown] = useState({ ...initialCountdown });
    const [currentRound, setCurrentRound] = useState(1);
    const [currentPhase, setCurrentPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
    const [timer, setTimer] = useState<number>(initialCountdown['Inhale']);

    const [fadeAnimReady] = useState(new Animated.Value(0));
    const [fadeAnimSteady] = useState(new Animated.Value(0));
    const [fadeAnimGo] = useState(new Animated.Value(0));

    // Animation function
    const startAnimation = (
        animatedValue: Animated.Value,
        delay: number,
        duration: number,
        onComplete?: () => void
    ): NodeJS.Timeout => {
        return setTimeout(() => {
            Animated.timing(
                animatedValue,
                {
                    toValue: 1,
                    duration,
                    useNativeDriver: true
                }
            ).start(() => onComplete && onComplete());
        }, delay);
    };

    useEffect(() => {
        const timeoutReady = startAnimation(fadeAnimReady, 300, 500);
        const timeoutSteady = startAnimation(fadeAnimSteady, 1300, 1000);
        const timeoutGo = startAnimation(fadeAnimGo, 2300, 1500, afterAnimationsComplete);
        
        return () => {
            clearTimeout(timeoutReady);
            clearTimeout(timeoutSteady);
            clearTimeout(timeoutGo);
        };
    }, [fadeAnimReady, fadeAnimSteady, fadeAnimGo]);

    function afterAnimationsComplete() {
        console.log('All animations completed!');
        doTimer();
        // additional logic as necessary
    }

    async function doTimer() {
        
        let roundsNum = rounds == undefined ? 1 : +rounds;
        for (let currentRound = 1; currentRound <= roundsNum; currentRound++) {
            setTitleText('Round '+currentRound+' of '+rounds);
            for (let i = 0; i <= initialCountdown.Total; i++) {
                await delay(1000);
                console.log(i);   
            }
        }
    }

    function delay(delay: number) {
        return new Promise(r => {
            setTimeout(r, delay);
        })
    }

    console.log('You selected: ' + rounds + ' rounds');

    return (
        <View style={styles.main}>
            <Link href="" style={styles.button} asChild>
                <TouchableOpacity onPress={() => console.log("pressed exit!!!")} style={styles.button}>
                    <AntDesign name="close" size={40} color="black" />
                </TouchableOpacity>
            </Link>
            <View style={styles.instructions}>
                <Animated.Text style={[styles.exerciseTitle, { opacity: fadeAnimReady }]}>
                    {titleText}
                </Animated.Text>
                <Animated.Text style={[styles.exerciseAction, { opacity: fadeAnimSteady }]}>
                    {actionText}
                </Animated.Text>
                <Animated.Text style={[styles.exerciseCountdown, { opacity: fadeAnimGo }]}>
                    {countdownText}
                </Animated.Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    exerciseTitle: {
        fontSize: 30,
        fontFamily: 'AsapRegular',
        textAlign: 'center',
    },
    exerciseAction: {
        fontSize: 50,
        fontFamily: 'AsapMedium',
        textAlign: 'center',
    },
    exerciseCountdown: {
        fontSize: 230,
        fontFamily: 'AsapBold',
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
