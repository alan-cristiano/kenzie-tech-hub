import RoutesMain from "./routes/RoutesMain";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <>
            <RoutesMain />;
            <ToastContainer autoClose={2500} />;
        </>
    );
};

export default App;
