import axios from "axios"
import { atom, selector } from "recoil"

export const pokeId = atom<string>({
    key: "pokeId",
    default: "24"
})

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export const pokeDetails = selector({
    key: "pokeDetails",
    get: async ({ get }) => {
        const newId = get(pokeId)
        const details = await axios.get(`${baseUrl}/${newId}`)
        return details.data
    }
})
