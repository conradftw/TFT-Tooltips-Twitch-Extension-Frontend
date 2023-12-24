import React from "react";
import styles from "./AbilityInfoBox.module.css";
import DOMPurify from "dompurify";
import { AbilityInfo } from "../../types/InfoBoxProps";

type AbilityInfoBoxProps = {
    ability?: AbilityInfo;
};

const AbilityInfoBox = ({
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
        details: `<p>Attack Speed: <span class="attackSpeed">4% (<img src="general/stats/attack_speed.png"/>)</span> = <span class="abilityPower">4% (<img src="general/stats/ability_power.png"/>)</span><br/>
                    Rocket Damage: <span class="attackDamage">63</span> = 50% <img src="general/stats/attack_damage.png"/> 
                </p>`,
    },
}: AbilityInfoBoxProps) => {
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
