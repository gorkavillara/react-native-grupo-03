import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Store } from "../../screens"
import Icon from "react-native-vector-icons/Ionicons"

export type TabScreensType = {
    Home: undefined
    Store: undefined
}

const Tab = createBottomTabNavigator<TabScreensType>()

export default function StoreTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name={focused ? "cart" : "cart-outline"}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
