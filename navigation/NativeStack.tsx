import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { ConsejosScreen, LoginScreen } from "../screens"
import CameraModal from "../components/modals/CameraModal"

const Stack = createNativeStackNavigator()

const NativeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="Consejos"
                component={ConsejosScreen}
            />
            <Stack.Group screenOptions={{ presentation: "modal", animation: "slide_from_bottom" }}>
                <Stack.Screen name="CameraModal" component={CameraModal} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default NativeStack
