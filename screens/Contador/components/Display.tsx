import { StyleSheet, Text, View } from "react-native"
import React, { useState, memo, useContext } from "react"
import { AppContext } from "../../../App"

const Display = ({
    contador,
}: {
    contador: number
}) => {
    const { darkMode } = useContext(AppContext)
    // console.log(contexto)
    // const darkMode = contexto.darkMode
    // console.log("Display renderizado")
    const [miEstado, _] = useState(true)
    return <Text style={[styles.contador, darkMode && styles.darkMode]}>Valor: {contador}</Text>
}

export default memo(Display)

const styles = StyleSheet.create({
    contador: {
        fontSize: 24
    },
    darkMode: {
        color: "red"
    }
})
