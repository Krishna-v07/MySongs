import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import spalcesceen from '../../components/splaceScreen/splacescreens';
import deshboard from '../../components/webView/index';


const Stack = createStackNavigator();

const Stacknavigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="splacesceen">
                <Stack.Screen name="splacesceen" component={spalcesceen} />
                <Stack.Screen name="deshboard" component={deshboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacknavigations;