import { useState, useEffect } from "react"
import { Pressable, Text, View, TextInput, FlatList } from "react-native"
import { styles } from "./styles"
import { useTasksList } from "../../hooks/useTasksList"

// TODO: Revisar el renderizado con useEffect -> Utilizando react dev tools

const TasksScreen = () => {
    const { tasks, addNewTask } = useTasksList()
    const [nuevoTexto, setNuevoTexto] = useState("")

    useEffect(() => {
        setNuevoTexto("")
    }, [tasks])
    // const [nuevaTarea, setNuevaTarea] = useState()
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de tareas</Text>
            <TextInput
                value={nuevoTexto}
                onChangeText={setNuevoTexto}
                placeholder="Nueva tarea"
                style={styles.textInput}
            />
            <Pressable
                style={styles.botonEnviar}
                onPress={() => {
                    // Cambiar el texto a vacío
                    // setNuevoTexto("")
                    // Añadir una nueva tarea con nuevoTexto = Aprender React Native
                    addNewTask(nuevoTexto)
                }}
            >
                <Text>Añadir</Text>
            </Pressable>
            <FlatList
                data={tasks}
                renderItem={(task) => (
                    <Text key={task.index} style={{ color: "white" }}>
                        {task.item.text}
                    </Text>
                )}
            />
        </View>
    )
}

export default TasksScreen
