import React from 'react';
import { Notifications } from 'expo';
import { Alert } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation"
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';

import registerForNotifications from './src/services/push_notifications';
import store from './src/store';
import AuthScreen from './src/screens/AuthScreen'
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeskScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default class App extends React.Component {

  // componentDidMount() {
  //   registerForNotifications();
  //   Notifications.addListener((notification) => {
  //     const text = notification.data.text;
  //     const origin = notificaion.data.origin;

  //     if (origin === 'receieved' && text) {


  //       Alert.alert(
  //         'New Push Notification',
  //         text,
  //         [{ text: 'OK.' }]
  //       );
  //     }
  //   });
  // }

  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen, navigationOptions: { tabBarVisible: false } },
      auth: { screen: AuthScreen, navigationOptions: { tabBarVisible: false } },
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeskScreen },
          review: {
            screen: createStackNavigator({
              review: ReviewScreen,
              settings: SettingsScreen
            }),
            navigationOptions: {
              tabBarLabel: 'Review',
              tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />

            }
          }
        }
          , {
            tabBarPosition: 'bottom',
            tabBarOptions: {
              labelStyle: {
                fontSize: 12,
              }
            }
          }
        ), navigationOptions: { tabBarVisible: false }
      }
    });

    const App = createAppContainer(MainNavigator);

    return (
      <Provider store={store}>
        <App />
      </Provider>

    );
  }
}
