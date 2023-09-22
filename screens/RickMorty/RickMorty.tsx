import {
    Pressable,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    ActivityIndicator,
    Image
} from "react-native"
import React, { useEffect, useState, useCallback } from "react"
import axios from "axios"
import { RMListCharacter } from "../../models"

const url = "https://rickandmortyapi.com/api/character"

const RickMorty = () => {
    const [loading, setLoading] = useState(true)
    const [rmListCharacters, setRmListCharacters] = useState<
        Array<RMListCharacter>
    >([])
    const [character, setCharacter] = useState<RMListCharacter | null>(null)

    const fetchSingleCharacter = useCallback(async () => {
        if (!character) return console.log("No existe character")

        const res = await axios.get(`${url}/${character.id}`)
        console.log(res.data)
    }, [character])

    useEffect(() => {
        // fetchSingleCharacter()
    }, [character])

    useEffect(() => {
        // axios.get(url).then((res) => res.data)
        const fetchRM = async () => {
            const res = await axios.get<{ results: RMListCharacter[] }>(url)
            console.log(res.data.results)
            setRmListCharacters(res.data.results)
            setLoading(false)
        }

        fetchRM()
    }, [])

    const selectCharacter = useCallback((char: RMListCharacter) => {
        console.log("seleccionado", char.name)
        setCharacter(char)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rick y Morty</Text>
            <Pressable onPress={fetchSingleCharacter}>
                <Text>Busca character</Text>
            </Pressable>
            {/* <Pressable onPress={() => setEstado(!estado)}>
                <Text>Cambia estado</Text>
            </Pressable> */}
            {character && (
                <View>
                    <Text>{character.name}</Text>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: character.image }}
                    ></Image>
                </View>
            )}
            {loading ? (
                <ActivityIndicator
                    color="#a0f8"
                    style={{ flex: 1, transform: "scale(3)" }}
                />
            ) : (
                <FlatList
                    data={rmListCharacters}
                    renderItem={({ item: character }) => {
                        // const character = char.item
                        return (
                            <Pressable
                                onPress={() => selectCharacter(character)}
                            >
                                <Text
                                    style={styles.listItem}
                                    key={character.id}
                                >
                                    {character.name}
                                </Text>
                            </Pressable>
                        )
                    }}
                />
            )}
            {/* <ScrollView>
                {rmListCharacters.map((char) => (
                    <Text style={styles.listItem} key={char.id}>
                        {char.name}
                    </Text>
                ))}
            </ScrollView> */}
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
    },
    listItem: {
        fontSize: 18,
        marginBottom: 36
    }
})
