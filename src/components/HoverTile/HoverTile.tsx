import styles from "./HoverTile.module.css";
import React from "react";
import { debounce } from "lodash";

type HoverTileProps = {
    index: number;
    type: "trait" | "shop";
    setIndex: (index: number) => void; //React.Dispatch<React.SetStateAction<number>>;
    setIsListHovered: (isTraitListHovered: boolean) => void;
};

const HoverTile = ({
    index,
    type,
    setIndex,
    setIsListHovered,
}: HoverTileProps) => {
    const debouncedHandleMouseEnter = debounce(() => {
        setIsListHovered(true);
        setIndex(index);
        console.log(index);
    }, 500);

    const handleOnMouseLeave = () => {
        debouncedHandleMouseEnter.cancel();
        setIsListHovered(false);
    };

    return (
        <div
            className={type === "trait" ? styles.traitTile : styles.shopTile}
            onMouseEnter={debouncedHandleMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            key={index}
        >
            {/* Tile #{index} */}
        </div>
    );
};

export default HoverTile;
