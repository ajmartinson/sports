import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// calendar
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


export default function ScheduleScreen() {
  const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key:'workout', color: 'green'};

  return (
    <View style={styles.container}>
      <CalendarList
        style={{
          width: 375
        }}

        theme={{
          textDayFontSize: 24,
          textMonthFontSize: 24,
          calendarBackground: '#ffffff'
        }}
        // Initially visible month. Default = Date()
        current={'2020-06-01'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}

        markedDates={{
          '2020-06-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2020-06-17': {marked: true},
          '2020-06-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2020-06-19': {dots: [vacation, massage, workout], selected: false, selectedColor: 'red'},
          '2020-06-25': {dots: [massage, workout]}
        }}
        markingType={'multi-dot'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '300'
  },
});
