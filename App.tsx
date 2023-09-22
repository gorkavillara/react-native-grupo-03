import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ImageBackground, Pressable, Text } from "react-native"
import { RickMorty } from "./screens"
import { useState } from "react"
// @ts-ignore
// import bgImage from "./assets/bgImage.png"

export default function App() {
    const [mostrarRM, setMostrarRM] = useState(true)
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./assets/bgImage.png")}
                style={styles.bg}
            >
                {mostrarRM && <RickMorty />}
                {/* <Pressable onPress={() => setMostrarRM(!mostrarRM)}>
                    <Text>Montar/desmontar RM</Text>
                </Pressable> */}
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
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
