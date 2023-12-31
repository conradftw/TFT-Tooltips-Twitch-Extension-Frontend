import React from "react";
import styles from "./TraitInfoBox.module.css";
import DOMPurify from "dompurify";
import { MiniChampionInfo, TraitInfo } from "../../types/InfoBoxProps";

type TraitInfoBoxProps = {
    type: string;
    traitObj?: TraitInfo;
};

type ChampionInfoProps = {
    champion: MiniChampionInfo;
};

const ChampionInfo = ({ champion }: ChampionInfoProps) => {
    const traitItems = [];
    for (const trait of champion.traits) {
        const traitItem = <div key={trait}>{trait}</div>;

        traitItems.push(traitItem);
    }

    return (
        <div className={styles.championInfo}>
            <p>{champion.displayName}</p>
            <div className={styles.championInfoMain}>
                <img
                    src={`champion_squares/${champion.name}_square.jpg`}
                    alt={champion.name}
                    key={champion.name}
                    className={styles[`border_${champion.cost}cost`]}
                />
                <div className={styles.championInfoTraits}>{traitItems}</div>
            </div>
        </div>
    );
};

const TraitInfoBox = ({
    type,
    traitObj = {
        name: "edgelord",
        displayName: "Edgelord",
        activeCount: 6,
        description: `Edgelords gain Attack Speed, which doubles when their target drops below 50% Health. Edgelords with 1-hex range also dash through them on their next attack.`,
        intervals: [
            {
                count: 3,
                text: `30% <img src="general/stats/attack_speed.png"/>`,
            },
            {
                count: 5,
                text: `45% <img src="general/stats/attack_speed.png"/>`,
            },
            {
                count: 7,
                text: `70% <img src="general/stats/attack_speed.png"/>`,
            },
        ],
        champions: [
            {
                name: "yasuo",
                displayName: "Yasuo",
                cost: 1,
                traits: ["true_damage", "edgelord"],
            },
            {
                name: "kayle",
                displayName: "Kayle",
                cost: 2,
                traits: ["pentakill", "edgelord"],
            },
            {
                name: "riven",
                displayName: "Riven",
                cost: 3,
                traits: ["8bit", "edgelord"],
            },
            {
                name: "yone",
                displayName: "Yone",
                cost: 3,
                traits: ["heartsteel", "edgelord", "crowd_diver"],
            },
            {
                name: "viego",
                displayName: "Viego",
                cost: 4,
                traits: ["pentakill", "edgelord"],
            },
            {
                name: "kayn",
                displayName: "Kayn",
                cost: 5,
                traits: ["heartsteel", "edgelord", "wildcard"],
            },
            {
                name: "kayn",
                displayName: "Kayn",
                cost: 3,
                traits: ["heartsteel", "edgelord", "wildcard"],
            },
        ],
    },
}: TraitInfoBoxProps) => {
    const intervalItems = [];
    let activeInterval = 0;
    for (const interval of traitObj.intervals) {
        if (traitObj.activeCount >= interval.count) {
            activeInterval = interval.count;
        }
    }

    for (const interval of traitObj.intervals) {
        const intervalItem = (
            <li
                className={
                    activeInterval === interval.count
                        ? styles.activeEffect
                        : styles.inactiveEffect
                }
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        `(${interval.count}) ` + interval.text
                    ),
                }}
                key={interval.count}
            ></li>
        );

        intervalItems.push(intervalItem);
    }

    const championSquares = [];
    for (const champion of traitObj.champions) {
        const championSquare = (
            <ChampionInfo
                champion={champion}
                key={champion.name + champion.cost}
            />
        );
        championSquares.push(championSquare);
    }

    return (
        <div className={styles[type]}>
            <div className={styles.header}>
                <img
                    src={`traits/${traitObj.name}.jpg`}
                    alt={`${traitObj.name}_icon`}
                    className={styles.traitIcon}
                />
                <p className={styles.traitName}>{traitObj.displayName}</p>
            </div>
            <div
                className={styles.description}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(traitObj.description),
                }}
            ></div>
            <ul className={styles.intervalsList}>{intervalItems}</ul>
            <div className={styles.championSquaresContainer}>
                <div className={styles.championSquares}>{championSquares}</div>
            </div>
        </div>
    );
};

export default TraitInfoBox;
