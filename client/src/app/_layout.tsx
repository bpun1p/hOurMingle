import { useFonts, Pacifico_400Regular  } from '@expo-google-fonts/pacifico'
import { Inter_700Bold, Inter_600SemiBold, Inter_400Regular, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CalendarScreen from './calendar/CalendarScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import OnboardingScreens from './onboarding/OnboardingScreens';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  Onboarding: undefined;
  Calendar: undefined;
};

const Stack = createStackNavigator();

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
    if(fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }  
  }, [fontsLoaded, fontError]);

  if(!fontsLoaded && !fontError) {
    return null;
  };

  return (
    <NavigationContainer independent={true}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Onboarding' component={OnboardingScreens} options={{ headerShown: false }} />
          <Stack.Screen name='Calendar' component={CalendarScreen} options={{ headerShown: false }} />
        </Stack.Navigator> 
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

