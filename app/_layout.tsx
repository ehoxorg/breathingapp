import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';



import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    AsapRegular: require('../assets/fonts/Asap-Regular.otf'),
    AsapBold: require('../assets/fonts/Asap-Bold.otf'),
    AsapItalic: require('../assets/fonts/Asap-Italic.otf'),
    AsapMedium: require('../assets/fonts/Asap-Medium.otf'),
    AsapSymbol: require('../assets/fonts/Asap-Symbol.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="exercise" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
