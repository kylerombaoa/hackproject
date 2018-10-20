import { Navigation } from 'react-native-navigation';

import InsturctionScreen from './insturctionScreen';
import HomeScreen from './tabScreen/homeScreen';
import SearchScreen from './tabScreen/searchScreen';
import ProfileScreen from './tabScreen/profileScreen';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('hack.insturctionscreen', () => InsturctionScreen);
  Navigation.registerComponent('hack.homescreen', () => HomeScreen);
  Navigation.registerComponent('hack.searchscreen', () => SearchScreen);
  Navigation.registerComponent('hack.profilescreen', () => ProfileScreen);
}