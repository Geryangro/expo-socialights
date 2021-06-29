import React from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text } from 'react-native';
import Carousels from './src/component/Carousel';
import tailwind from 'tailwind-rn'
import Header from './src/component/Header'
import SectionSocialty from './src/component/Section/Socialty'
import SectionRatings from './src/component/Section/Ratings'
import SectionPerks from './src/component/Section/Perks'
import SectionJournal from './src/component/Section/Journal'
import useFonts from './src/utils'
import { FontsUse } from './src/style/fontuse'

export default function App() {

  const [fontsLoaded] = useFonts(FontsUse)
  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={tailwind("w-full flex-1")}>
      <Header />
      <ScrollView style={tailwind("pt-4")}>
        <Carousels />
        <TextInput style={styles.input} placeholder="Search anything" />
        <SectionSocialty />
        <SectionRatings />
        <SectionPerks />
        <SectionJournal />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    margin: 12,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    fontSize: 36,
    fontFamily: 'Proxima-Bold'
  }, 
});
