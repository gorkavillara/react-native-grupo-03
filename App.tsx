import AppContextProvider from "./contexts/AppContextProvider"
import AppLayout from "./layouts/AppLayout"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
            </AppLayout>
        </AppContextProvider>
    )
}
