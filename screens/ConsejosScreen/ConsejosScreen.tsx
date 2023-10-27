import { StyleSheet, Text, View, ImageBackground } from "react-native"
import Constants from "expo-constants"
import React from "react"
import { genericStyles } from "../../styles"
import ConsejosList from "./components/ConsejosList"

const ConsejosScreen = () => {
    return (
        <ImageBackground
            style={[genericStyles.container, styles.consejosScreen]}
            source={require("../../assets/bg.png")}
        >
            <Text style={styles.title}>Empieza una nueva vida con los consejos de tu AbuelApp</Text>
            <ConsejosList />
        </ImageBackground>
    )
}

export default ConsejosScreen

const styles = StyleSheet.create({
    consejosScreen: {
        justifyContent: "flex-start",
        paddingTop: Constants.statusBarHeight + 16,
        gap: 32
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "200",
        fontStyle: "italic",
        textAlign: "right"
    }
})
