import { AppContextProvider } from "./contexts"
import { AppLayout } from "./layouts"
import { TasksScreen } from "./screens"

export default function App() {
    return (
        <AppContextProvider>
            <AppLayout>
                <TasksScreen />
            </AppLayout>
        </AppContextProvider>
    )
}
