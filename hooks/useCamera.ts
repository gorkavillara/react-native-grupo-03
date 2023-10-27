import { Camera } from "expo-camera"
import { useEffect, useRef } from "react"

export const useCamera = () => {
    const cameraRef = useRef<Camera>(null)
    useEffect(() => {
        Camera.requestCameraPermissionsAsync()
            .then(console.log)
    }, [])

    const takePicture = async () => {
        if (!cameraRef.current) return { success: false }

        await cameraRef.current.takePictureAsync()
        return { success: true }
    }

    return { takePicture, cameraRef }
}