const Button = ({ text, className, type, logoutUser }) => {
    return (
        <button
            data-testid="user-button"
            onClick={logoutUser}
            className={className}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
