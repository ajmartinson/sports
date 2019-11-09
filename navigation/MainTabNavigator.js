import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FilesScreen from '../screens/FilesScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const tabNavigator = createBottomTabNavigator({
    Schedule: ScheduleScreen,
    Workouts: WorkoutScreen,
    Messages: MessagesScreen,
    Files: FilesScreen,
  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({tintColor}) => {
        const { routeName } = navigation.state;
        let IconComponent;
        let iconName;

        switch (routeName){
          case 'Schedule':
          iconName = 'calendar';
          IconComponent = FontAwesome;
          break;

          case 'Workouts':
          iconName = 'run';
          IconComponent = MaterialCommunityIcons;
          break;

          case 'Messages':
          iconName = 'message-circle';
          IconComponent = Feather;
          break;

          case 'Files':
          iconName = 'files-o';
          IconComponent = FontAwesome;
          break;
      }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

  tabNavigator.path = '';

  export default tabNavigator;
