import React from 'react';
import {StatusBar} from 'react-native';
import {RootNavigator} from './navigation';

import {useCachedResources} from './utils';
import {SplashScreen} from './screens';
// console.log(Constants.systemFonts);

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <SplashScreen />;
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </>
    );
  }
};

export default App;
