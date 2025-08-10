import React from 'react'
import { View } from 'react-native-ui-lib'
import WelcomeScreen from '../features/public/welcome/screens/WelcomeScreen'
import { ScreenRoutes } from '../constants/routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const RegisteredNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ScreenRoutes.public.welcome}>
            <Stack.Screen component={WelcomeScreen} name={ScreenRoutes.public.welcome} />
        </Stack.Navigator>
    )
}

export default RegisteredNavigation
