import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"

type Theme = "yellow" | "blue" | "red"

const colors = {
    yellow: "#fdddaa",
    blue: "#2252ee",
    red: "#ff335a"
}

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        horizontalContainer: {
            flexDirection: "row",
            gap: 16,
            alignItems: "center"
        }, 
        titulo: {
            fontSize: 24
        },
        tituloClaro: {
            color: colors[theme]
        }
    })
}

export const useCustomTheme = (theme: Theme = "yellow") => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(theme)
    const [styles, setStyles] = useState(getStyles(theme))

    useEffect(() => {
        setStyles(getStyles(currentTheme))
    }, [currentTheme])

    const changeTheme = (theme: Theme) => setCurrentTheme(theme)

    const ThemeProvider = ({ theme, children }: { theme: Theme, children: any }) => <>{children}</>

    return { styles, changeTheme, ThemeProvider }
}
