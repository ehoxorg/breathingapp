import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.settingsMain}>
      <ThemedText>Hellooooo</ThemedText>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  settingsMain: {
    fontFamily:'AsapBold',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
