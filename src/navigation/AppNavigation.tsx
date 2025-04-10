import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RegisteredNavigation from "./RegisteredNavigation"
import PublicNavigation from "./PublicNavigation"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    const isAuthenticated = false

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isAuthenticated ? "Registered":"Public"}>
            {isAuthenticated ? (
                <Stack.Screen component={RegisteredNavigation} name="Registered" />
            ) : (
                <Stack.Screen component={PublicNavigation} name="Public" />
            ) }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation