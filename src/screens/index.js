import { Navigation } from 'react-native-navigation';

import IntroductionScreen from './introductionScreen';
import HomeScreen from './tabScreen/homeScreen';
import SearchScreen from './tabScreen/searchScreen';
import ProfileScreen from './tabScreen/profileScreen';
import SignupScreen from './SignupScreen';
import PersonalScreen from './ProfileScreen/personalInfo';
import LocationScreen from './ProfileScreen/location';
import HobbiesScreen from './ProfileScreen/hobbies';
import BlankScreen from './blank';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('hack.introductionscreen', () => IntroductionScreen);
  Navigation.registerComponent('hack.homescreen', () => HomeScreen);
  Navigation.registerComponent('hack.searchscreen', () => SearchScreen);
  Navigation.registerComponent('hack.signupscreen', () => SignupScreen);
  Navigation.registerComponent('hack.profilescreen', () => ProfileScreen);
  Navigation.registerComponent('hack.personalscreen', () => PersonalScreen);
  Navigation.registerComponent('hack.locationscreen', () => LocationScreen);
  Navigation.registerComponent('hack.hobbiesscreen', () => HobbiesScreen);
  Navigation.registerComponent('hack.blankscreen', () => BlankScreen);
}