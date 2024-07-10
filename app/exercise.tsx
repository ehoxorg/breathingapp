import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, View, StyleSheet, Animated, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, Link } from 'expo-router';

const ExerciseScreen: React.FC = () => {
    const { rounds } = useLocalSearchParams<{ rounds?: string }>();
    // console.log('You selected: ' + rounds + ' rounds');
    const [titleText, setTitleText] = useState('Ready');
    const [actionText, setActionText] = useState('Steady');
    const [countdownText, setCountdownText] = useState('Go');
    const [exerciseComplete, setExerciseComplete] = useState(false);
    const initialCountdown = { 'Inhale': 4, 'Hold': 7, 'Exhale': 8, 'Total': 19 };
    const continueRunning = useRef(true); // Ref to manage the running state

    const [fadeAnimReady] = useState(new Animated.Value(0));
    const [fadeAnimSteady] = useState(new Animated.Value(0));
    const [fadeAnimGo] = useState(new Animated.Value(0));
    const translateY = useRef(new Animated.Value(300)).current; // Adjust this value based on your screen height


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

    const readyPhase = () => {
        const timeoutReady = startAnimation(fadeAnimReady, 300, 500);
        const timeoutSteady = startAnimation(fadeAnimSteady, 1300, 1000);
        const timeoutGo = startAnimation(fadeAnimGo, 2300, 1500, afterAnimationsComplete);
        
        return () => {
            clearTimeout(timeoutReady);
            clearTimeout(timeoutSteady);
            clearTimeout(timeoutGo);
        };
    }

    function afterAnimationsComplete() {
        console.log('All animations completed!');
        doTimer(() => continueRunning.current);
    }

    async function doTimer(shouldContinue: () => boolean) {
        
        let roundsNum = rounds == undefined ? 1 : +rounds;
        for (let currentRound = 1; currentRound <= roundsNum && shouldContinue(); currentRound++) {
            setTitleText('Round '+currentRound+' of '+rounds);
            const countdown = {...initialCountdown};
            for (let currentCount = 1; currentCount <= initialCountdown.Inhale+initialCountdown.Hold+initialCountdown.Exhale && shouldContinue(); currentCount++) {
                console.log('CurrentCount: '+currentCount);
                if (currentCount >= 1 && currentCount <= initialCountdown.Inhale) {
                    setActionText('Inhale');
                    setCountdownText(''+countdown.Inhale);
                    countdown.Inhale = countdown.Inhale-1;
                } else if (currentCount > initialCountdown.Inhale && currentCount <= initialCountdown.Inhale+initialCountdown.Hold) {
                    setActionText('Hold');
                    setCountdownText(''+countdown.Hold);
                    countdown.Hold = countdown.Hold-1;
                } else if (currentCount > initialCountdown.Inhale+initialCountdown.Hold && currentCount <= initialCountdown.Inhale+initialCountdown.Hold+initialCountdown.Exhale) {
                    setActionText('Exhale');
                    setCountdownText(''+countdown.Exhale);
                    countdown.Exhale = countdown.Exhale-1;
                }
                fadeAnimGo.setValue(0); // Directly set the value without an animation
                startAnimation(fadeAnimGo, 0, 500);
                console.log('Inhale='+countdown.Inhale);
                console.log('Hold='+countdown.Hold);
                console.log('Exhale='+countdown.Exhale);
                await delay(1000);
                if (!shouldContinue()) break; // Break if cancellation is signaled
            }
        }
        setExerciseComplete(true);
        continueRunning.current = false; 
    }
    

    function delay(delay: number) {
        return new Promise(r => {
            setTimeout(r, delay);
        })
    }

    useEffect(() => {
        if (exerciseComplete) {
            Animated.timing(translateY, {
                toValue: 0, // Move to the top of the screen
                duration: 500, // Animation speed
                useNativeDriver: true, // This is required for performance
            }).start();
        }
    }, [exerciseComplete, translateY]);

    useEffect(() => {
        readyPhase();
        // setExerciseComplete(true);
        // Cleanup function to stop the timer when component unmounts
        return () => {
          continueRunning.current = false;
          console.log('Cleanup called, timer stopped.');
        };
      }, []); // Empty dependency array ensures this runs only on mount and unmount
    


      return (
        <View style={styles.main}>
            {exerciseComplete === false ? (
                <>
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
                </>
            ) : (
                <Animated.View style={[styles.ending, { transform: [{ translateY }] }]}>
                    <Animated.Text style={[styles.endingText]}>
                        Exercise complete! {/* Ensure this is set to "Exercise complete" or use state to manage text */}
                    </Animated.Text>
                    <Link href="" style={styles.closeButton} asChild>
                        <TouchableOpacity onPress={() => console.log("pressed exit!!!")}>
                            <Text style={styles.closeButtonText}>Back to home</Text>
                        </TouchableOpacity>
                    </Link>
                </Animated.View>
            )}
        </View>
    );
    
};

const styles = StyleSheet.create({
    exerciseTitle: {
        fontSize: 15,
        fontFamily: 'AsapRegular',
        textAlign: 'center',
    },
    exerciseAction: {
        fontSize: 70,
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
    },
    ending: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    endingText: {
        fontSize: 24, // Adjust size as necessary
        fontFamily: 'AsapBold',
        textAlign: 'center',
        marginBottom: 20, // Adds some space between the text and the button
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6c7697',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        width: '70%', // Adjust width as necessary
        alignSelf: 'center', // Ensures it centers in the container
    },
    closeButtonText: {
        color: '#f6e9c7',
        fontSize: 22,
        letterSpacing: 1.5,
        fontFamily: 'AsapBold',
        textAlign: 'center',
    },
    
});

export default ExerciseScreen;
