/**
 * @format
 */
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'RCTRootView cancelTouches', // https://github.com/kmagiera/react-native-gesture-handler/issues/746
  'Warning: DatePickerAndroid', // will be fixed with https://github.com/mmazzarolo/react-native-modal-datetime-picker/pull/262
  'Warning: DatePickerIOS' // will be fixed with https://github.com/mmazzarolo/react-native-modal-datetime-picker/pull/262
]);

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
