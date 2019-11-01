import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BackdropProvider, ActionSheetProvider } from 'react-native-propel-kit';

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
    SignIn: SignIn,
    Anonymous: Anonymous,
    Confidential: Confidential,
    TestCase: TestCase
  },
  config
);

const AppContainer = createAppContainer(MainStack);

const App = () => {
  return (
    <BackdropProvider>
      <ActionSheetProvider>
        <AppContainer />
      </ActionSheetProvider>
    </BackdropProvider>
  );
};

export default App;
