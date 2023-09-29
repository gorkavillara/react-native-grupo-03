import { Pressable, StyleSheet, Text, View } from "react-native"
import { useContext, useReducer } from "react"
import { AppContext } from "../contexts/AppContextProvider"
import { reductorContador } from "../contexts/reducers/contadorReducer"

const ContadorIndividual = () => {
    // const { contador, incrementaContador } = useContext(AppContext)
    const [contador, dispatchContador] = useReducer(reductorContador, 5)
    const incrementaContador = () => dispatchContador({ type: "incrementa" })

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Valor: {contador}</Text>
            <Pressable onPress={incrementaContador}>
                <Text>Incrementa</Text>
            </Pressable>
        </View>
    )
}

export default ContadorIndividual

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 24
    }
})
