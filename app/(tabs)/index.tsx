import { Image, StyleSheet, Platform, TouchableOpacity,Text,View } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const HomeScreen = () => {
  const [add, setAdd] = useState(0);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Hooks in React Native</ThemedText>
        <ThemedText>
         There are several <ThemedText type="defaultSemiBold">Hooks</ThemedText> available in React but in React Native we are using few of them that are using normally in the React Native mobile app.
        </ThemedText>
        <ThemedText type="defaultSemiBold">01: useState</ThemedText>
        <ThemedText type="defaultSemiBold">02: useEffect</ThemedText>
        <ThemedText type="defaultSemiBold">03: useReducer</ThemedText>
        <ThemedText type="defaultSemiBold">04: useRef</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">useState: The Basics</ThemedText>
        <ThemedText>
          The <ThemedText type="defaultSemiBold">useState</ThemedText> takes a single arguement which is the initial state value and returns an array with two values.
          The first value is the current state value and the second value is a function that allows you to update the state.
        </ThemedText>
      </ThemedView>
      <View style={{alignItems: 'center'}}>
        <Image source={require('@/assets/images/useState-code.png')} style={{height: 170, resizeMode:'contain'}}/>
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
      <ThemedText type='subtitle'>When to use</ThemedText>
      <ThemedText type="default">When you need to track and update something like a counter, text input, or toggle.</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonStyle:{
    alignItems:'center',
    height: 50,
    width: 50,
    borderRadius: 14,
    backgroundColor:'#007bff'
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default HomeScreen;