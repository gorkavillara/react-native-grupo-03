import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight
} from "react-native"

export default function App() {
    const [contador, setContador] = useState(10)
    // const contador = estado[0]
    // const setContador = estado[1]
    // let contador = 1

    const sumaContador = () => {
        console.log("Has presionado el botón")
        // setContador(contador + 1) // setContador(41)
        // setContador(contador + 1) // setContador(41)
        // setContador(contador + 1) // setContador(41)
        setContador((valorAnterior) => {
            console.log("Sumando 1")
            return valorAnterior + 1
        })
        // setContador(valorAnterior => {
        //     console.log("Sumando 2")
        //     return valorAnterior + 2
        // })
        // setContador(valorAnterior => {
        //     console.log("Sumando 3")
        //     return valorAnterior + 3
        // })
        // contador++
        // console.log(contador)
    }
    const restaContador = () => setContador((prev) => prev - 1)

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hola mundo</Text>
            <Text style={{ fontSize: 24 }}>Contador: {contador}</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>
                <Button title="menos" onPress={restaContador} />
                <Button title="más" onPress={sumaContador} />
            </View>
            <TouchableHighlight
                style={{
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    backgroundColor: "#ee0099",
                    borderRadius: 8
                }}
                onPress={() => Alert.alert("Has hecho click")}
                disabled={false}
                activeOpacity={0.5}
                underlayColor="#ee00dd"
            >
                <Text>Botón personalizado</Text>
            </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 16
    },
    titulo: { fontSize: 32, color: "blue" }
})
