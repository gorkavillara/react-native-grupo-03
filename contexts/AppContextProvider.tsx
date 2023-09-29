import { createContext, useState, PropsWithChildren, useReducer } from "react"
import { reductorContador } from "./reducers/contadorReducer"

interface ContextInterface {
    contador: number
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    mostrarRM: boolean
    setMostrarRM: React.Dispatch<React.SetStateAction<boolean>>
    toggleDarkMode: () => void
    incrementaContador: () => void
    decrementaContador: () => void
    resetContador: () => void
}

export const AppContext = createContext<ContextInterface>(null!)

const AppContextProvider = ({ children }: PropsWithChildren) => {
    const [mostrarRM, setMostrarRM] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode((prev) => !prev)

    // const [contador, setContador] = useState(0)
    const [contador, dispatchContador] = useReducer(reductorContador, 3)

    const incrementaContador = () => dispatchContador({ type: "incrementa" })
    const decrementaContador = () => dispatchContador({ type: "decrementa" })
    const resetContador = () => dispatchContador({ type: "reset" })

    // const incrementaContador = () => setContador((prev) => prev + 1)
    // const decrementaContador = () => setContador((prev) => prev - 1)
    // const reseteaContador = () => setContador(0)
    // const sumarXContador = (val: number) => setContador((prev) => prev + val)

    return (
        <AppContext.Provider
            value={{
                darkMode,
                setDarkMode,
                mostrarRM,
                setMostrarRM,
                toggleDarkMode,
                contador,
                incrementaContador,
                decrementaContador,
                resetContador
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
