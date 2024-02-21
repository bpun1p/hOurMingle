import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}
          }}
        />
    </SafeAreaView>


  )
}

export default CalendarScreen