import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ImageBackground } from "react-native"
import bgImage from "./assets/bgImage.png"

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.bg} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        flex: 1
    },
    titulo: { fontSize: 32, color: "blue" }
})
