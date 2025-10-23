import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductList from '../screens/productos/ProductList';

const Stack = createNativeStackNavigator();

const Router = () => (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen
                name='Products'
                component={ProductList}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Router;