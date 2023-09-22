import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"
import {
    StyleSheet,
    View,
    ImageBackground,
    Pressable,
    Text,
    Switch
} from "react-native"
import { Contador, RickMorty } from "./screens"
import { useState, createContext } from "react"
// @ts-ignore
// import bgImage from "./assets/bgImage.png"

// TODO: Refactorizarlo en componente separado
interface ContextInterface {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    mostrarRM: boolean
    setMostrarRM: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<ContextInterface>(null!)

export default function App() {
    const [mostrarRM, setMostrarRM] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    return (
        <AppContext.Provider value={{ darkMode, setDarkMode, mostrarRM, setMostrarRM }}>
            <View style={styles.container}>
                <ImageBackground
                    source={require("./assets/bgImage.png")}
                    style={styles.bg}
                >
                    <Contador />
                    {/* {mostrarRM && <RickMorty />} */}
                    {/* <Pressable onPress={() => setMostrarRM(!mostrarRM)}>
                        <Text>Montar/desmontar RM</Text>
                    </Pressable> */}
                    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 32 }}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setDarkMode((prev) => !prev)}
                            value={darkMode}
                        />
                    </View>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
        </AppContext.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    titulo: { fontSize: 32, color: "blue" }
})
