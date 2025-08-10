import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ScreenRoutes } from '../constants/routes'
import WelcomeScreen from '../features/public/welcome/screens/WelcomeScreen'
import LoginScreen from '../features/public/auth/screens/LoginScreen'
import HomeScreen from '../features/registered/home/screens/HomeScreen'

const Stack = createNativeStackNavigator()

const PublicNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ScreenRoutes.public.welcome}>
            <Stack.Screen component={HomeScreen} name={ScreenRoutes.public.welcome} />
        </Stack.Navigator>
    )
}

export default PublicNavigation
