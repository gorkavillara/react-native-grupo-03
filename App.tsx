import { NavigationContainer } from "@react-navigation/native"
import NativeStack from "./navigation/NativeStack"
import { StatusBar } from "expo-status-bar"
import { RecoilRoot } from "recoil"

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <NativeStack />
                <StatusBar />
            </NavigationContainer>
        </RecoilRoot>
    )
}
