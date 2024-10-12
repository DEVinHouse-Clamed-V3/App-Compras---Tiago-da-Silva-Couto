/**
 * Exportar:
 * - user {email, nome, id, foto}
 * - login(username, password)
 * - logout()
 * 
 * Regras:
 * 1 - Criar o contexto OK
 * 2 - Criar o provider OK
 * 2.1 - Exportar as variáveis e as funcoes
 * 3 - Construir o hook personalizado (opcional) OK
 */

import { createContext, useState, useContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false)   

    const registeredUser = { 
        username: 'tiago', 
        password: '123', 
        nome: 'Tiago', 
        foto: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' // URL da foto
    };

    function login(username, password) {
        // Valida se o usuário e senha inseridos estão corretos
        if (username === registeredUser.username && password === registeredUser.password) {
            alert(`Bem vindo ${registeredUser.username}`)
            setUser(registeredUser); // Login bem-sucedido
            
        } else {
            alert('Nome de usuário ou senha inválidos!'); // Login falhou
        }
    }

    // function login(username, password) {   
    //     const fakeUser = { 
    //         username: username, 
    //         nome: 'Tiago', 
    //         foto: 'https://', 
    //         password:'1234'}
    //     setUser(fakeUser)
    // }

    function logout() {
        setUser(false)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);