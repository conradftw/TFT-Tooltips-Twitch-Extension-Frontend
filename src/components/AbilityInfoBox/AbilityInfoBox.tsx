import React from "react";
import styles from "./AbilityInfoBox.module.css";
import DOMPurify from "dompurify";
import { AbilityInfo } from "../../types/InfoBoxProps";

type AbilityInfoBoxProps = {
    ability: AbilityInfo;
};

const AbilityInfoBox = ({ ability }: AbilityInfoBoxProps) => {
    return (
        <div className={styles.abilityInfoBox}>
            <div className={styles.header}>
                <img
                    src={`abilities/${ability.champion}.jpg`}
                    alt=""
                    className={styles.abilityIcon}
                />
                <p className={styles.abilityName}>{ability.name}</p>
            </div>
            <hr />
            <div
                className={styles.mainBody}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(ability.mainBody),
                }}
            ></div>
            <hr />
            <div
                className={styles.details}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(ability.details),
                }}
            ></div>
        </div>
    );
};

export default AbilityInfoBox;
