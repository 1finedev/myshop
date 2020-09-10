import {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux';

export const useCachedResources = () => {
  const dispatch = useDispatch();
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();
        // Load fonts
        await Font.loadAsync({
          'simple-line-icons': require('../../node_modules/react-native-vector-icons/Fonts/SimpleLineIcons.ttf'),
        });

        const authUser = await AsyncStorage.getItem('user');

        if (authUser) {
          dispatch(setUser({user: JSON.parse(authUser)}));
        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
