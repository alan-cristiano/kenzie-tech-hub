import style from "./style.module.scss";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTechContext } from "../../../providers/TechContext";

const TechCard = ({ tech }) => {
    const { setEditingTech, deleteTech } = useTechContext();

    return (
        <li data-testid="tech-card" className={style.techCard}>
            <h3 data-testid="tech-title" className="title three">
                {tech.title}
            </h3>
            <div>
                <span data-testid="tech-status" className="headline">
                    {tech.status}
                </span>
                <button
                    data-testid="edit-tech-button"
                    onClick={() => setEditingTech(tech)}
                    aria-label="edit"
                    title="Editar status"
                >
                    <MdOutlineEdit size={18} />
                </button>
                <button
                    data-testid="delete-tech-button"
                    onClick={() => deleteTech.mutate(tech.id)}
                    aria-label="delete"
                    title="Excluir tecnologia"
                >
                    <RiDeleteBin6Line size={18} />
                </button>
            </div>
        </li>
    );
};

export default TechCard;
