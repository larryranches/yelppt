import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import NavigatorStack from './navigation/NavigatorStack';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorStack />
      </Provider>
    );
  }
}

export default App;
