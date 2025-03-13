import { StyleSheet, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import {useEffect,useReducer,useState} from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const reducerHook = () => {
  const [add, setAdd] = useState(0); 
  useEffect(() => { console.log('Count changed:', add)}, [add]);
  

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#201080', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#201080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">useReducer Hook</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <ThemedText>The <ThemedText type="defaultSemiBold">useEffect hook</ThemedText> an alternative to useState for managing complex state logic.</ThemedText>
      <ThemedText>When to use: When you have multiple state transitions or related pieces of state (like a mini Redux).</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#ffffff',
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
    backgroundColor: '#007bff'
  }
});

export default reducerHook;