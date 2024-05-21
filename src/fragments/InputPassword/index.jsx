/* eslint-disable react/display-name */
import { forwardRef, useState } from "react";
import style from "./style.module.scss";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputPassword = forwardRef(({ label, id, error, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState(true);
    const inputType = isHidden ? "password" : "text";

    return (
        <div className={style.inputContent}>
            <label htmlFor={id}>{label}</label>
            <div>
                <input type={inputType} {...rest} id={id} ref={ref} />
                <button type="button" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? (
                        <FaRegEyeSlash size={21} />
                    ) : (
                        <FaRegEye size={21} />
                    )}
                </button>
            </div>
            {error ? <p className="helper">{error.message}</p> : null}
        </div>
    );
});

export default InputPassword;
