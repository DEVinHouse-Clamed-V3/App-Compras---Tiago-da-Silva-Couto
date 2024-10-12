// import { Text, View, StyleSheet, Image, FlatList, Button } from "react-native"
// import { useCart } from "../../context/CartContext"

// export const CartPage = () => {

//     const { items, removeItem, getTotalItems, valorTotal } = useCart()

//     const renderProduct = (item) => {
//         return <View style={styles.card}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
//             <Button title="Remover do Carrinho" onPress={() => removeItem(item.id)} />
//         </View>
//     }

//     return (
//         <View style={styles.container}>
//             {getTotalItems() === 0 && <Text>Não existem itens no carrinho</Text>}
//             {items.map(item => {
//                 return renderProduct(item)
//             })}
//             <Text>Valor Total: {valorTotal()}</Text>
//             {/* <FlatList data={items} 
//                 renderItem={renderProduct} 
//                 keyExtractor={(item) => item.id} /> */}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         padding: 16,
//         backgroundColor: '#f5f5f5',
//     },
//     searchInput: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 8,
//         paddingHorizontal: 8,
//         marginBottom: 16,
//     },
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         padding: 16,
//         marginBottom: 16,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         marginBottom: 8,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 4,
//     },
//     price: {
//         fontSize: 16,
//         color: '#888',
//         marginBottom: 8,
//     },
// });

import { Text, View, StyleSheet, Image, FlatList, Button } from "react-native";
import { useCart } from "../../context/CartContext";

export const CartPage = () => {
    const { items, removeItem, getTotalItems, valorTotal } = useCart();

    const renderProduct = (item) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
                <Button title="Remover do Carrinho" onPress={() => removeItem(item.id)} color="#7A42F4" />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {getTotalItems() === 0 ? (
                <Text style={styles.emptyCartText}>Não existem itens no carrinho</Text>
            ) : (
                <>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => renderProduct(item)}
                        keyExtractor={(item) => item.id}
                    />
                    <Text style={styles.totalValue}>Valor Total: R$ {valorTotal().toFixed(2)}</Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F5F6FA',
    },
    emptyCartText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    price: {
        fontSize: 16,
        color: '#888',
        marginBottom: 8,
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        color: '#333',
    },
});