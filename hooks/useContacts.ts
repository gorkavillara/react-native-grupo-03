import * as Contacts from "expo-contacts"
import { useState } from "react"

export const useContacts = () => {
    const [contacts, setContacts] = useState<Contacts.Contact[]>([])

    const getContacts = async () => {
        const contactRes = await Contacts.getContactsAsync({
            fields: ["firstName", "addresses", "emails"]
        })
        setContacts(contactRes.data)
    }

    return { requestContactPermission, contacts, getContacts }
}

const requestContactPermission = async () => {
    const permission = await Contacts.requestPermissionsAsync()

    if (!permission.granted) {
        console.log("Permiso a contactos no otorgado")
    }
}
