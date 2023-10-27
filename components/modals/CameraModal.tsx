import { StyleSheet, Text, View, Pressable } from "react-native"
import React from "react"
import { Camera } from "expo-camera"
import { useCamera } from "../../hooks/useCamera"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

const CameraModal = () => {
    const { navigate } = useNavigation()
    const { cameraRef, takePicture } = useCamera()

    const sacaFoto = async () => {
        const { success } = await takePicture()
        if (!success) return

        // TODO: Marcar la tarea como completada
        // @ts-ignore
        navigate("Consejos")
    }

    return (
        <Camera ref={cameraRef} style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={{ alignItems: "center" }}>
                <Pressable
                    style={{
                        backgroundColor: "#fff7",
                        padding: 32,
                        borderRadius: 50
                    }}
                    onPress={sacaFoto}
                >
                    <Icon name="camera" size={32} />
                </Pressable>
            </View>
        </Camera>
    )
}

export default CameraModal

const styles = StyleSheet.create({})
