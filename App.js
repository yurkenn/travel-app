import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import RootStack from './navigation';

export default function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (queryClient.isFetching() === 0) {
      SplashScreen.hideAsync();
    }
  }, [queryClient.isFetching()]);

  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}
