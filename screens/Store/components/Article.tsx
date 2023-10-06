import { StyleSheet, Text, View, Image } from "react-native"
import { Product } from "../../../models"
import { useNavigation, NavigationProp } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Ionicons"
import { Pressable } from "react-native"
import { StackScreensType } from "../../../navigation/stacks/StoreStack"

const Article = ({ product }: { product: Product }) => {
    const navigation =
        useNavigation<NavigationProp<StackScreensType, "Store">>()

    return (
        <View style={{ gap: 16, flex: 1, margin: 16 }}>
            <View
                style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    height: 200,
                    shadowColor: "#4444",
                    shadowOffset: { height: 10, width: 10 },
                    elevation: 10
                }}
            >
                <Image
                    source={{ uri: product.image }}
                    style={{ height: "100%" }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>
                        {product.title}
                    </Text>
                    <Text style={{ fontWeight: "600", color: "#F45858" }}>
                        $ {product.price}
                    </Text>
                </View>
                <Pressable
                    style={{ backgroundColor: "white", borderRadius: 32 }}
                    onPress={() => navigation.navigate("Details", { product })}
                >
                    <Icon name="arrow-forward" size={30} color="#777" />
                </Pressable>
            </View>
        </View>
    )
}

export default Article
