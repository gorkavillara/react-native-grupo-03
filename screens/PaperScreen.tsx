import { StyleSheet, View } from "react-native"
import React from "react"
import { Button, Text, TextInput } from "react-native-paper"
import Icon from "react-native-vector-icons/Ionicons"

const MiIconoEnvio = () => <Icon name="rocket" size={20} color="rgb(230, 250, 253)" />

const PaperScreen = () => {
    return (
        <View style={styles.container}>
            <Text variant="displayMedium">Login</Text>
            <TextInput mode="outlined" label="Tu nombre de usuario" style={{ width: "80%" }} />
            <TextInput mode="outlined" secureTextEntry label="Tu contraseña" style={{ width: "80%" }} />
            <Button
                mode="contained"
                buttonColor="#66dd66"
                icon={MiIconoEnvio}
                uppercase
                style={{ width: "80%" }}
                onPress={() => console.log("He hecho press")}
            >
                Botón
            </Button>
            <Icon name="bonfire" size={50} color="rgb(230, 20, 40)" />
        </View>
    )
}

export default PaperScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16
    }
})
