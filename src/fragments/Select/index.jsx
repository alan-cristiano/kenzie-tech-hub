/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Select = forwardRef(({ children, id, label, error, ...rest }, ref) => {
    return (
        <div className="selectContent">
            <label htmlFor={id}>{label}</label>
            <select ref={ref} id={id} {...rest}>
                {children}
            </select>
            {error ? <p className="helper">{error.message}</p> : null}
        </div>
    );
});

export default Select;
