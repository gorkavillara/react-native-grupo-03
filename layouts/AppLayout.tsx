import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import { useContext, PropsWithChildren } from "react"
import { AppContext } from "../contexts/AppContextProvider"
import SwitchDarkMode from "../components/common/SwitchDarkMode"

const AppLayout = ({ children }: PropsWithChildren) => {
    const { darkMode } = useContext(AppContext)
    return (
        <ImageBackground
            source={
                darkMode
                    ? require("../assets/bgImageDark.png")
                    : require("../assets/bgImage.png")
            }
            style={styles.bg}
        >
            <View style={styles.screenContainer}>{children}</View>
            <SwitchDarkMode />
            <StatusBar style={darkMode ? "light" : "dark"} />
        </ImageBackground>
    )
}

export default AppLayout

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    },
    bg: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    titulo: { fontSize: 32, color: "blue" }
})
