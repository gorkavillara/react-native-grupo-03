import { Switch, Text, StyleSheet } from "react-native"
import { useContext } from "react"
import { AppContext } from "../../contexts/AppContextProvider"

const SwitchDarkMode = () => {
    const { darkMode, toggleDarkMode } = useContext(AppContext)

    return (
        <>
            {/* <Text style={darkMode ? styles.tituloDarkMode : styles.tituloLightMode}>Dark Mode Switch</Text> */}
            {/* <Text style={[styles.titulo, darkMode && styles.tituloBlanco]}>Dark Mode Switch</Text> */}
            {/* <Text
                style={[
                    styles.titulo,
                    { color: darkMode ? "#fdfdfd" : "#1a1a1a" }
                ]}
            >
                Dark Mode Switch
            </Text> */}
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleDarkMode}
                value={darkMode}
            />
        </>
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
