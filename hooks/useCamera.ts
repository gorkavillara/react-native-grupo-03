import { useState, useRef } from "react"
import { BarCodeScanningResult, Camera, CameraType } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import { Linking, ToastAndroid, Vibration } from "react-native"

export const useCamera = () => {
    const [cameraType, setCameraType] = useState<CameraType>(CameraType.front)
    const [isRecording, setIsRecording] = useState(false)
    const [barCodeData, setBarCodeData] = useState<null | string>(null)
    const cameraRef = useRef<Camera>(null)

    const changeCameraType = () =>
        setCameraType((previousType) =>
            previousType === CameraType.back
                ? CameraType.front
                : CameraType.back
        )

    const takePicture = () => {
        if (!cameraRef.current) return

        cameraRef.current.takePictureAsync().then((res) => {
            console.log(res.uri)
            MediaLibrary.saveToLibraryAsync(res.uri).then((mediaRes) => {
                console.log(mediaRes)
                ToastAndroid.show("✅ Foto guardada con éxito", 300)
            })
        })
    }

    const openGallery = () => {
        const intent = "content://media/internal/images/media"
        Linking.openURL(intent).catch((err) => {
            console.log("Error al abrir la galería", err)
        })
    }

    const startRecording = () => {
        if (!cameraRef.current) return
        // Setear un estado que sea isRecording
        setIsRecording(true)
        // Empezar a grabar
        // Almacenarla en medialibrary
        cameraRef.current.recordAsync().then((res) => {
            MediaLibrary.saveToLibraryAsync(res.uri).then(() =>
                ToastAndroid.show(
                    "🎥 La grabación se ha guardado correctamente",
                    300
                )
            )
        })
    }

    const stopRecording = () => {
        if (!isRecording) return
        if (!cameraRef.current) return
        // Si !isRecording return

        setIsRecording(false)
        // Parar la grabación
        cameraRef.current.stopRecording()
    }

    const barCodeScanned = (scanningResult: BarCodeScanningResult) => {
        if (scanningResult.data === barCodeData) return

        ToastAndroid.show(`Info: ${scanningResult.data}`, 300)
        Vibration.vibrate(200)
        setBarCodeData(scanningResult.data)

        Linking.canOpenURL(scanningResult.data).then(
            (can) => can && Linking.openURL(scanningResult.data)
        )
    }

    return {
        cameraType,
        changeCameraType,
        cameraRef,
        takePicture,
        openGallery,
        isRecording,
        startRecording,
        stopRecording,
        barCodeScanned
    }
}
