import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTechContext } from "../../../providers/TechContext";
import { MdClose } from "react-icons/md";
import { useHandleOutClick } from "../../../hooks/useHandleOutClick";
import { useHandleKeydown } from "../../../hooks/useHandleKeydown";
import createTechModalSchema from "./createTechModal.schema";
import Input from "../../../fragments/Input";
import Select from "../../../fragments/Select";
import Option from "../../../fragments/Option";
import Button from "../../../fragments/Button";

const CreateTechModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ resolver: zodResolver(createTechModalSchema) });

    const { createTech, setCreateModalIsOpen } = useTechContext();

    const modalRef = useHandleOutClick(() => setCreateModalIsOpen(false));
    const closeModalRef = useHandleKeydown("Escape", (element) => {
        element?.click();
    });

    const submit = (formData) => {
        createTech.mutate(formData);
        reset();
    };

    return (
        <div role="dialog" className="modal__overlay">
            <div ref={modalRef} className="modal__box">
                <div className="modal__header">
                    <h3 className="title three">Cadastrar tecnologia</h3>
                    <button
                        ref={closeModalRef}
                        onClick={() => setCreateModalIsOpen(false)}
                        aria-label="close"
                        title="Fechar"
                    >
                        <MdClose size={21} />
                    </button>
                </div>

                <form
                    data-testid="create-tech-form"
                    onSubmit={handleSubmit(submit)}
                    className="modal__form"
                    noValidate
                >
                    <Input
                        data-testid="tech-name"
                        {...register("title")}
                        label={"Nome da tecnologia"}
                        id={"title"}
                        type={"text"}
                        placeholder={"Digite o nome da tecnologia"}
                        error={errors.title}
                    />
                    <Select
                        data-testid="tech-status"
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
                        text={"Cadastrar tecnologia"}
                        className={"button negative"}
                    />
                </form>
            </div>
        </div>
    );
};

export default CreateTechModal;
