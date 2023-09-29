import { useState } from "react"

interface Task {
    id: number
    text: string
    completed: boolean
}

export const useTasksList = () => {
    const [tasks, setTasks] = useState<Task[]>([])

    const addNewTask = (newText: string) => {
        const newTask: Task = {
            id: tasks.length,
            text: newText,
            completed: false
        }
        setTasks(prev => [...prev, newTask])
    }

    return { tasks, addNewTask }
}
