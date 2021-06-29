import { useState } from 'react'
import * as Font from 'expo-font'

export default function useFonts (fontMap) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap)
    setFontsLoaded(true)
  })()
  return [fontsLoaded]
}
