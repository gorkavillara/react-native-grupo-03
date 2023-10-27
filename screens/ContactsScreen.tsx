import { Text, View, Button, FlatList } from "react-native"
import React from "react"
import { genericStyles } from "../styles"
import { useContacts } from "../hooks/useContacts"

const ContactsScreen = () => {
    const { getContacts, contacts } = useContacts()

    console.log(contacts)
    return (
        <View style={genericStyles.container}>
            <Text>ContactsScreen</Text>
            <Button title="Obtén contactos" onPress={getContacts} />
            {contacts.length > 0 && (
                <FlatList
                    data={contacts}
                    renderItem={(contact) => (
                        <Text>{contact.item.firstName}</Text>
                    )}
                />
            )}
        </View>
    )
}

export default ContactsScreen
