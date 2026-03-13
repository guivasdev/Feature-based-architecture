import { useRouter } from "expo-router";
import { useState } from "react";
import { users } from "../../../constants/mockdata";


export function useLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [mensage, setMensage] = useState("");

    const router = useRouter();

    function login() {

        if (!email || !password) {
            setError("Preencha todos os campos");
            return;
        }
        setLoading(true)

        const user = users.find(
            u => u.name === email && u.password === password
        );

        if (user)
            router.push("/Home");
        else
            setError("Usuário não encontrado, senha ou usuários incorretos!")

        setLoading(false)

    }

    return {
        email,
        password,
        setEmail,
        setPassword,
        login,
        mensage,
        loading,
        error
    };
}