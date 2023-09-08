import { ScrollView, Text } from "react-native"
import React from "react"
import { Todo } from "../../../models"

interface Props {
    todos: Todo[]
}

const List = ({ todos }: Props) => {
    // TODO: Convertir ScrollView en FlatList
    // https://reactnative.dev/docs/flatlist
    return (
        <ScrollView>
            {todos.map((tarea) => (
                <Text key={tarea.id}>{tarea.text}</Text>
            ))}
        </ScrollView>
    )
}

export default List
