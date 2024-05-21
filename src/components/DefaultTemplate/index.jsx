import DashboardHeader from "../headers/DashboardHeader";

const DefaultTemplate = ({ children }) => {
    return (
        <>
            <DashboardHeader />
            <main className="main-dashboard__content">{children}</main>
        </>
    );
};

export default DefaultTemplate;
