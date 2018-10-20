import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens'

registerScreens();

// Start a App

Promise.all([
  Icon.getImageSource("md-home", 30),
  Icon.getImageSource("md-search", 30),
  Icon.getImageSource("md-person", 30),
]).then(sources => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'hack.hobbiesscreen', // unique ID registered with Navigation.registerScreen
      title: 'Introduction', // title of the screen as appears in the nav bar (optional)
      navigatorStyle: {navBarHidden: true}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
  })
});