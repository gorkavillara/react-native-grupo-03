import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Product } from "../../models"
import {
    BuscaPokemon,
    Contador,
    Details,
    Home,
    Store,
    CameraScreen,
    LogIn,
    MapsScreen,
    NotificationsScreen,
    ContactsScreen
} from "../../screens"
import { useUser } from "../../hooks/useUser"

export type StackScreensTypeLoggedIn = {
    Home: undefined
    Store: undefined
    Details: { product: Product }
    Contador: undefined
    BuscaPokemon: undefined
    CameraScreen: undefined
    MapsScreen: undefined
    NotificationsScreen: undefined
    ContactsScreen: undefined
}
export type StackScreensTypeLoggedOut = {
    Login: undefined
}

const StackLoggedIn = createNativeStackNavigator<StackScreensTypeLoggedIn>()
const StackLoggedOut = createNativeStackNavigator<StackScreensTypeLoggedOut>()

const StoreStack = () => {
    const { isLoggedIn, isLoggedInRecoil } = useUser()
    return isLoggedInRecoil ? (
        <StackLoggedIn.Navigator initialRouteName="Home">
            <StackLoggedIn.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Mi aplicación",
                    headerShown: false
                }}
            />
            <StackLoggedIn.Screen
                name="Store"
                component={Store}
                options={{
                    animation: "slide_from_bottom"
                }}
            />
            <StackLoggedIn.Screen name="Details" component={Details} />
            <StackLoggedIn.Screen name="Contador" component={Contador} />
            <StackLoggedIn.Screen
                name="CameraScreen"
                options={{ headerShown: false }}
                component={CameraScreen}
            />
            <StackLoggedIn.Screen
                name="MapsScreen"
                options={{ headerShown: false }}
                component={MapsScreen}
            />
            <StackLoggedIn.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
            />
            <StackLoggedIn.Screen
                name="ContactsScreen"
                component={ContactsScreen}
            />
            <StackLoggedIn.Screen
                name="BuscaPokemon"
                component={BuscaPokemon}
            />
        </StackLoggedIn.Navigator>
    ) : (
        <StackLoggedOut.Navigator initialRouteName="Login">
            <StackLoggedOut.Screen
                name="Login"
                component={LogIn}
                options={{ headerShown: false }}
            />
        </StackLoggedOut.Navigator>
    )
}

export default StoreStack
