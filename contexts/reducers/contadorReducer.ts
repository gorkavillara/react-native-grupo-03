type ReductorAccion = "incrementa" | "decrementa" | "reset"

export const reductorContador = (
    estado: number,
    accion: {
        type: ReductorAccion,
        payload?: any
    }
): number => {
    if (accion.type === "incrementa") {
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        // muchas líneas
        return estado + 1
    }
    if (accion.type === "decrementa") return estado - 1
    if (accion.type === "reset") return 0

    // return acciones[accion](estado)

    return estado
}
