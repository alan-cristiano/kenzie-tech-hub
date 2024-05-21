import { useTechContext } from "../../providers/TechContext";
import TechCard from "./TechCard";
import style from "./style.module.scss";

const TechList = () => {
    const { techList } = useTechContext();

    return (
        <ul className={style.techList}>
            {techList.length > 0 ? (
                techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
            ) : (
                <p className="headline">Nenhuma tecnologia cadastrada.</p>
            )}
        </ul>
    );
};

export default TechList;
