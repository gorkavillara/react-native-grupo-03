import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"

const url = "https://rickandmortyapi.com/api/character"

const RickMorty = () => {
    useEffect(() => {
        // axios.get(url).then((res) => console.log(res.data))
        const fetchRM = async () => {
            const res = await axios.get(url)
            console.log(res.data)
            return res.data
        }

        fetchRM()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rick y Morty</Text>
            {/* <Pressable onPress={() => setEstado(!estado)}>
                <Text>Cambia estado</Text>
            </Pressable> */}
        </View>
    )
}

export default RickMorty

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    titulo: {
        fontSize: 24,
        textAlign: "center"
    }
})
