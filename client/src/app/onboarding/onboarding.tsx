import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const onboardingSteps = [
  {
    image: '',
    icon: 'snowflake',
    title: 'Welcome',
    description: 'Where every hour brings us closer. hOurMingle is not just about time—its about making time meaningful. Its where planning meets pleasure, and gatherings are effortlessly organized. Here, every moment spent with others is cherished. Lets create, share, and revel in the joy of togetherness. Begin your journey to memorable events with hOurMingle.'
  },
  {
    image: '',
    icon: 'calendar-check-o',
    title: 'Craft Your Perfect Event',
    description: 'Easily create and customize your events. Set dates, add details, and manage everything in a few taps. Bring your gatherings to life effortlessly.'
  },
  {
    image: '',
    icon: 'people-arrows',
    title: 'Track your transactions',
    description: 'Effortlessly monitor event payments. Ensure transparency and efficiency by managing who has fulfilled their financial commitments, all within a single interface.'
  }
]

export default function OnboardingScreens() {
  return (
    <View>
      <Text>
        Hello
      </Text>
    </View>
  )
}