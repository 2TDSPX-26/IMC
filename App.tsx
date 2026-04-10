// https://github.com/2TDSPX-26/IMC

import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TipsScreen from './src/screens/TipsScreen';
import { ThemeProvider } from './src/theme/ThemeProvider';

export type RootStackParamList = {
  Home: undefined;
  Result: {
    name: string;
    gender: 'male' | 'female';
    weight: number;
    height: number;
  };
  Tips: {
    imc: number;
    classification: string;
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name='Result'
            component={ResultScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerBackTitle: '',
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name='Tips'
            component={TipsScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerBackTitle: '',
              headerShadowVisible: false,
              headerStyle: { backgroundColor: '#FFF5E6' }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
