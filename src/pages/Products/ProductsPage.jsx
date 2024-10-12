// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, Image, Button, StyleSheet } from 'react-native';
// import { useAuth } from '../../context/AuthContext';
// import { useCart } from '../../context/CartContext';

// const products = [
//   { id: '1', name: 'Camisa', price: 29.99, image: 'https://via.placeholder.com/150' },
//   { id: '2', name: 'Calça', price: 49.99, image: 'https://via.placeholder.com/150' },
//   { id: '3', name: 'Tênis', price: 89.99, image: 'https://via.placeholder.com/150' },
//   { id: '4', name: 'Jaqueta', price: 99.99, image: 'https://via.placeholder.com/150' },
//   { id: '5', name: 'Boné', price: 19.99, image: 'https://via.placeholder.com/150' },
// ];

// export const ProductPage = () => {
//   const { logout } = useAuth()
//   const { addItem } = useCart()

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query) {
//       const filteredData = products.filter((product) =>
//         product.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredProducts(filteredData);
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   function handleAddCart(item) {
//     addItem(item)
//     alert(`${item.name} adicionado ao carrinho!`)
//   }

//   const renderProduct = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
//       <Button title="Adicionar ao Carrinho" onPress={() => handleAddCart(item)} />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Button title="Logout" onPress={logout}/>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Buscar produto..."
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//       <FlatList
//         data={filteredProducts}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   searchInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginBottom: 8,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 8,
//   },
// });

import React, { useState , useEffect}  from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const products = [
  { id: '1', name: 'Playstation 3', price: 1500.00, image: 'https://m.media-amazon.com/images/I/61AlsXa+zdL._AC_UF1000,1000_QL80_.jpg' },
  { id: '2', name: 'Xbox One', price: 1799.99, image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/10/25/xboxdlogoconslesensrcontrollerfgreenbgrgb2013-1.jpg' },
  { id: '3', name: 'Nintendo Switch', price: 2999.00, image: 'https://cdn.awsli.com.br/2500x2500/524/524499/produto/146393035/82997fa384.jpg' },
  { id: '4', name: 'Playstation 5', price: 4999.99, image: 'https://a-static.mlcdn.com.br/470x352/console-playstation-5-ps5-sony/magazineluiza/043079500/9d4f0cd7244929620b459cf9fd5e471c.jpg' },
  { id: '5', name: 'Controle do Xbox', price: 349.99, image: 'https://assets.xboxservices.com/assets/55/83/55836945-e141-4d47-9dad-21d902948816.jpg?n=111101_Gallery-0_1_1350x759.jpg' },
  { id: '6', name: 'Controle do Playstation', price: 299.99, image: 'https://m.media-amazon.com/images/I/5102Pp-TfHL._AC_UF894,1000_QL80_.jpg' },
  { id: '7', name: 'Fone de Ouvido Gaming', price: 199.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08__Ib3T5bhq_XaIiS3zHaCL23S4ezFCvEg&s' },
  { id: '8', name: 'Playstation Portable - PSP', price: 300.00, image: 'https://ultraeletronicos.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/s/psp-3000_-_2.jpeg' },
  { id: '9', name: 'Nitendo 3DS', price: 800.00, image: 'https://cdn.awsli.com.br/2500x2500/1799/1799670/produto/203087991/61maqxbmosl-_ac_sl1000_-we0mzvzdee.jpg' },
  { id: '10', name: 'Playstation 4', price: 2000, image: 'https://images.tcdn.com.br/img/img_prod/1211726/playstation_4_fat_500gb_seminovo_623_1_60c84cfb7ab29fa9dfd8ce90d6e61349.png' },
];


export const ProductPage = () => {
  const { logout } = useAuth();
  const { addItem } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Função para filtrar produtos sempre que searchQuery mudar
    const filterProducts = () => {
      if (searchQuery) {
        const filteredData = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filteredData);
      } else {
        setFilteredProducts(products);
      }
    };

    filterProducts(); // Chama a função de filtragem
  }, [searchQuery]); // Executa o efeito sempre que searchQuery mudar

  function handleAddCart(item) {
    addItem(item);
    Alert.alert(`${item.name} adicionado ao carrinho!`);
  }

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleAddCart(item)}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produto..."
        placeholderTextColor="#A0A0A0"
        value={searchQuery}
        onChangeText={setSearchQuery} // Atualiza a pesquisa diretamente
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F6FA',
  },
  logoutButton: {
    backgroundColor: '#7A42F4', // Cor do botão de logout
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutText: {
    color: '#FFF', // Cor do texto do botão de logout
    fontWeight: 'bold',
  },
  searchInput: {
    height: 50,
    borderColor: '#7A42F4', // Cor da borda do campo de busca
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: '#FFF', // Cor de fundo do campo de busca
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
    width: 200,
    height: 200,
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
  button: {
    backgroundColor: '#7A42F4', // Cor do botão "Adicionar ao Carrinho"
    borderRadius: 25,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF', // Cor do texto do botão "Adicionar ao Carrinho"
    fontSize: 16,
    fontWeight: 'bold',
  },
});
