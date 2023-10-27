import * as Notifications from "expo-notifications"
import { Platform } from "react-native"

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
})

export const useNotification = () => {
    return { initializeNotifications, scheduleNotification }
}

const scheduleNotification = (data: Notifications.NotificationContentInput, secondsDelay: number) => {
    Notifications.scheduleNotificationAsync({
        content: data,
        trigger: {
            seconds: secondsDelay
        }
    })
}

const initializeNotifications = async () => {
    // Una pequeña configuración si es Android
    await configAndroidNotifications()

    // Solicitar el permiso de las notificaciones
    const granted = await requestPermission()
    if (!granted) return null

    // Obtener el token para poder comunicarnos
    const token = await getToken()
    // Enviar el token al backend -> Almacenarlo como nuevo usuario
    return token
}

const getToken = async () => {
    const tokenRes = await Notifications.getExpoPushTokenAsync({
        projectId: "89cecb8c-e55a-4c5c-bdb1-9008c8a5b92a"
    })
    return tokenRes.data
}

const requestPermission = async () => {
    const permission = await Notifications.requestPermissionsAsync()

    if (!permission.granted) {
        console.log("Permiso no concedido para las notificaciones")
        return false
    }

    return true
}

const configAndroidNotifications = async () => {
    if (Platform.OS !== "android") return

    await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        lightColor: "#ff44ddaa",
        vibrationPattern: [0, 250, 250, 250]
    })
}
