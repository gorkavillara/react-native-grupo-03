import { atom, selector } from "recoil"

export const contadorState = atom({
    key: "contadorState",
    default: 10
})

export const dobleContador = selector({
    key: "dobleContador",
    get: ({ get }) => {
        const valorContador = get(contadorState)
        return 2 * valorContador
    }
})