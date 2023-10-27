import { StyleSheet, Text, View, Button } from "react-native"
import React from "react"
import { useNotification } from "../hooks/useNotification"

const NotificationsScreen = () => {
    const { scheduleNotification } = useNotification()
    const programa = () => {
        scheduleNotification(
            {
                title: "Notificación programada",
                body: "El cuerpo de la notificación programada",
                color: "#22ff55"
            },
            5
        )
    }
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>NotificationsScreen</Text>
            <Button title="Programa notificación" onPress={programa} />
        </View>
    )
}

export default NotificationsScreen

const styles = StyleSheet.create({})
