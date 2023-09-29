import { useState, useReducer, useEffect } from "react"
import { reductorContador } from "../contexts/reducers/contadorReducer"

export const useContador = (valorInicial: number = 0) => {
    const [contador, setContador] = useState(valorInicial)
    // const [contador, dispatchContador] = useReducer(reductorContador, 2)
    const incrementa = () => setContador(prev => prev + 1)
    const decrementa = () => setContador(prev => prev - 1)
    const reset = () => setContador(0)
    const sumaX = (x: number) => setContador(prev => prev + x)

    useEffect(() => {
        if (contador !== 0) return

        console.log("El contador es cero!!")
    }, [contador])

    return { contador, incrementa, decrementa, reset, sumaX }
}