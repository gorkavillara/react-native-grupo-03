import { View, Text } from "react-native"
import { tareas } from "../../assets/tareas"
import React from "react"
import List from "./components/List"

const TodoList = () => {
    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 40, fontWeight: "600" }}>Todo List</Text>
            {/* Componente para introducir una nueva tarea */}
            {/* Componente que renderiza la lista de tareas */}
            <List todos={tareas} />
        </View>
    )
}

export default TodoList
