import { useEffect } from "react"
import { contadorState, dobleContador } from "../app/contadorState"
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil"

export const useContadorGlobal = () => {
    const [contador, setContador] = useRecoilState(contadorState)
    const reset = useResetRecoilState(contadorState)
    const doble = useRecoilValue(dobleContador)
    const incrementa = () => setContador((prev) => prev + 1)
    const decrementa = () => setContador((prev) => prev - 1)
    const sumaX = (x: number) => setContador((prev) => prev + x)

    useEffect(() => {
        if (contador !== 0) return

        console.log("El contador es cero!!")
    }, [contador])

    return { contador, incrementa, decrementa, reset, sumaX, doble }
}
