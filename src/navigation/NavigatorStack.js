import { StackNavigator } from 'react-navigation';
import Home from '../containers/Home';

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});
