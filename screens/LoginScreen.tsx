import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Pressable
} from "react-native"
import { useEffect, useState } from "react"
import { setStatusBarStyle } from "expo-status-bar"
import { genericStyles } from "../styles"
import { useUser } from "../hooks/useUser"
import { useNavigation } from "@react-navigation/native"

const LoginScreen = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useUser()
    useEffect(() => {
        setStatusBarStyle("light")
    }, [])

    const { navigate } = useNavigation()

    const hazLogin = () => {
        const { success } = login(username, password)
        if (!success) return

        // Redireccione a Consejos
        // @ts-ignore
        navigate("Consejos")
    }

    return (
        <ImageBackground
            style={genericStyles.container}
            source={require("../assets/bg.png")}
        >
            <View style={styles.form}>
                <Text style={styles.title}>Haz Log In</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu nombre de usuario"
                    placeholderTextColor="#fff8"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Tu contraseña"
                    placeholderTextColor="#fff8"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable style={styles.button} onPress={hazLogin}>
                    <Text>Aceptar</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    form: {
        width: "100%",
        gap: 24,
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 28
    },
    textInput: {
        width: "80%",
        borderColor: "white",
        color: "white",
        borderWidth: 0.8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    button: {
        width: "80%",
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: "white",
        alignItems: "center"
    }
})
