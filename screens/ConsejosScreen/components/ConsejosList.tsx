import { StyleSheet, Text, View, FlatList } from "react-native"
import React from "react"
import { useConsejos } from "../../../hooks/useConsejos"
import ConsejoCard from "./ConsejoCard"

const ConsejosList = () => {
    const { consejos } = useConsejos()
    return (
        <FlatList
            data={consejos}
            contentContainerStyle={{ gap: 16 }}
            renderItem={(consejo) => <ConsejoCard key={consejo.index} consejo={consejo.item} />}
        />
    )
}

export default ConsejosList

const styles = StyleSheet.create({})
