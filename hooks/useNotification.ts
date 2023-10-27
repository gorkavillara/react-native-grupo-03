import * as Notifications from "expo-notifications"
import { useEffect } from "react"
import { Platform } from "react-native"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: false,
        shouldSetBadge: false,
        shouldShowAlert: true
    })
})

export const useNotification = () => {
    useEffect(() => {
        configureAndroid()
        Notifications.requestPermissionsAsync()
        Notifications.getExpoPushTokenAsync({
            projectId: "89cecb8c-e55a-4c5c-bdb1-9008c8a5b92a"
        }).then(console.log)
    }, [])

    const programNotification = (text: string, delaySeconds: number) => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: text
            },
            trigger: {
                seconds: delaySeconds
            }
        })
    }

    return { programNotification }
}

const configureAndroid = () => {
    if (Platform.OS !== "android") return

    Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX
    })
}
