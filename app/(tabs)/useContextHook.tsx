import { StyleSheet, Image, Platform, Text, TouchableOpacity, View ,Button} from 'react-native';
import {useContext, createContext} from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { create } from 'react-test-renderer';

const ThemeContext = createContext('light');
const useContextHook = () => {
  
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
        <ThemedText type="title">useContext Hook</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <ThemedText>The <ThemedText type="defaultSemiBold">useContext hook</ThemedText> is used to perform side effects in a function component. It is accepting two arguements and in result doesn't return anything.</ThemedText>
      
      <ThemeContext.Provider value="dark">
        <ThemedText type='subtitle'>Current Active Theme: <ThemeComponent/></ThemedText>
      </ThemeContext.Provider>
    </ParallaxScrollView>
  );
};
const ThemeComponent = () => {
  const theme = useContext(ThemeContext);

  return (
      <ThemedText type='subtitle' style={{color: '#007bff'}}>{theme}</ThemedText>
  )
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

export default useContextHook;