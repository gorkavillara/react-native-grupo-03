import { AppContextProvider } from "./contexts"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import StoreStack from "./navigation/stacks/StoreStack"

export default function App() {
    return (
        <>
            <NavigationContainer>
                <AppContextProvider>
                    <StoreStack />
                </AppContextProvider>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    )
}
