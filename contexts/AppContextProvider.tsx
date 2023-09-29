import { createContext, useState, PropsWithChildren } from "react"

interface ContextInterface {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    mostrarRM: boolean
    setMostrarRM: React.Dispatch<React.SetStateAction<boolean>>
    toggleDarkMode: () => void
}

export const AppContext = createContext<ContextInterface>(null!)

const AppContextProvider = ({ children }: PropsWithChildren) => {
    const [mostrarRM, setMostrarRM] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode((prev) => !prev)

    return (
        <AppContext.Provider
            value={{
                darkMode,
                setDarkMode,
                mostrarRM,
                setMostrarRM,
                toggleDarkMode
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider