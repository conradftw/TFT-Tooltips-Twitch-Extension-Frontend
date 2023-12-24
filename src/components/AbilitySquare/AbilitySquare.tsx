import React from "react";
import styles from "./AbilitySquare.module.css";

type AbilitySquareProps = {
    champion: string;
};

const AbilitySquare = ({ champion }: AbilitySquareProps) => {
    return (
        <img
            src={`abilities/${champion}.jpg`}
            alt=""
            className={styles.squareIcon}
        />
    );
};

export default AbilitySquare;
