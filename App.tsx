import { View } from "react-native"
import AppContextProvider from "./contexts/AppContextProvider"
import SwitchDarkMode from "./components/common/SwitchDarkMode"
import AppLayout from "./layouts/AppLayout"
import ContadorConContexto from "./screens/ContadorConContexto"
import ContadorIndividual from "./screens/ContadorIndividual"
import ContadorConHook from "./screens/ContadorConHook"
import RickMorty from "./screens/RickMorty/RickMortyMejorado"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <RickMorty />
            </AppLayout>
        </AppContextProvider>
    )
}
