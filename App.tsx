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
import { Contador } from "./screens"
import AppContextProvider from "./contexts/AppContextProvider"
import SwitchDarkMode from "./components/common/SwitchDarkMode"
// @ts-ignore
// import bgImage from "./assets/bgImage.png"

export default function App() {
    return (
        <AppContextProvider>
            <View style={styles.container}>
                <ImageBackground
                    source={require("./assets/bgImage.png")}
                    style={styles.bg}
                >
                    {/* <Contador /> */}
                    {/* {mostrarRM && <RickMorty />} */}
                    {/* <Pressable onPress={() => setMostrarRM(!mostrarRM)}>
                        <Text>Montar/desmontar RM</Text>
                    </Pressable> */}
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 32
                        }}
                    >
                        <SwitchDarkMode />
                    </View>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
        </AppContextProvider>
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
