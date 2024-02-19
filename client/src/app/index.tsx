import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Link href='/onboarding/onboarding' asChild>
        <Button title='onboarding page'/>
      </Link>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
};