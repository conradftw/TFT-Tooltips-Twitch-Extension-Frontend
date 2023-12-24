import React from "react";
import styles from "./StatInfoBox.module.css";
import DOMPurify from "dompurify";

type StatInfoBoxProps = {
    stat?: {
        type: string;
        header: string;
        description: string;
        mainBody: string;
    };
};

// stat = {
//     type: "armor",
//     description: "Reduces physical damage taken.",
//     mainBody: `<p>Current Armor: <span class="bonusStat">15</span> (<span class="baseStat">15</span> + <span class="bonusStat">0</span>) <br/>
//                 This champion takes <span class="bonusStat">13</span>% reduced physical damage
//             </p>`,
// },

const StatInfoBox = ({
    stat = {
        type: "armor",
        header: "critical strike chance",
        description:
            "Chance that an attack deals bonus damage. Excess Critical Strike Chance is converted into bonus Critical Strike Damage.",
        mainBody: `<p>Current Critical Strike Chance: <span class="bonusStat">80</span> (<span class="baseStat">25</span> + <span class="bonusStat">55</span>)</p>`,
    },
}: StatInfoBoxProps) => {
    return (
        <div className={styles.statInfoBox}>
            <div className={styles.header}>{stat.header}</div>
            <div className={styles.description}>{stat.description}</div>
            <hr />
            <div
                className={styles.mainBody}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(stat.mainBody),
                }}
            ></div>
        </div>
    );
};

export default StatInfoBox;
