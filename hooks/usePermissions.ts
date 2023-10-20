import { useState, useEffect } from "react"
import { Camera } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import * as Location from 'expo-location';

export const usePermissions = () => {
    const [hasAlreadyAsked, setHasAlreadyAsked] = useState(false)
    const [hasAlreadyAskedAudio, setHasAlreadyAskedAudio] = useState(false)
    const [hasAlreadyAskedMedia, setHasAlreadyAskedMedia] = useState(false)
    const [permissions, requestPermissions] = Camera.useCameraPermissions()
    const [audioPermissions, requestAudioPermissions] =
        Camera.useMicrophonePermissions()
    const [mediaPermissions, requestMediaPermissions] =
        MediaLibrary.usePermissions()

    useEffect(() => {
        if (!permissions) return
        if (!permissions.canAskAgain) return
        if (hasAlreadyAsked) return

        if (!permissions.granted) {
            requestPermissions().then((response) => {
                console.log(response)
                setHasAlreadyAsked(true)
            })
        }
    }, [permissions])
    useEffect(() => {
        if (!audioPermissions) return
        if (!audioPermissions.canAskAgain) return
        if (hasAlreadyAskedAudio) return

        if (!audioPermissions.granted) {
            requestAudioPermissions().then((response) => {
                console.log(response)
                setHasAlreadyAskedAudio(true)
            })
        }
    }, [audioPermissions])
    useEffect(() => {
        if (!mediaPermissions) return
        if (!mediaPermissions.canAskAgain) return
        if (hasAlreadyAskedMedia) return

        if (!mediaPermissions.granted) {
            requestMediaPermissions().then((response) => {
                console.log(response)
                setHasAlreadyAskedMedia(true)
            })
        }
    }, [mediaPermissions])
    useEffect(() => {
        Location.requestForegroundPermissionsAsync()
    }, [])
    return {}
}