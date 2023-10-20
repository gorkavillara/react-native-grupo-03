import { AppContextProvider } from "./contexts"
import { RecoilRoot } from "recoil"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import StoreStack from "./navigation/stacks/StoreStack"
import { usePermissions } from "./hooks/usePermissions"

export default function App() {
    usePermissions()
    return (
        <RecoilRoot>
            <NavigationContainer>
                <AppContextProvider>
                    <StoreStack />
                </AppContextProvider>
            </NavigationContainer>
            <StatusBar style="auto" />
        </RecoilRoot>
    )
}
