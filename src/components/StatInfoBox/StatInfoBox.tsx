import React from "react";
import styles from "./StatInfoBox.module.css";
import DOMPurify from "dompurify";
import { StatInfo, UnitStatsInfo } from "../../types/InfoBoxProps";

type StatInfoBoxProps = {
    hoveredStat?: string;
    stats?: UnitStatsInfo;
};

// stat = {
//     type: "armor",
//     description: "Reduces physical damage taken.",
//     mainBody: `<p>Current Armor: <span class="bonusStat">15</span> (<span class="baseStat">15</span> + <span class="bonusStat">0</span>) <br/>
//                 This champion takes <span class="bonusStat">13</span>% reduced physical damage
//             </p>`,
// },

const StatInfoBox = ({
    hoveredStat = "attack_damage",
    stats = {
        attack_damage: {
            type: "attack_damage",
            header: "Attack Damage",
            description: "The amount of damage dealt when attacking.",
            mainBody: `<p>Current Critical Strike Chance: <span class="bonusStat">80</span> (<span class="baseStat">25</span> + <span class="bonusStat">55</span>)</p>`,
        },
    },
}: StatInfoBoxProps) => {
    return (
        <div className={styles.statInfoBox}>
            <div className={styles.header}>{stats[hoveredStat].header}</div>
            <div className={styles.description}>
                {stats[hoveredStat].description}
            </div>
            <hr />
            <div
                className={styles.mainBody}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(stats[hoveredStat].mainBody),
                }}
            ></div>
        </div>
    );
};

export default StatInfoBox;
