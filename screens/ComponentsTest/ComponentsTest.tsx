// rnfes => Snippet para crear un componente de RN con Estilos
import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { TextOverlay } from "../../components"

const ComponentsTest = () => {
    return (
        <View style={styles.container}>
            <TextOverlay primaryText="Nuevo" secondaryText="Calcetines LIDL" />
            <TextOverlay primaryText="Outlet" secondaryText="Zapatillas de casa" />
        </View>
    )
}

export default ComponentsTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})
