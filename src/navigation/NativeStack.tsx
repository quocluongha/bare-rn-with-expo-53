import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenA} from '../modules/test/screens';

const NativeStack = createNativeStackNavigator();

export const NativeStackNavigator = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="A" component={ScreenA} />
    </NativeStack.Navigator>
  );
};
