import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import SignIn from './screens/SignIn';
import Anonymous from './screens/Anonymous';
import Confidential from './screens/Confidential';
import TestCase from './screens/TestCase';

const config = {
  initialRouteName: 'Home'
};

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Login
    },
    SignIn: {
      screen: SignIn
    },
    Anonymous: {
      screen: Anonymous
    },
    Confidential: {
      screen: Confidential
    },
    TestCase: {
      screen: TestCase
    }
  },
  config
);

const AppContainer = createAppContainer(MainStack);

const App = () => {
  return <AppContainer />;
};

export default App;
