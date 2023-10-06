import { AppContextProvider } from "./contexts"
import { AppLayout } from "./layouts"
import { DimensionsScreen, LoginScreen } from "./screens"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                {/* <DimensionsScreen /> */}
                <LoginScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
