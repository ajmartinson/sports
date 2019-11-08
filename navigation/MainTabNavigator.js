import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FilesScreen from '../screens/FilesScreen';
import LiftScreen from '../screens/LiftScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';


const tabNavigator = createBottomTabNavigator({
    Schedule: ScheduleScreen,
    Lifts: LiftScreen,
    Messages: MessagesScreen,
    Files: FilesScreen,
  });

  tabNavigator.path = '';

  export default tabNavigator;
