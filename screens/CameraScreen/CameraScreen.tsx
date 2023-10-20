import { StyleSheet, View, TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import { Camera } from "expo-camera"
import { genericStyles } from "../../styles"
import { useCamera } from "../../hooks/useCamera"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

const CameraScreen = () => {
    const {
        cameraType,
        changeCameraType,
        cameraRef,
        takePicture,
        openGallery,
        isRecording,
        startRecording,
        stopRecording,
        barCodeScanned
    } = useCamera()
    const navigation = useNavigation()

    return (
        <View style={genericStyles.container}>
            <Camera
                type={cameraType}
                style={styles.camera}
                ref={cameraRef}
                onBarCodeScanned={barCodeScanned}
            >
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={navigation.goBack}
                    >
                        <Icon name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.cameraButtons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={openGallery}
                    >
                        <Icon name="albums" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { height: 80, width: 80 }]}
                        onPress={takePicture}
                        onLongPress={startRecording}
                        onPressOut={stopRecording}
                        activeOpacity={isRecording ? 1 : 0.5}
                    >
                        {!isRecording ? (
                            <Icon name="camera" size={48} color="white" />
                        ) : (
                            <Icon
                                name="radio-button-on"
                                size={75}
                                color="red"
                            />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={changeCameraType}
                    >
                        <Icon name="camera-reverse" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    camera: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
        padding: 24,
        justifyContent: "space-between"
    },
    cameraButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    button: {
        backgroundColor: "#fff6",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    }
})
