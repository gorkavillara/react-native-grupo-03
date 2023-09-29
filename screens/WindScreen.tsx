import { View, Text, Pressable } from "react-native"
import React from "react"

const WindScreen = () => {
    return (
        <View className="flex-1 justify-center items-center gap-10">
            <Text className="text-3xl italic font-semibold text-center dark:text-yellow-50">
                WindScreen
            </Text>

            <View className="bg-yellow-200 p-8 rounded-2xl items-center dark:bg-yellow-800">
                <Text className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-100">
                    Título
                </Text>
                <Text className="mb-4 dark:text-yellow-50">Texto descriptivo</Text>
                <Pressable onPress={() => null} className="py-4 px-8 bg-purple-600 dark:bg-purple-400 rounded-lg">
                    <Text className="text-white dark:text-slate-900">Botón</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default WindScreen
