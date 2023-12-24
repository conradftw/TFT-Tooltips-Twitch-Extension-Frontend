import React from "react";
import styles from "./ShopUnitInfoBox.module.css";
import DOMPurify from "dompurify";
import { ShopUnitInfo } from "../../types/InfoBoxProps";

type ShopUnitInfoBoxProp = {
    ability?: ShopUnitInfo;
};

const ShopUnitInfoBox = ({
    ability = {
        champion: "jinx",
        name: "Escalation",
        mainBody: `<p><b>Passive Minigun:</b> Attacks grant 4% (<img src="general/stats/ability_power.png"/>) Attack Speed. <br/>
                    <b>Passive Rocket Launcher:</b> Attacks deal <span class="attackDamage">63 (<img src="general/stats/attack_damage.png"/>)</span> bonus physical damage. <br/>
                    <br/>
                    <b>Active:</b> Swap between Minigun and Rocket Launcher.<br/>
                    <br/>
                    <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Minigun attacks grant an extra 1% Attack Speed, Rocket Launcher attacks deal an extra 10% (<img src="general/stats/attack_damage.png"/>) bonus damage.</span>
                </p>`,
    },
}: ShopUnitInfoBoxProp) => {
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
