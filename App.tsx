import AppContextProvider from "./contexts/AppContextProvider"
import AppLayout from "./layouts/AppLayout"
import WindScreen from "./screens/WindScreen"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <WindScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
