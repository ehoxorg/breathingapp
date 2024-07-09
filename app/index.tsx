import { View, Image, StyleSheet, Text} from 'react-native';
import HomeView from '@/components/HomeView';
import CustomDropdownView from '@/components/CustomDropdown';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {
  return (
    <HomeView>
        <Image style={styles.logo}
        source={require('@/assets/images/plectrum.png')}
        />
        <View >
          <Text style={styles.title} >4-7-8 Breathing</Text>
        </View>
        <View >
          <Text style={styles.instructions}>Inhale for a count of <Text style={styles.bold}>4</Text>.
          Hold for a count of <Text style={styles.bold}>7</Text>. 
          Exhale for a count of <Text style={styles.bold}>8</Text>. 
          </Text>
          <Text style={styles.result}>Relieves stress, reduces anxiety and calms the nerves.</Text>
        </View>
        <CustomDropdownView></CustomDropdownView>
        <CustomButton title='Start' onPress={() => console.log('PRESSED START')} />
      </HomeView>
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
