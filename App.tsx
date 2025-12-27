/**
 * Snoor - Smart Snoring Tracker
 * Main App Component
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import SleepSessionScreen from './src/screens/SleepSessionScreen';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#6200EE',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ title: 'Snoor' }}
            />
            <Stack.Screen 
              name="SleepSession" 
              component={SleepSessionScreen}
              options={{ title: 'Sleep Session' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
