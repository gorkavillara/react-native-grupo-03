import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Product } from "../../models"
import { BuscaPokemon, Contador, Details, Home, Store } from "../../screens"

export type StackScreensType = {
    Home: undefined
    Store: undefined
    Details: { product: Product }
    Contador: undefined
    BuscaPokemon: undefined
}

const Stack = createNativeStackNavigator<StackScreensType>()

const StoreStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Mi aplicación",
                    // headerLeft: () => <Text>Izquierda</Text>,
                    // headerRight: () => <Text>Derecha</Text>
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Store"
                component={Store}
                options={{
                    animation: "slide_from_bottom"
                }}
            />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Contador" component={Contador} />
            <Stack.Screen name="BuscaPokemon" component={BuscaPokemon} />
        </Stack.Navigator>
    )
}

export default StoreStack
