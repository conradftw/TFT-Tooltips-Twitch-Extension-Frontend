import React from "react";
import styles from "./ShopUnitInfoBox.module.css";
import DOMPurify from "dompurify";
import { ShopUnitInfo } from "../../types/InfoBoxProps";

type ShopUnitInfoBoxProp = {
    ability: ShopUnitInfo;
};

const ShopUnitInfoBox = ({ ability }: ShopUnitInfoBoxProp) => {
    return (
        <div className={styles.shopUnitInfoBox}>
            <div className={styles.abilityIcon}>
                <img
                    src={`abilities/${ability.champion}.jpg`}
                    alt={`${ability.champion}_ability_icon`}
                />
            </div>
            <div className={styles.abilityText}>
                <div className={styles.abilityName}>{ability.name}</div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(ability.mainBody),
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ShopUnitInfoBox;
