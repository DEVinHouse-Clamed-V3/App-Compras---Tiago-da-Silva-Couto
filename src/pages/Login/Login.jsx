// import { useState } from "react"
// import { View, TouchableOpacity, StyleSheet, TextInput, Text } from "react-native"
// import { useAuth } from "../../context/AuthContext"

// export const Login = () => {

//     const { login } = useAuth()

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     function handleLogin() {
//         login(username, password)
//     }

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 value={username}
//                 onChangeText={setUsername} />

//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 secureTextEntry
//                 value={password}
//                 onChangeText={setPassword} />

//             {/* <Button title="Login" onPress={handleLogin} /> */}
//             <TouchableOpacity style={styles.button} onPress={handleLogin}>
//             <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     // container: {
//     //     flex: 1,
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //     backgroundColor: '#F5F6FA',
//     //     padding: 20
//     // },
//     // input: {
//     //     width: '80%',
//     //     height: 40,
//     //     borderColor: '#D9DEFF',
//     //     borderWidth: 1,
//     //     borderRadius: 4,
//     //     marginBottom: 12,
//     //     paddingHorizontal: 10,
//     //     backgroundColor: '#fff'
//     // }

//         container: {
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#1E1E2C', // Fundo escuro moderno
//             padding: 20,
//         },
//         input: {
//             width: '80%',
//             height: 50,
//             marginBottom: 16,
//             borderRadius: 25,
//             paddingHorizontal: 16,
//             backgroundColor: '#2A2A40',
//             color: '#FFFFFF',
//             borderWidth: 1,
//             borderColor: '#56567A',
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 4 },
//             shadowOpacity: 0.2,
//             shadowRadius: 4,
//             elevation: 5, // Para sombra no Android
//         },
//         button: {
//             width: '80%',
//             height: 50,
//             borderRadius: 25,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'linear-gradient(45deg, #6A5ACD, #483D8B)', // Gradiente
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 4 },
//             shadowOpacity: 0.3,
//             shadowRadius: 6,
//             elevation: 8,
//             marginTop: 16,
//         },
//         buttonText: {
//             color: '#FFFFFF',
//             fontSize: 18,
//             fontWeight: 'bold',
//         },
// })

// import { useState } from "react"; // Hook para gerenciar o estado dos inputs
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"; // Importação dos componentes básicos
// import { useAuth } from "../../context/AuthContext"; // Contexto de autenticação
// import { Ionicons } from '@expo/vector-icons'; // Pacote de ícones para os campos de input
// export const Login = () => {
//     const { login } = useAuth(); // Função de login vinda do contexto de autenticação

//     // Definição dos estados para armazenar os valores de username e password
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     // Função que será chamada ao clicar no botão "Login"
//     function handleLogin() {
//         // login(username, password); // Realiza o login passando os dados armazenados nos estados

//             if (!username || !password) {
//                 Alert.alert("Erro", "Por favor, preencha todos os campos!");
//             } else {
//                 login(username, password); // Realiza o login
//                 Alert.alert(`Bem vindo ${username.name}`)
//             }

//     }
//     return (
//         <View style={styles.container}>
//             {/* Container principal que envolve toda a tela */}

//             <View style={styles.header}>
//                 {/* Cabeçalho com a área colorida e a imagem do avatar */}
//                 <Image
//                     source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
//                     style={styles.avatar}
//                 />
//             </View>

//             <View style={styles.form}>
//                 {/* Área do formulário de login */}
//                 <View style={styles.inputContainer}>
//                     {/* Campo de input para email com ícone */}
//                     <Ionicons
//                         name="mail-outline"
//                         size={20}
//                         color="#7D7D7D"
//                         style={styles.icon}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email"
//                         placeholderTextColor="#A0A0A0"
//                         value={username} // Valor controlado pelo estado
//                         onChangeText={setUsername} // Atualiza o estado ao digitar
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     {/* Campo de input para senha com ícone */}
//                     <Ionicons
//                         name="lock-closed-outline"
//                         size={20}
//                         color="#7D7D7D"
//                         style={styles.icon}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Password"
//                         placeholderTextColor="#A0A0A0"
//                         secureTextEntry // Esconde o texto (para senhas)
//                         value={password} // Valor controlado pelo estado
//                         onChangeText={setPassword} // Atualiza o estado ao digitar
//                     />
//                 </View>

