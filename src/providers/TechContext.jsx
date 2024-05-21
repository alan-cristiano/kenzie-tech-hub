import { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "./UserContext";
import api from "../services";
import { toast } from "react-toastify";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
    const [editingTech, setEditingTech] = useState(null);
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const { techList, setTechList } = useUserContext();

    const createTech = useMutation({
        mutationFn: async (techData) => {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.post("/users/techs", techData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return data;
        },
        onSuccess: (data) => {
            setTechList([...techList, data]);
            setCreateModalIsOpen(false);
            toast.success("Tecnologia cadastrada com sucesso.");
        },
        onError: (error) => {
            console.log(error);
            if (
                error.response.data.message ===
                "User Already have this technology created you can only update it"
            ) {
                toast.error(
                    "Tecnologia existente. Por favor verifique as informações."
                );
            } else {
                toast.error("Um erro ocorreu. Por favor, tente novamente.");
            }
        },
    });

    const updateTech = useMutation({
        mutationFn: async (status) => {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.put(
                `/users/techs/${editingTech.id}`,
                status,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return data;
        },
        onSuccess: (data) => {
            const newTechsList = techList.map((tech) => {
                if (tech.id === editingTech.id) {
                    return data;
                } else {
                    return tech;
                }
            });
            setTechList(newTechsList);
            setEditingTech(null);
            toast.success("Status editado com sucesso.");
        },
        onError: (error) => {
            console.log(error);
            toast.error("Um erro ocorreu. Por favor, tente novamente.");
        },
    });

    const deleteTech = useMutation({
        mutationFn: async (techId) => {
            const token = localStorage.getItem("@TOKEN");
            await api.delete(`/users/techs/${techId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            return techId;
        },
        onSuccess: (data) => {
            const newTechsList = techList.filter((tech) => tech.id !== data);
            setTechList(newTechsList);
            toast.success("Tecnologia excluída com sucesso.");
        },
        onError: (error) => {
            console.log(error);
            toast.error("Um erro ocorreu. Por favor, tente novamente.");
        },
    });

    return (
        <TechContext.Provider
            value={{
                techList,
                createTech,
                setCreateModalIsOpen,
                createModalIsOpen,
                updateTech,
                setEditingTech,
                editingTech,
                deleteTech,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};

const useTechContext = () => useContext(TechContext);
export { TechProvider, useTechContext };
