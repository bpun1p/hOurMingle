import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({ navigation }: {navigation: HomeScreenNavigationProp}) {

  return (
    <SafeAreaView>
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('Onboarding')}
      />
      <Button
        title="Go to Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />   
    </SafeAreaView>
  );
}
