import { AppContextProvider } from "./contexts"
import { RecoilRoot } from "recoil"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import StoreStack from "./navigation/stacks/StoreStack"

export default function App() {
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
