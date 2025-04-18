import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigator} from './NativeStack';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigator />
    </NavigationContainer>
  );
};
