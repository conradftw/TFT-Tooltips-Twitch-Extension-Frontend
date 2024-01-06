import React from "react";
import styles from "./StatInfoBox.module.css";
import DOMPurify from "dompurify";
import { UnitStatsInfo } from "../../types/InfoBoxProps";

type StatInfoBoxProps = {
    hoveredStat: string;
    stats: UnitStatsInfo;
};

const StatInfoBox = ({ hoveredStat, stats }: StatInfoBoxProps) => {
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
