import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    Button,
    Image,
    ActivityIndicator
} from "react-native"
import React, { useState } from "react"
import { genericStyles } from "../../styles"
import { useRecoilState, useRecoilValueLoadable } from "recoil"
import { pokeDetails, pokeId } from "../../app/pokemonState"

const PokemonDetails = () => {
    const details = useRecoilValueLoadable<{
        name: string
        sprites: { front_default: string }
    }>(pokeDetails)

    if (details.state === "loading") return <ActivityIndicator />
    if (details.state === "hasError")
        return (
            <Text style={{ color: "red" }}>
                Error! {details.contents.message}
            </Text>
        )

    return (
        <View style={{ alignItems: "center" }}>
            <Text>{details.contents.name}</Text>
            <Image
                source={{ uri: details.contents.sprites.front_default }}
                style={{ width: 120, height: 120 }}
            />
        </View>
    )
}

const BuscaPokemon = () => {
    const [id, setId] = useRecoilState(pokeId)
    const [inputValue, setInputValue] = useState("")

    const buscaPokemon = () => {
        setId(inputValue)
    }

    return (
        <ImageBackground
            source={require("../../assets/pokeBg.jpg")}
            style={{ flex: 1 }}
        >
            <View
                style={[
                    genericStyles.container,
                    { backgroundColor: "#fffc", gap: 16 }
                ]}
            >
                <Text style={genericStyles.titulo}>BuscaPokemon</Text>
                <Text>Pokemon buscado: {id}</Text>
                <TextInput
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Nuevo id"
                    style={{
                        borderWidth: 1,
                        paddingVertical: 8,
                        paddingHorizontal: 16
                    }}
                />
                <Button title="Busca" onPress={buscaPokemon} />
                <PokemonDetails />
            </View>
        </ImageBackground>
    )
}

export default BuscaPokemon

const styles = StyleSheet.create({})
