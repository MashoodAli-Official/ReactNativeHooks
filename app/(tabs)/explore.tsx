import { StyleSheet, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import {useEffect,useState} from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const TabTwoScreen = () => {
  const [add, setAdd] = useState(0); 
  useEffect(() => { console.log('Count changed:', add)}, [add]);
  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">useEffect Hook</ThemedText>
      </ThemedView>
      <ThemedText>The <ThemedText type="defaultSemiBold">useEffect hook</ThemedText> is used to perform side effects in a function component. It is accepting two arguements and in result doesn't return anything.</ThemedText>
      <ThemedText><ThemedText type="defaultSemiBold">useEffect</ThemedText> doesn't store data itself, so we use <ThemedText type="defaultSemiBold">useState</ThemedText> to store the data (add) and <ThemedText type="defaultSemiBold">useEffect</ThemedText> reacts to changes in that data.</ThemedText>
      <View style={{alignItems: 'center'}}>
        <Image source={require('@/assets/images/useEffect-Code.png')} style={{height: 110, resizeMode:'contain'}}/>
      </View>
      <Text style={{fontSize: 40, textAlign: 'center', marginHorizontal: 90, paddingVertical: 10, borderRadius:10, backgroundColor:'#007bff', color: 'white'}}>{add}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom:20}}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setAdd(Math.max(0, add - 1))}>
          <Text style={{fontSize: 40, color: 'white'}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setAdd(add + 1)}>
        <Text style={{fontSize: 40, color: 'white'}}>+</Text>
        </TouchableOpacity>
      </View>
      <ThemedText>⦿ We create a counter variable add with an initial value of 0.</ThemedText>
      <ThemedText>⦿ We set up a listener that says: "Whenever the value of add changes, log a message to the console saying 'Count changed: ' followed by the new value of add."</ThemedText>
      <ThemedText>⦿ So, every time the value of add changes, the code inside useEffect will run and log a message to the console.</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonStyle:{
    alignItems:'center',
    height: 50,
    width: 50,
    borderRadius: 14,
    backgroundColor:'#007bff'
  }
});

export default TabTwoScreen;