import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ImageBackground, Text } from "react-native"
import { ComponentsTest } from "./screens"
// @ts-ignore
// import bgImage from "./assets/bgImage.png"

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./assets/bgImage.png")} style={styles.bg}>
                <ComponentsTest />
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
