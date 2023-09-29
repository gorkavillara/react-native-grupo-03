import { Pressable, StyleSheet, Text, View } from "react-native"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"

const ContadorConContexto = () => {
    const { contador, incrementaContador } = useContext(AppContext)
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Valor: {contador}</Text>
            <Pressable onPress={incrementaContador}>
                <Text>Incrementa</Text>
            </Pressable>
        </View>
    )
}

export default ContadorConContexto

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
