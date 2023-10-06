import {
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from "react-native"
import * as ScreenOrientation from "expo-screen-orientation"
import React from "react"
import { genericStyles } from "../styles"

const DimensionsScreen = () => {
    const { height, width } = useWindowDimensions()
    console.log({ height, width })

    const orientation = height >= width ? "portrait" : "landscape"

    const bloqueaVertical = () => {
        ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
        )
    }
    const desbloqueaOrientacion = () => {
        ScreenOrientation.unlockAsync()
    }
    const obtenOrientacion = () => {
        // ScreenOrientation.getOrientationAsync().then((orientation) =>
        //     console.log(orientation === ScreenOrientation.Orientation.)
        // )
        console.log(orientation)
    }

    return (
        <View style={genericStyles.container}>
            <Text style={genericStyles.titulo}>DimensionsScreen</Text>
            <Pressable onPress={bloqueaVertical}>
                <Text>Bloquea vertical</Text>
            </Pressable>
            <Pressable onPress={desbloqueaOrientacion}>
                <Text>Desbloquea orientación</Text>
            </Pressable>
            <Pressable onPress={obtenOrientacion}>
                <Text>Obtén orientación</Text>
            </Pressable>
        </View>
    )
}

export default DimensionsScreen

const styles = StyleSheet.create({})
