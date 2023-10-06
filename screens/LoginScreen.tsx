import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    useWindowDimensions,
    Platform
} from "react-native"
import React from "react"
import { genericStyles } from "../styles"

const Componente = Platform.select({
    android: () => require("./DimensionsScreen").default,
    ios: () => require("../components/common/TextOverlay").default,

    default: () => require("./DimensionsScreen").default
})()

const LoginScreen = () => {
    const { width, height } = useWindowDimensions()
    const orientation = height >= width ? "portrait" : "landscape"
    // TODO: Cambiar estilos en portrait

    return (
        <View
            style={[
                genericStyles.container,
                {
                    gap: 16,
                    paddingHorizontal: 20,
                    flexDirection: orientation === "portrait" ? "column" : "row"
                }
            ]}
        >
            <View style={{ flex: 1, alignItems: "center" }}>
                {Platform.OS === "android" && <Text>Running on Android</Text>}
                {Platform.OS === "ios" && <Text>Running on iOS</Text>}
                <Text style={genericStyles.titulo}>LoginScreen</Text>
                <Image
                    source={require("../assets/logo.jpg")}
                    style={styles.logo}
                />
            </View>
            <View style={{ flex: 1, gap: 16, alignItems: "center" }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu nombre de usuario"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu contraseña"
                    secureTextEntry
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200
    },
    textInput: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#c0c0c0",
        borderRadius: 8,
        width: "100%"
    },
    button: {
        backgroundColor: "#fe1c04",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        width: "100%"
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    }
})
