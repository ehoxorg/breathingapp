import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MainScrollView from '@/components/MainScrollView';

export default function HomeScreen() {
  return (
    <MainScrollView>
        <Image style={styles.logo}
        source={require('@/assets/images/plectrum.png')}
      />
      <ThemedView >
        <ThemedText style={styles.title}>4-7-8 Breathing</ThemedText>
      </ThemedView>
      <ThemedView >
        <ThemedText style={styles.explanation}>Inhale for 4 seconds, hold for 7 seconds and exhale for 8 seconds. 
        Relieves stress, reduces anxiety and calms the nerves.</ThemedText>
      </ThemedView>

    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily:'AsapBold',
  },
  logo: {
    alignItems: 'center',
    maxWidth:300,
    maxHeight:200,
    resizeMode:'contain',
  },
  explanation: {
    fontSize:16,
    fontFamily:'AsapRegular',
  }
});
