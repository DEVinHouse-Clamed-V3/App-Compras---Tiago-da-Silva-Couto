// import { Button, Text, View } from "react-native"
// import { useCart } from "../../context/CartContext";

// export const HomePage = () => {
//     const { getTotalItems, clearCart, addItem } = useCart()
//     // const { addItemToCart, getTotalItemCount, getTotalPrice } = useCart();
//     const sampleProduct = {
//         id: '1',
//         name: 'Produto Exemplo',
//         price: 49.99,
//     };

//     return (
//         <View>
//             <Text>Quantidade de Itens no Carrinho: {getTotalItems()}</Text>
//             <Button title="Limpar carrinho" onPress={clearCart}/>
//             <Button title="Adicionar ao Carrinho" onPress={() => addItem(sampleProduct)} />
//             {/*
//             <Text>Total do Carrinho: R$ {getTotalPrice().toFixed(2)}</Text>
//              */}
//         </View>
//     )
// }

// import { Button, Text, View, StyleSheet, TextInput } from "react-native";
// import { useCart } from "../../context/CartContext";

// export const HomePage = () => {
//     const { getTotalItems, clearCart, addItem } = useCart();
//     const sampleProduct = {
//         id: '1',
//         name: 'Produto Exemplo',
//         price: 49.99,
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Quantidade de Itens no Carrinho: {getTotalItems()}</Text>
//             <TextInput
//                 style={styles.searchInput}
//                 placeholder="Buscar produtos..."
//             />
//             <View style={styles.buttonContainer}>
//                 <Button
//                     title="Limpar Carrinho"
//                     onPress={clearCart}
//                     color="#7A42F4"
//                 />
//                 <Button
//                     title="Adicionar ao Carrinho"
//                     onPress={() => addItem(sampleProduct)}
//                     color="#7A42F4"
//                 />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#F5F6FA',
//         alignItems: 'center',
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color: '#333',
//     },
//     searchInput: {
//         height: 50,
//         borderColor: '#7A42F4',
//         borderWidth: 1,
//         borderRadius: 25,
//         paddingHorizontal: 15,
//         marginBottom: 16,
//         backgroundColor: '#FFF',
//         width: '100%', // largura total para o campo de busca
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//     },
// });

import { Button, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { ProductPage } from '../Products/ProductsPage';
import { useNavigation } from '@react-navigation/native';

export const HomePage = () => {
    const navigation = useNavigation();

    const { logout } = useAuth();
  const {
    getTotalItems,
    clearCart,
    addItem,
    paymentMethod,
    updatePaymentMethod,
  } = useCart();
  const sampleProduct = {
    id: '1',
    name: 'Produto Exemplo',
    price: 49.99,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Quantidade de Itens no Carrinho: {getTotalItems()}
      </Text>
      <Text style={styles.paymentMethod}>
        Forma de Pagamento: {paymentMethod}
      </Text>

      {/* Container de Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button} // Aplicando estilo ao botão
          onPress={clearCart}
        >
          <Text style={styles.buttonText}>Limpar Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button} // Aplicando estilo ao botão
          onPress={() => addItem(sampleProduct)}
        >
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button} // Aplicando estilo ao botão
          onPress={() => Alert.alert('Pagar em boleto')}
        >
          <Text style={styles.buttonText}>Trocar Forma de Pagamento</Text>
        </TouchableOpacity>
      </View>

      {/* Botões adicionais abaixo */}
      <View style={styles.additionalButtonsContainer}>
      <Button title="VOLTAR" onPress={() => navigation.navigate('Products')} color="#4CAF50" /> 
        <Button title="FECHAR" onPress={logout} color="#FF9800" />
        <Button title="PAGAR" onPress={()=>{}} color="#9C27B0" />
        <Button title="NOVO" onPress={() => {}} color="#2196F3" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  paymentMethod: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center',
    // justifyContent: 'space-around', // ou 'space-between' se preferir
    // width: '100%',
    marginVertical: 10,
    gap:4
  },
  button: {
    // flex: 1, // Faz com que cada botão ocupe espaço igual
    backgroundColor: '#7A42F4', // Cor de fundo
    borderRadius: 20, // Bordas arredondadas
    justifyContent:'center',
    padding:12,
    // paddingVertical: 15, // Espaçamento vertical
    alignItems: 'center', // Centraliza o texto
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 16, // Tamanho do texto
    fontWeight: 'bold', // Negrito
    textAlign:'center',
  },
  additionalButtonsContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
