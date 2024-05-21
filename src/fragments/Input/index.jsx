/* eslint-disable react/display-name */
import { forwardRef } from "react";
import style from "./style.module.scss";

const Input = forwardRef(({ label, id, error, ...rest }, ref) => {
    return (
        <div className={style.inputContent}>
            <label htmlFor={id}>{label}</label>
            <input {...rest} id={id} ref={ref} />
            {error ? <p className="helper">{error.message}</p> : null}
        </div>
    );
});

export default Input;
