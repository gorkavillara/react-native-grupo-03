import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"
import { StyleSheet, View } from "react-native"
import { TodoList } from "./screens"

export default function App() {
    return (
        <View style={styles.container}>
            <TodoList />
            <StatusBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Constants.statusBarHeight
    }
})
