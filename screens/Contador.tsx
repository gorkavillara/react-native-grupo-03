import { Button, Text, View } from "react-native"
import { genericStyles } from "../styles"
import { useContadorGlobal } from "../hooks/useContadorGlobal"
import { dobleContador } from "../app/contadorState"
import { useRecoilValue } from "recoil"

const ContadorPrincipal = () => {
    const { contador, incrementa, reset } = useContadorGlobal()
    console.log("Se ha renderizado ContadorPrincipal")
    return (
        <View style={genericStyles.container}>
            <Text style={genericStyles.titulo}>Contador</Text>
            <Text style={genericStyles.titulo}>Valor: {contador}</Text>
            <Button title="Incrementa" onPress={incrementa} />
            <Button title="Reset" onPress={reset} />
        </View>
    )
}

const DisplayDobleContador = () => {
    // const { doble } = useContadorGlobal()
    const doble = useRecoilValue(dobleContador)
    console.log("Se ha renderizado DisplayDobleContador")
    return <Text style={{ fontSize: 36 }}>Doble: {doble}</Text>
}

const Contador = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ContadorPrincipal />
        <DisplayDobleContador />
    </View>
)
export default Contador
