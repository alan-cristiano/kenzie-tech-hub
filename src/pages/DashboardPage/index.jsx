import DefaultTemplate from "../../components/DefaultTemplate";
import TechList from "../../components/TechList";
import CreateTechModal from "../../components/modals/CreateTechModal";
import EditTechModal from "../../components/modals/EditTechModal";
import { useTechContext } from "../../providers/TechContext";
import { useUserContext } from "../../providers/UserContext";

const DashboardPage = () => {
    const { user } = useUserContext();
    const { createModalIsOpen, setCreateModalIsOpen, editingTech } =
        useTechContext();

    return (
        <div className="container">
            <DefaultTemplate>
                <div className="main-user__container">
                    <section className="user__content">
                        <h1
                            data-testid="user-name"
                            className="title one"
                        >{`Olá, ${user?.name}!`}</h1>
                        <span
                            data-testid="user-course-module"
                            className="headline"
                        >{`${user?.course_module}`}</span>
                    </section>
                </div>

                <section className="info__content">
                    <div className="title__container">
                        <h2 className="title two">Tecnologias</h2>
                        <button
                            data-testid="add-tech"
                            onClick={() => setCreateModalIsOpen(true)}
                            aria-label="add"
                            title="Adicionar tecnologia"
                        >
                            +
                        </button>
                    </div>
                    <TechList />
                </section>

                {createModalIsOpen ? <CreateTechModal /> : null}
                {editingTech ? <EditTechModal /> : null}
            </DefaultTemplate>
        </div>
    );
};

export default DashboardPage;
