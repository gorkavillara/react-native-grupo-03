import { Pressable, StyleSheet, Text, View } from "react-native"
import { useContador } from "../hooks/useContador"

const ContadorConHook = () => {
    const {
        contador,
        incrementa: incrementaContador,
        decrementa
    } = useContador(10)
    const {
        contador: contador2,
        incrementa: incrementaContador2,
        decrementa: decrementaContador2
    } = useContador(4)
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titulo}>Valor: {contador}</Text>
                <Pressable onPress={incrementaContador}>
                    <Text>Incrementa</Text>
                </Pressable>
                <Pressable onPress={decrementa}>
                    <Text>Decrementa</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Valor: {contador2}</Text>
                <Pressable onPress={incrementaContador2}>
                    <Text>Incrementa</Text>
                </Pressable>
                <Pressable onPress={decrementaContador2}>
                    <Text>Decrementa</Text>
                </Pressable>
            </View>
        </>
    )
}

export default ContadorConHook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 24,
        color: "green"
    }
})
