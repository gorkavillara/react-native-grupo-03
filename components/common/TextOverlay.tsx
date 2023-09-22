import { StyleSheet, Text, View } from "react-native"
import React from "react"

interface TextOverlayProps {
    primaryText: string
    secondaryText: string
}

const TextOverlay = ({ primaryText, secondaryText }: TextOverlayProps) => {
    return (
        <View style={styles.overlayContainer}>
            <Text style={styles.primaryText}>{primaryText}</Text>
            <Text style={styles.secondaryText}>{secondaryText}</Text>
        </View>
    )
}

export default TextOverlay

const styles = StyleSheet.create({
    overlayContainer: {
        flex: 1,
        position: "relative"
    },
    primaryText: {
        position: "absolute",
        right: 0,
        bottom: 0,
        fontSize: 96,
        paddingVertical: 0,
        fontWeight: "800",
        verticalAlign: "bottom",
        textTransform: "uppercase",
        textAlign: "right",
        opacity: 0.1,
        zIndex: 20
    },
    secondaryText: {
        position: "absolute",
        verticalAlign: "bottom",
        right: 0,
        bottom: 20,
        fontSize: 24,
        textAlign: "right",
        fontWeight: "600",
        color: "#aa0",
        zIndex: 10
    }
})
