import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from "react-native"
import { RMListCharacter } from "../../models"
import { useFetch } from "../../hooks/useFetch"

const url = "https://rickandmortyapi.com/api/character"

const RickMorty = () => {
    const {
        data: RMData,
        loading,
        error
    } = useFetch<{ results: RMListCharacter[] }>(url)

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Rick y Morty</Text>
            {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            {loading && (
                <ActivityIndicator
                    color="#a0f8"
                    style={{ flex: 1, transform: "scale(3)" }}
                />
            )}
            {RMData && (
                <FlatList
                    data={RMData.results}
                    renderItem={({ item: character }) => {
                        return (
                            <Text style={styles.listItem} key={character.id}>
                                {character.name}
                            </Text>
                        )
                    }}
                />
            )}
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
