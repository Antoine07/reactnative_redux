import {createStackNavigator, createAppContainer} from 'react-navigation';

import  HOME  from '../components/Home';
import  create  from '../components/Create';

const MainNavigator = createStackNavigator({
  home : { screen: HOME },
  create : { screen: create },
  },
  {
    initialRouteName: 'home'
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;