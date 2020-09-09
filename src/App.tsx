import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {useCachedResources} from './utils';
import {RootNavigator} from './navigation';
import {SplashScreen} from './screens';
import store from './redux';
// console.log(Constants.systemFonts);

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <SplashScreen />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </Provider>
    );
  }
};

export default App;
