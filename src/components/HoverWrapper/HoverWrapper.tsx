import React, { ReactNode } from "react";
import styles from "./HoverWrapper.module.css";
import { debounce } from "lodash";

interface HoverWrapperProps {
    type: string;
    children: ReactNode | null;
    valueHovered: [number, number] | [string, string] | [boolean, boolean];
    sendValueHovered: (value: any) => void;
}

const MOUSEENTER_DEBOUNCE_DELAY = 250;
const MOUSELEAVE_DEBOUNCE_DELAY = 200;

const HoverWrapper = ({
    type,
    children,
    valueHovered,
    sendValueHovered,
}: HoverWrapperProps) => {
    const debouncedHandleMouseEnter = debounce(() => {
        sendValueHovered(valueHovered[0]);
    }, MOUSEENTER_DEBOUNCE_DELAY);

    const debouncedHandleMouseLeave = debounce(() => {
        debouncedHandleMouseEnter.cancel();
        sendValueHovered(valueHovered[1]);
    }, MOUSELEAVE_DEBOUNCE_DELAY);

    return (
        <div
            className={styles[type]}
            onMouseEnter={debouncedHandleMouseEnter}
            onMouseLeave={debouncedHandleMouseLeave}
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            {children}
        </div>
    );
};

export default HoverWrapper;
