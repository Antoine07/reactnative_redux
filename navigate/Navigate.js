import {createStackNavigator, createAppContainer} from 'react-navigation';

import  Home  from '../components/Home';
import  Create  from '../components/Create';

const MainNavigator = createStackNavigator({
  home : { screen: Home },
  create : { screen: Create },
  },
  {
    initialRouteName: 'home'
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;