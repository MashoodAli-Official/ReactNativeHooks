import { StyleSheet, Image, Platform, Text, TouchableOpacity, View, Button } from 'react-native';
import {useEffect,useReducer,useState} from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count:(Math.max(state.count - 1, 0)) };
    default:
      return state;
  }
};
const reducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

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

      <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'decrement' })} />
      </View>
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