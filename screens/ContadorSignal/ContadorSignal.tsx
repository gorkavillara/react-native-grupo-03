//! DISCLAIMER - Signals no funcionan con el render de React Native
import { StyleSheet, Text, View, Pressable } from "react-native"
import React, { useState } from "react"
import { signal } from "@preact/signals-react"

const contadorSignal = signal(5)

const ContadorSignal = () => {
    const [estado, setEstado] = useState(false)
    const [contador, setContador] = useState(0)

    console.log("Contador calculado")

    const miFuncion = () =>
        estado
            ? console.log("Hola mundo, estado true")
            : console.log("Hola mundo, estado false")

    const incrementa = () => {
        // valor++
        // console.log(valor)
        // setContador(contador + 1) // setContador(22)
        // setContador(contador + 1) // setContador(22)
        // setContador(contador + 1) // setContador(22)
        // setContador(contador + 1) // setContador(22)
        // setContador((estadoAnterior) => estadoAnterior + 1)
        contadorSignal.value++
    }
    const resetContador = () => {
        setContador(0)
    }
    return (
        <View style={styles.contadorContainer}>
            <Text style={styles.titulo}>Contador</Text>
            <Text style={styles.contador}>Valor: {contadorSignal}</Text>
            <Pressable style={styles.boton} onPress={incrementa}>
                <Text style={styles.textoBoton}>Incrementar</Text>
            </Pressable>
            <Pressable style={styles.boton} onPress={resetContador}>
                <Text style={styles.textoBoton}>Reset</Text>
            </Pressable>
            <Pressable style={styles.boton} onPress={() => setEstado(!estado)}>
                <Text style={styles.textoBoton}>Cambiar el estado</Text>
            </Pressable>
        </View>
    )
}

export default ContadorSignal

const styles = StyleSheet.create({
    contadorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    },
    titulo: {
        fontSize: 42
    },
    contador: {
        fontSize: 24
    },
    boton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#a0f8",
        borderRadius: 8
    },
    textoBoton: {
        color: "white"
    }
})
