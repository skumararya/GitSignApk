import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
// import dashboard from '../app/dashboard/index';
// const Drawer = createDrawerNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawerlayout from '../app/drawer/Drawer';
import Index from '../app/index';
import Login from '../app/usermanual/login/index';
const Stack = createNativeStackNavigator(); 
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
          <Stack.Screen name="Index" component={Index} /> 
           <Stack.Screen name="Login" component={Login} />  
          <Stack.Screen name="Drawerlayout" component={Drawerlayout}/> 
      </Stack.Navigator>
       
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
