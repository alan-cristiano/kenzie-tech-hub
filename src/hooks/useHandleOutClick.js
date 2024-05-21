import { useRef, useEffect } from "react";

export const useHandleOutClick = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleOutClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                if (callback) callback();
            }
        };

        window.addEventListener("mousedown", handleOutClick);

        return () => {
            window.removeEventListener("mousedown", handleOutClick);
        };
    }, []);

    return ref;
};
