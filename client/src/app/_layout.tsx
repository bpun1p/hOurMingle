import { Stack } from "expo-router";
import { useFonts, Pacifico_400Regular  } from '@expo-google-fonts/pacifico'
import { Inter_700Bold, Inter_600SemiBold, Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Onboarding from './onboarding/onboarding';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ fontsLoaded, fontError ] = useFonts({
    Pacifico: Pacifico_400Regular,
    InterBlack: Inter_900Black,
    InterBold: Inter_700Bold,
    InterSemi: Inter_600SemiBold,
    Inter: Inter_400Regular
  })

  useEffect(() => {
    //if fonts are loaded or font error; remove splash screen and use default font
    if(fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }  
  }, [fontsLoaded, fontError]);

  if(!fontsLoaded && !fontError) {
    return null;
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }}/>
      </Stack> 
    </GestureHandlerRootView>

    // <GestureHandlerRootView style={{flex: 1}}>
    //   <Stack.Navigator>
    //     <Stack.Screen name='onboarding/onboarding' component={Onboarding } options={{ headerShown: false }} />
    //   </Stack.Navigator> 
    // </GestureHandlerRootView>
  )
}
