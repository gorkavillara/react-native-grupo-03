import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from "react-native"
import React, { useState } from "react"
import { genericStyles } from "../styles"
import { setStatusBarStyle } from "expo-status-bar"
import { useUser } from "../hooks/useUser"

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { login, isLoading } = useUser()

    setStatusBarStyle("light")

    // const login = () => {
    //     ToastAndroid.show("🔓 Login correcto", 300)
    // }
    return (
        <ImageBackground
            source={require("../assets/loginBg.jpg")}
            style={styles.background}
        >
            <View
                style={[
                    genericStyles.container,
                    { backgroundColor: "#0007", gap: 16 }
                ]}
            >
                <Text style={styles.title}>Haz Log In</Text>
                <TextInput
                    placeholderTextColor="#fff7"
                    style={styles.textInput}
                    placeholder="Tu nombre de usuario"
                    value={username}
                    onChangeText={setUsername}
                    editable={!isLoading}
                />
                <TextInput
                    placeholderTextColor="#fff7"
                    style={styles.textInput}
                    placeholder="Tu contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    editable={!isLoading}
                />
                <TouchableOpacity
                    style={styles.button}
                    disabled={isLoading}
                    onPress={() => login(username, password)}
                >
                    {isLoading ? (
                        <ActivityIndicator color="black" />
                    ) : (
                        <Text>Aceptar</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default LogIn

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%"
    },
    title: {
        color: "white",
        fontSize: 32
    },
    textInput: {
        width: "75%",
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 16,
        paddingHorizontal: 16,
        color: "white",
        borderRadius: 32
    },
    button: {
        width: "75%",
        backgroundColor: "white",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 32
    }
})
