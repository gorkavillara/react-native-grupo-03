import { StyleSheet, Text, View, Pressable } from "react-native"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"
import { useCustomTheme } from "../hooks/useCustomTheme"
// import { genericStyles as styles } from "../styles"

const StyledScreen = () => {
    const { styles, changeTheme } = useCustomTheme("yellow")
    const { darkMode } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <Text style={[styles.titulo, darkMode && styles.tituloClaro]}>
                StyledScreen
            </Text>

            <View style={styles.horizontalContainer}>
                <Pressable onPress={() => changeTheme("yellow")}>
                    <Text style={{ color: "white" }}>Yellow</Text>
                </Pressable>
                <Pressable onPress={() => changeTheme("blue")}>
                    <Text style={{ color: "white" }}>Blue</Text>
                </Pressable>
                <Pressable onPress={() => changeTheme("red")}>
                    <Text style={{ color: "white" }}>Red</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default StyledScreen
