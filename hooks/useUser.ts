import { userAtom, loggedInSelector } from "../app/userState"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { ToastAndroid } from "react-native"
import { useMemo, useState } from "react"

const wait = async (seconds: number) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(null), seconds * 1000)
    })

export const useUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useRecoilState(userAtom)
    const resetUser = useResetRecoilState(userAtom)
    const isLoggedInRecoil = useRecoilValue(loggedInSelector)

    const isLoggedIn = useMemo(() => (user === null ? false : true), [user])

    const login = async (username: string, password: string) => {
        if (username === "" || password === "")
            return ToastAndroid.show(
                "🤨 Acuérdate de rellenar todos los campos",
                300
            )

        setIsLoading(true)
        // 1 - chequear en la base de datos
        await wait(2)
        // 2 - Si está correcto, setear el usuario
        setUser({ id: 1, username, role: "Admin" })
        ToastAndroid.show("🔓 Login correcto", 300)
        setIsLoading(false)
    }

    // const logout = () => {
    //     // setUser(null)
    //     resetUser()
    // }
    const logout = resetUser

    return { user, isLoggedIn, isLoggedInRecoil, login, logout, isLoading }
}
