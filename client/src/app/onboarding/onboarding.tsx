import { Text, View, StyleSheet, SafeAreaView, Pressable, Image } from "react-native";
import { Stack, router } from "expo-router";
import { useState } from "react";
import CraftEventImage from '@assets/craft-event.webp';
import WelcomeImage from '@assets/welcome.webp';
import TrackTransactions from '@assets/track-transactions.webp';

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

export default function OnboardingScreens() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex]

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1
    if(isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <Image style={styles.image} source={data.image}/>
        <View style={styles.footer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>
            {data.description}
          </Text>
          <View style={styles.buttonsRow}>
            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
  }
});