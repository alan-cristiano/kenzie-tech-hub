import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import api from "../services";
import { toast } from "react-toastify";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [techList, setTechList] = useState([]);
    const navigate = useNavigate();

    const userRegister = useMutation({
        mutationFn: async (userData) => {
            const { data } = await api.post("/users", userData);
            return data;
        },
        onSuccess: () => {
            toast.success("Usuário cadastrado com sucesso.");
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
            if (error.response.data.message === "Email already exists") {
                toast.error(
                    "E-mail já cadastrado. Por favor, verifique os dados informados."
                );
            } else {
                toast.error("Um erro ocorreu. Por favor, tente novamente.");
            }
        },
    });

    const userLogin = useMutation({
        mutationFn: async (formData) => {
            const { data } = await api.post("/sessions", formData);
            return data;
        },
        onSuccess: (data) => {
            setUser(data.user);
            setTechList(data.user.techs);
            localStorage.setItem("@TOKEN", data.token);
            navigate("/dashboard");
        },
        onError: (error) => {
            console.log(error);
            if (
                error.response.data.message ===
                "Incorrect email / password combination"
            ) {
                toast.error(
                    "Credenciais inválidas. Por favor, tente novamente."
                );
            } else {
                toast.error("Um erro ocorreu. Por favor, tente novamente.");
            }
        },
    });

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");

            if (token) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(data);
                    setTechList(data.techs);
                    navigate("/dashboard");
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem("@TOKEN");
                }
            }
        };
        loadUser();
    }, []);

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                userLogin,
                userRegister,
                logoutUser,
                techList,
                setTechList,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };
