import { StyleSheet, Text, View, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { BlurView } from "expo-blur"
import { Consejo } from "../../../models"
import Icon from "react-native-vector-icons/Ionicons"
import { useNotification } from "../../../hooks/useNotification"

const ConsejoCard = ({ consejo }: { consejo: Consejo }) => {
    const { navigate } = useNavigation()
    const { programNotification } = useNotification()
    const takeActionPicture = () => {
        // @ts-ignore
        navigate("CameraModal") // TODO: Manejar los tipos del Stack
        console.log("picture")
    }

    const recordatorio = () => {
        programNotification(`Recuerda: ${consejo.texto}`, 3)
    }
    return (
        <View style={styles.card}>
            <View style={styles.blur}>
                <Text style={styles.text}>{consejo.texto}</Text>
                <View style={styles.actions}>
                    {/* Botón para completar la acción */}
                    <Pressable
                        style={styles.actionButton}
                        onPress={takeActionPicture}
                    >
                        <Icon name="camera-outline" size={16} color="white" />
                        <Text style={{ color: "white" }}>Completar</Text>
                    </Pressable>
                    {/* Botón para crear/eliminar recordatorio */}
                    <Pressable
                        style={[
                            styles.actionButton,
                            { backgroundColor: "white" }
                        ]}
                        onPress={recordatorio}
                    >
                        <Icon
                            name="notifications-outline"
                            size={16}
                            color="black"
                        />
                        <Text style={{ color: "black" }}>Recordar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ConsejoCard

const styles = StyleSheet.create({
    card: {
        // backgroundColor: "white",
        borderWidth: 0.7,
        borderColor: "white",
        borderRadius: 8,
        overflow: "hidden"
    },
    blur: {
        padding: 8,
        flex: 1,
        gap: 8
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionButton: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        padding: 8,
        backgroundColor: "#33cc66",
        borderRadius: 8
    }
})
