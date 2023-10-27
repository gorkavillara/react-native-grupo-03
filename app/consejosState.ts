import { atom } from "recoil"
import { Consejo } from "../models"

const consejos: Consejo[] = [
    {
        texto: "Ponte una rebequita que está refrescando",
        id: 0,
        completado: false
    },
    { texto: "Medita 5 minutos", id: 1, completado: false },
    { texto: "Lee 5 páginas", id: 2, completado: false },
    {
        texto: "Cómetelo todo que hay gente que se muere de hambre",
        id: 3,
        completado: false
    },
    { texto: "Bebe mucha agua", id: 4, completado: false }
]

export const consejosAtom = atom({
    key: "consejos",
    default: consejos
})
