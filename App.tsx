import AppContextProvider from "./contexts/AppContextProvider"
import AppLayout from "./layouts/AppLayout"
import { PaperProvider, MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper"
import PaperScreen from "./screens/PaperScreen"

const miTema: MD3Theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: "#aa0044",
        secondary: "#0044aa"
    }
}

export default function App() {
    return (
        <PaperProvider theme={miTema}>
            <AppContextProvider>
                <AppLayout>
                    <PaperScreen />
                </AppLayout>
            </AppContextProvider>
        </PaperProvider>
    )
}
