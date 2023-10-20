import { atom, selector } from "recoil"

type Role = "Admin" | "Customer" | "StoreManager"

interface User {
    id: number
    username: string
    role: Role
}

export const userAtom = atom<null | User>({
    key: "user",
    default: null
    // default: { id: 1, username: "gorka", role: "StoreManager" }
})

export const loggedInSelector = selector({
    key: "loggedIn",
    get: ({ get }) => { 
        const currentUser = get(userAtom)
        return currentUser === null ? false : true
    }
})