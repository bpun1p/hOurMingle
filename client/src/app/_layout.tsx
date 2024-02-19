import { Stack } from "expo-router";
import { useFonts, Pacifico_400Regular  } from '@expo-google-fonts/pacifico'
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { useEffect } from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{title: 'hOurMingle'}} />
    </Stack> 
  )
}
