import { Platform } from "react-native"
import { AppContextProvider } from "./contexts"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import StoreTabs from "./navigation/tabs/StoreTabs"
import StoreStack from "./navigation/stacks/StoreStack"

export default function App() {
    return (
        <>
            <NavigationContainer>
                <AppContextProvider>
                    {Platform.OS === "android" ? <StoreTabs /> : <StoreStack />}
                </AppContextProvider>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    )
}
