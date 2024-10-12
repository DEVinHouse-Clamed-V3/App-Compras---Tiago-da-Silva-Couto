// import { useState } from 'react'
// import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
// import './gesture-handler.native';

// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/Ionicons'; // Importando o ícone do carrinho

// import { HomePage } from './src/pages/Home/Home.jsx';
// import { CartPage } from './src/pages/Cart/Cart.jsx';
// import { ProductPage } from './src/pages/Products/ProductsPage.jsx';
// import { Login } from './src/pages/Login/Login.jsx';

// import { ThemeProvider } from './src/context/ThemeContext.jsx';
// import { CartProvider, useCart } from './src/context/CartContext.jsx';
// import { AuthProvider, useAuth } from './src/context/AuthContext.jsx';
// // import { CartProvider } from './src/context/CartContext.jsx';

// const Drawer = createDrawerNavigator();

// export default function App() {

//   return (
//     <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
//       <AuthProvider>
//         <ThemeProvider>
//           <CartProvider>
//             <NavigationContainer>
//               <StatusBar
//                 backgroundColor="transparent"
//                 translucent={true}
//                 barStyle="dark-content" // Define o estilo do conteúdo da StatusBar (claro ou escuro)
//               />
//               <Navigation />
//             </NavigationContainer>
//           </CartProvider>
//         </ThemeProvider>
//       </AuthProvider>
//     </SafeAreaView>

//   )
// }

// const Navigation = () => {

//   const { user } = useAuth()
//   // const user = true;

//   return (
//     <>
//       {user ?
//         <Drawer.Navigator initialRouteName="Products">
//           <Drawer.Screen
//             name="E-Commerce"
//             component={HomePage}
//             options={{
//               headerRight: () => <CartIconWithNavigation />,
//               title: 'MagaLu',
//             }} />
//             <Drawer.Screen name="Products" component={ProductPage} options={{
//             headerRight: () => <CartIconWithNavigation />,
//             title: 'Produtos',
//           }} />
//           <Drawer.Screen name="Cart" component={CartPage} />
//         </Drawer.Navigator> : <Login />}
//     </>
//   )
// }

// const CartIconWithNavigation = () => {
//   const navigation = useNavigation();
//   const { getTotalItems } = useCart()

//   return (
//     <TouchableOpacity
//       style={styles.cartContainer}
//       onPress={() => navigation.navigate('Cart')}
//     >
//       <Icon name="cart-outline" size={24} color="#000" />
//       <Text style={styles.cartCount}>{getTotalItems()}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   cartContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   cartCount: {
//     marginLeft: 4,
//     fontSize: 16,
//     color: '#000',
//     fontWeight: 'bold',
//   },
// });

import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import './gesture-handler.native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons'; // Importando o ícone do carrinho

import { HomePage } from './src/pages/Home/Home.jsx';
import { CartPage } from './src/pages/Cart/Cart.jsx';
import { ProductPage } from './src/pages/Products/ProductsPage.jsx';
import { Login } from './src/pages/Login/Login.jsx';

import { ThemeProvider } from './src/context/ThemeContext.jsx';
import { CartProvider, useCart } from './src/context/CartContext.jsx';
import { AuthProvider, useAuth } from './src/context/AuthContext.jsx';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <NavigationContainer>
              <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle="dark-content" // Define o estilo do conteúdo da StatusBar (claro ou escuro)
              />
              <Navigation />
            </NavigationContainer>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaView>
  );
}

const Navigation = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <Drawer.Navigator
          initialRouteName="Produtos"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#F5F6FA', // Cor de fundo do drawer
              width: 240,
            },
            drawerLabelStyle: {
              color: '#7A42F4', // Cor dos rótulos dos itens do drawer
              fontSize: 16,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#7A42F4', // Cor do cabeçalho
            },
            headerTintColor: '#FFFFFF', // Cor do texto do cabeçalho
          }}
        >
          <Drawer.Screen
            name="E-Commerce"
            component={HomePage}
            options={{
              headerRight: () => <CartIconWithNavigation />,
              title: 'Tela de carrinho',
            }}
          />
          <Drawer.Screen
            name="Products"
            component={ProductPage}
            options={{
              headerRight: () => <CartIconWithNavigation />,
              title: 'Produtos',
            }}
          />
          <Drawer.Screen name="Cart" component={CartPage} 
          options={{
            headerRight: () => <CartIconWithNavigation />,
              title: 'Carrinho',
          }}
          />
        </Drawer.Navigator>
      ) : (
        <Login />
      )}
    </>
  );
};

const CartIconWithNavigation = () => {
  const navigation = useNavigation();
  const { getTotalItems } = useCart();

  return (
    <TouchableOpacity
      style={styles.cartContainer}
      onPress={() => navigation.navigate('Cart')}
    >
      <Icon name="cart-outline" size={24} color="#000" />
      <Text style={styles.cartCount}>{getTotalItems()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  cartCount: {
    marginLeft: 4,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
