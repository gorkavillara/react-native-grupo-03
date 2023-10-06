import 'react-native-gesture-handler';

import { AppContextProvider } from "./contexts"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import StoreStack from "./navigation/stacks/StoreStack"
import StoreDrawer from './navigation/drawer/StoreDrawer';

export default function App() {
    return (
        <>
            <NavigationContainer>
                <AppContextProvider>
                    {/* <StoreStack /> */}
                    <StoreDrawer />
                </AppContextProvider>
            </NavigationContainer>
            <StatusBar style="auto" />
        </>
    )
}
