import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home, Store } from "../../screens"
import Icon from "react-native-vector-icons/Ionicons"

export type DrawerScreensType = {
    Home: undefined
    Store: undefined
}

const Drawer = createDrawerNavigator<DrawerScreensType>()

export default function StoreDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Store"
                component={Store}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "cart" : "cart-outline"}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}
