import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
	Promise.all([
        Icon.getImageSource("md-home", 30),
        Icon.getImageSource("md-search", 30),
        Icon.getImageSource("md-person", 30),
      ]).then(sources => {
        Navigation.startTabBasedApp({
          tabs: [{
            label: '',
            title: 'modo',
            screen: 'hack.homescreen',
            icon: sources[0]
          },{
            label: '',
            title: 'modo',
            screen: 'hack.searchscreen',
            icon: sources[1]
          },{
            label: '',
            title: 'modo',
            screen: 'hack.profilescreen',
            icon: sources[2]
          }]
        })
      });
};

export default startTabs;