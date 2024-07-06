import { Image, StyleSheet, Text, Platform } from 'react-native';
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
        <Text style={styles.title} >4-7-8 Breathing</Text>
      </ThemedView>
      <ThemedView >
        <ThemedText style={styles.instructions}>Inhale for a count of <Text style={styles.bold}>4</Text>.
        Hold for a count of <Text style={styles.bold}>7</Text>. 
        Exhale for a count of <Text style={styles.bold}>8</Text>. 
        </ThemedText>
        <Text style={styles.result}>Relieves stress, reduces anxiety and calms the nerves.</Text>
      </ThemedView>

    </MainScrollView>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontFamily:'AsapBold',
  },
  logo: {
    alignItems: 'flex-start',
    maxWidth:100,
    maxHeight:80,
    resizeMode:'contain',
  },
  title: {
    fontFamily:'AsapBold',
    // resizeMode:'contain',
    fontSize:37,
  },
  instructions: {
    textAlign:'center',
    fontSize:20,
    fontFamily:'AsapItalic',
  },
  result: {
    marginTop:10,
    textAlign:'center',
    fontSize:8,
  }
});
