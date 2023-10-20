import { Button, StyleSheet, Text, View } from "react-native"
import { genericStyles } from "../styles"
import { contadorState } from "../app/contadorState"
import { useRecoilState, useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil"

const Contador = () => {
    console.log(contadorState)
    // const [contador, setContador] = useRecoilState(contadorState)
    const setContador = useSetRecoilState(contadorState)
    const contador = useRecoilValue(contadorState)
    const resetContador = useResetRecoilState(contadorState)

    const incrementaContador = () => {
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(contador + 1)
        // setContador(prev => prev + 1)
        // setContador(prev => prev + 1)
        // setContador(prev => prev + 1)
        setContador(prev => prev + 1)
    }
    return (
        <View style={genericStyles.container}>
            <Text style={genericStyles.titulo}>Contador</Text>
            <Text style={genericStyles.titulo}>Valor: {contador}</Text>
            <Button title="Incrementa" onPress={incrementaContador} />
            <Button title="Reset" onPress={resetContador} />
        </View>
    )
}

export default Contador

const styles = StyleSheet.create({})
