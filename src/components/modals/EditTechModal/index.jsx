import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTechContext } from "../../../providers/TechContext";
import editTechModalSchema from "./editTechModal.schema";
import { useHandleOutClick } from "../../../hooks/useHandleOutClick";
import { useHandleKeydown } from "../../../hooks/useHandleKeydown";
import { MdClose } from "react-icons/md";
import Input from "../../../fragments/Input";
import Select from "../../../fragments/Select";
import Option from "../../../fragments/Option";
import Button from "../../../fragments/Button";

const EditTechModal = () => {
    const { editingTech, setEditingTech, updateTech } = useTechContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        values: {
            title: editingTech?.title,
            status: editingTech?.status,
        },
        resolver: zodResolver(editTechModalSchema),
    });

    const modalRef = useHandleOutClick(() => setEditingTech(null));
    const closeModalRef = useHandleKeydown("Escape", (element) => {
        element?.click();
    });

    const submit = (formData) => {
        const status = formData.status;
        updateTech.mutate({ status });
        reset();
    };

    return (
        <div className="modal__overlay">
            <div ref={modalRef} className="modal__box">
                <div className="modal__header">
                    <h3 className="title three">Editar status</h3>
                    <button
                        ref={closeModalRef}
                        onClick={() => setEditingTech(null)}
                        aria-label="close"
                        title="Fechar"
                    >
                        <MdClose size={21} />
                    </button>
                </div>

                <form
                    data-testid="edit-tech-form"
                    onSubmit={handleSubmit(submit)}
                    className="modal__form"
                    noValidate
                >
                    <Input
                        {...register("title")}
                        label={"Nome da tecnologia"}
                        id={"title"}
                        type={"text"}
                        // placeholder={"Digite o nome da tecnologia"}
                        disabled={"disabled"}
                        error={errors.title}
                    />
                    <Select
                        data-testid="edit-tech-status"
                        {...register("status")}
                        label={"Status"}
                        id={"status"}
                        error={errors.status}
                    >
                        <Option value={""} text={"Selecione"} />
                        <Option value={"Iniciante"} text={"Iniciante"} />
                        <Option
                            value={"Intermediário"}
                            text={"Intermediário"}
                        />
                        <Option value={"Avançado"} text={"Avançado"} />
                    </Select>
                    <Button
                        type={"submit"}
                        text={"Salvar alterações"}
                        className={"button negative"}
                    />
                </form>
            </div>
        </div>
    );
};

export default EditTechModal;
