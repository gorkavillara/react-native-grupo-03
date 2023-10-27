import { useState, useEffect } from "react"
import { ToastAndroid } from "react-native"
import { Camera } from "expo-camera"
import * as MediaLibrary from "expo-media-library"
import * as Location from "expo-location"
import * as Notifications from "expo-notifications"
import { useNotification } from "./useNotification"
import { useContacts } from "./useContacts"

export const usePermissions = () => {
    const [hasAlreadyAsked, setHasAlreadyAsked] = useState(false)
    const [hasAlreadyAskedAudio, setHasAlreadyAskedAudio] = useState(false)
    const [hasAlreadyAskedMedia, setHasAlreadyAskedMedia] = useState(false)

    const [permissions, requestPermissions] = Camera.useCameraPermissions()
    const [audioPermissions, requestAudioPermissions] =
        Camera.useMicrophonePermissions()
    const [mediaPermissions, requestMediaPermissions] =
        MediaLibrary.usePermissions()

    const { initializeNotifications } = useNotification()
    const { requestContactPermission } = useContacts()

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

    useEffect(() => {
        const receivedListener = Notifications.addNotificationReceivedListener(
            (notification) => {
                ToastAndroid.show(
                    `Notificación recibida: ${notification.request.content.title}`,
                    300
                )
            }
        )
        const actionListener = Notifications.addNotificationResponseReceivedListener(
            response => {
                console.log(response)
            }
        )

        initializeNotifications()

        return () => {
            Notifications.removeNotificationSubscription(receivedListener)
            Notifications.removeNotificationSubscription(actionListener)
        }
    }, [])

    useEffect(() => {
        requestContactPermission()
    }, [])
    return {}
}
