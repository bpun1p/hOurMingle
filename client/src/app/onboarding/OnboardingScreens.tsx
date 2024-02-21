import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import CraftEventImage from '@assets/craft-event.webp';
import WelcomeImage from '@assets/welcome.webp';
import TrackTransactions from '@assets/track-transactions.webp';
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import useImage from '@components/hooks/useImage';
import Animated, { FadeInUp, FadeOutDown, SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

const onboardingSteps = [
  {
    image: WelcomeImage,
    title: 'Welcome',
    description: 'At hOurMingle, every hour deepens connections. Its more than time management—its about enriching moments together. Effortlessly plan and enjoy gatherings, cherishing every shared moment. Start your journey to unforgettable gatherings with hOurMingle.'
  },
  {
    image: CraftEventImage,
    title: 'Craft Your Perfect Event',
    description: 'Easily create and customize your events. Set dates, add details, and manage everything in a few taps. Bring your gatherings to life effortlessly.'
  },
  {
    image: TrackTransactions,
    title: 'Track your transactions',
    description: 'Effortlessly monitor event payments. Ensure transparency and efficiency by managing who has fulfilled their financial commitments, all within a single interface.'
  }
]
type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreens({ navigation }: {navigation: OnboardingScreenNavigationProp}) {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const imagesLoaded = useImage([
    WelcomeImage,
    CraftEventImage,
    TrackTransactions
  ]);

  const onContinue = () => {
    screenIndex === onboardingSteps.length - 1 ? endOnboarding() : setScreenIndex(screenIndex + 1);
  };

  const onBack = () => {
    screenIndex === 0 ? endOnboarding() : setScreenIndex(screenIndex - 1);
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    navigation.goBack();
  };
  
  if (!imagesLoaded) return null;

  const swipe = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View key={index}
            style={[
              styles.stepIndicator, 
              {backgroundColor: index === screenIndex ? '#50c878': 'grey'}
            ]} 
          />
        ))}
      </View>
      <GestureDetector gesture={swipe}>
      <View key={screenIndex} style={styles.pageContent}>
        <Animated.Image entering={FadeInUp} exiting={FadeOutDown} style={styles.image} source={data.image}/>
        <View style={styles.footer}>
          <Animated.Text style={styles.title} entering={SlideInRight.delay(200)} exiting={SlideOutLeft} >{data.title}</Animated.Text>
          <Animated.Text entering={SlideInRight.delay(200)} exiting={SlideOutLeft} style={styles.description}>
            {data.description}
          </Animated.Text>
          <View style={styles.buttonsRow}>
            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
      </GestureDetector>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  pageContent: {
    padding: 20,
    flex: 1
  },
  image:{
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 1,
    maxHeight: 350,
    maxWidth: 350,
    resizeMode: 'contain'
  },
  title: {
    color: '#000',
    fontSize: 50,
    fontFamily: 'InterBlack',
    letterSpacing: 1.3,
     marginVertical: 10,
  },
  description: {
    color: 'gray',
    fontSize: 20,
    fontFamily: 'Inter',
    lineHeight: 28,
  },
  footer: {
    marginTop: 'auto',
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  button: {
    backgroundColor: '#50c878',
    borderRadius: 50,
    alignItems: 'center',
    flex: 1
  },
  buttonText: {
    color: '#000',
    fontFamily: 'InterSemi',
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25
  },
  stepIndicatorContainer : {
    flexDirection: 'row',
    gap: 8,
    marginHorizontal: 15
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: 'grey',
    borderRadius: 10
  }
});