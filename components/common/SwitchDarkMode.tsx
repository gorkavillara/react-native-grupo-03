import { Switch, Text, StyleSheet } from "react-native"
import { useContext } from "react"
import { AppContext } from "../../contexts/AppContextProvider"
import { useColorScheme } from "nativewind"

const SwitchDarkMode = () => {
    const { colorScheme, toggleColorScheme: toggleDarkMode } = useColorScheme()
    // const { darkMode, toggleDarkMode } = useContext(AppContext)

    const darkMode = colorScheme === "dark"

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDarkMode}
            value={darkMode}
        />
    )
}

export default SwitchDarkMode

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24
    },
    tituloBlanco: {
        color: "#fdfdfd"
    },
    tituloDarkMode: {
        fontSize: 24,
        color: "#fdfdfd"
    },
    tituloLightMode: {
        fontSize: 24,
        color: "#2a2a2a"
    }
})
