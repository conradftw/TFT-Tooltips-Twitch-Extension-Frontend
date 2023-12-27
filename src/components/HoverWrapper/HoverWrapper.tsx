import React, { ReactNode } from "react";
import styles from "./HoverWrapper.module.css";
import { debounce } from "lodash";

interface HoverWrapperProps {
    type: string;
    children: ReactNode | null;
    setIsHovered?: (isHovered: boolean) => void;
    // valueHovered?: any; //
    valueHovered?: [any, any];
    sendValueHovered?: (value: any) => void;
}

const MOUSEENTER_DEBOUNCE_DELAY = 250;
const MOUSELEAVE_DEBOUNCE_DELAY = 200;

const HoverWrapper = ({
    type,
    children,
    setIsHovered,
    // valueHovered = "",
    valueHovered = ["", ""],
    sendValueHovered,
}: HoverWrapperProps) => {
    const debouncedHandleMouseEnter = debounce(() => {
        if (setIsHovered) setIsHovered(true);

        if (sendValueHovered) {
            sendValueHovered(valueHovered[0]);
        }

        console.log(`${type}: Hovered ${valueHovered}`);
    }, MOUSEENTER_DEBOUNCE_DELAY);

    const debouncedHandleMouseLeave = debounce(() => {
        debouncedHandleMouseEnter.cancel();
        if (setIsHovered) setIsHovered(false);

        if (sendValueHovered) {
            sendValueHovered(valueHovered[1]);
        }

        console.log(`${type}: Stopped Hovering ${valueHovered}`);
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
