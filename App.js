import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens'

// import statusBar from "./src/components/statusBar";

// statusBar();
registerScreens();

// Start a App

Promise.all([
  Icon.getImageSource("md-home", 30),
  Icon.getImageSource("md-search", 30),
  Icon.getImageSource("md-person", 30),
]).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [{
      label: '',
      screen: 'hack.homescreen',
      icon: sources[0]
    },{
      label: '',
      screen: 'hack.searchscreen',
      icon: sources[1]
    },{
      label: '',
      screen: 'hack.profilescreen',
      icon: sources[2]
    }]
  })
  // Navigation.startSingleScreenApp({
  //   screen: {
  //     screen: 'let.WelcomeScreen',
  //     title: 'Let Reviewer Pro',
  //     navigatorButtons: {
  //       leftButtons: [
  //         {
  //           icon: sources[0],
  //           title: "Menu",
  //           id: "sideDrawerToggle"
  //         }
  //       ]
  //     }
  //   },
  //   drawer: {
  //     left: {
  //       screen: "let.DrawerMenu"
  //     }
  //   }
  // });
});