//                 <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                     {/* Botão de login que chama a função handleLogin */}
//                     <Text style={styles.buttonText}>Log in</Text>
//                 </TouchableOpacity>

//                 <Text style={styles.footerText}>
//                     {/* Texto de rodapé com opção para registro */}
//                     Don’t have an account? <Text style={styles.signupText}>Sign up</Text>
//                 </Text>
//             </View>
//         </View>
//     );
// }

import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { UserProfile } from './UserProfile'; // Importa o novo componente

export const Login = () => {
  const { login, user } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    } else {
      login(username, password);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.freepik.com/512/771/771241.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Exibe UserProfile se o usuário estiver logado */}
      {user && <UserProfile />}

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#7D7D7D"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A0A0A0"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#7D7D7D"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.signupText}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Container principal que ocupa toda a tela
    flex: 1, // Faz o componente preencher toda a altura disponível
    backgroundColor: '#F5F6FA', // Cor de fundo clara
  },
  header: {
    // Cabeçalho colorido com bordas arredondadas
    backgroundColor: '#7A42F4', // Cor de fundo roxa
    height: '40%', // Ocupa 40% da tela
    borderBottomLeftRadius: 50, // Borda inferior esquerda arredondada
    borderBottomRightRadius: 50, // Borda inferior direita arredondada
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  avatar: {
    // Estilo da imagem do avatar
    width: 200, // Largura do avatar
    height: 200, // Altura do avatar
  },
  form: {
    // Área do formulário de login
    flex: 1, // Preenche o espaço restante abaixo do header
    paddingHorizontal: 30, // Espaçamento horizontal
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  inputContainer: {
    // Contêiner que envolve cada campo de input
    flexDirection: 'row', // Coloca o ícone e o input na mesma linha
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#FFF', // Cor de fundo branca
    borderRadius: 25, // Input com bordas arredondadas
    height: 50, // Altura do campo
    marginBottom: 15, // Espaçamento inferior entre os campos
    paddingHorizontal: 15, // Espaçamento interno horizontal
    width: '100%', // Largura total do campo

    // Sombra para iOS e Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevação para Android
  },
  icon: {
    // Estilo dos ícones nos inputs
    marginRight: 10, // Espaçamento entre o ícone e o campo
  },
  input: {
    // Estilo dos campos de texto
    flex: 1, // Faz o input ocupar o espaço restante
    fontSize: 16, // Tamanho do texto
    color: '#333', // Cor do texto
  },
  button: {
    // Estilo do botão de login
    backgroundColor: '#7A42F4', // Cor de fundo roxa
    borderRadius: 25, // Borda arredondada
    height: 50, // Altura do botão
    width: '100%', // Largura total
    justifyContent: 'center', // Centraliza o texto verticalmente
    alignItems: 'center', // Centraliza o texto horizontalmente
    marginTop: 20, // Espaçamento superior

    // Sombra para iOS e Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevação para Android
  },
  buttonText: {
    // Estilo do texto dentro do botão
    color: '#FFF', // Cor do texto branca
    fontSize: 18, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
  },
  footerText: {
    // Estilo do texto de rodapé
    marginTop: 10, // Espaçamento superior
    color: '#7D7D7D', // Cor do texto
  },
  signupText: {
    // Estilo do link "Sign up"
    color: '#7A42F4', // Cor roxa para destaque
    fontWeight: 'bold', // Texto em negrito
  },
});
