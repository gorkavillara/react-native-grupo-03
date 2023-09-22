import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"

const RickMorty = () => {
    const [estado, setEstado] = useState(false)
    const [estado2, setEstado2] = useState(false)

    useEffect(() => {
        console.log("Añadiendo listener")
        return () => {
            console.log("Desmontando componente, eliminando listeners...")
        }
    }, [])

    useEffect(() => {
        console.log("Ha cambiado el primer estado")
    }, [estado])

    useEffect(() => {
        console.log("He lanzado el efecto solo en el montaje")
    }, [])
    
    useEffect(() => { // Este efecto se lanzará en CADA renderizado (Incluido el inicial)
        console.log("Soy el efecto")
    })

    return (
        <View>
            <Text>RickMorty</Text>
            <Pressable onPress={() => setEstado(!estado)}>
                <Text>Cambia estado</Text>
            </Pressable>
            <Pressable onPress={() => setEstado2(!estado2)}>
                <Text>Cambia estado2</Text>
            </Pressable>
        </View>
    )
}

export default RickMorty

const styles = StyleSheet.create({})
