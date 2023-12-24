import React, { useState, useEffect } from "react";
import styles from "./UnitInfoBox.module.css";
import AbilitySquare from "../AbilitySquare/AbilitySquare";
import HoverWrapper from "../HoverWrapper/HoverWrapper";
import { UnitInfo } from "../../types/InfoBoxProps";

type UnitInfoBoxProps = {
    unit?: UnitInfo;
    onHoverAbilitySquare: (showAbilityInfoBox: boolean) => void;
    onHoverTrait: (showUnitTraitInfoBox: boolean) => void;
    setHoveredTrait: (hoveredTrait: string) => void;
    onHoverStat: (showStatInfoBox: boolean) => void;
};

const UnitInfoBox = ({
    unit = {
        name: "ahri",
        cost: 2,
        star_level: 2,
        // traits: ["mixmaster", "spellweaver", "kda"],
        traits: [
            {
                internalName: "set10_dj",
                name: "mixmaster",
                displayName: "Mixmaster",
            },
            {
                internalName: "set10_spellweaver",
                name: "spellweaver",
                displayName: "Spellweaver",
            },
            {
                internalName: "set10_kda",
                name: "kda",
                displayName: "K/DA",
            },
        ],
        current_health: 70,
        max_health: 100,
        current_mana: 50,
        max_mana: 100,
        position_type: "front",
        range: 4,
        stats: {
            attack_damage: 10,
            ability_power: 20,
            armor: 30,
            magic_resist: 40,
            attack_speed: 50,
            crit_chance: 60,
            crit_damage: 70,
        },
        ability: {
            name: "Escalation",
            mainBody: `<p<b>Passive Minigun: </b> Attacks grant 4% (<img src="general/stats/ability_power.png"/>) 
                    xddasdasda <hr/> sdaaaaaaaaaaaaaaaaaa</p>`,
            details: `xdd`,
        },
    },
    onHoverAbilitySquare,
    onHoverTrait,
    setHoveredTrait,
    onHoverStat,
}: UnitInfoBoxProps) => {
    const [isAbilitySquareHovered, setIsAbilitySquareHovered] = useState(false);

    useEffect(() => {
        onHoverAbilitySquare(isAbilitySquareHovered);
    }, [onHoverAbilitySquare, isAbilitySquareHovered]);

    const unitTraits = [];
    for (const trait of unit.traits) {
        const unitTrait = (
            <HoverWrapper
                type="unitTrait"
                setIsHovered={onHoverTrait}
                valueHovered={trait.name}
                sendValueHovered={setHoveredTrait}
                key={trait.name}
            >
                <img
                    src={`traits/${trait.name}.jpg`}
                    className={styles.traitIcon}
                    alt={trait.name}
                />
                <p className={styles.traitText}>{trait.displayName}</p>
            </HoverWrapper>
        );
        unitTraits.push(unitTrait);
    }

    const statItems = [];
    const statTypes = [
        "attack_damage",
        "ability_power",
        "armor",
        "magic_resist",
        "attack_speed",
        "crit_chance",
        "crit_damage",
    ];

    for (const stat of statTypes) {
        const statItem = (
            <HoverWrapper
                type="statItem"
                setIsHovered={onHoverStat}
                valueHovered={stat}
                key={stat}
            >
                <img
                    src={`general/stats/${stat}.png`}
                    alt=""
                    className={styles.statIcon}
                />

                {unit.stats[stat]}
            </HoverWrapper>
        );
        statItems.push(statItem);
    }

    const getUnitSellCost = () => {
        if (unit.cost === 1) {
            return Math.pow(3, unit.star_level - 1);
        }
        return unit.cost * Math.pow(3, unit.star_level - 1) - 1;
    };

    return (
        <div className={styles.border1}>
            <div className={styles.unitInfoBox}>
                <div className={styles.starLevelContainer}>
                    <img
                        src={`general/${unit.star_level}star.png`}
                        alt="star_level_icon"
                        className={styles.starLevelIcon}
                    />
                </div>
                <div className={styles.splash}>
                    <img
                        className={styles.image1}
                        src={`champion_splashes/${unit.name}.jpg`}
                        alt={`${unit.name}_splash`}
                    />
                    <div className={styles.traits}>
                        <ul>{unitTraits}</ul>
                    </div>
                </div>

                <div className={styles.costBanner}>
                    <img
                        src={`general/cost_banners/banner_${unit.cost}cost.png`}
                        alt=""
                        className={styles.image1}
                    />

                    <div className={styles.costBannerName}>{unit.name}</div>
                    <div className={styles.costBannerCost}>
                        <img
                            src="general/gold_icon.png"
                            className={styles.costBannerGoldIcon}
                            alt="gold_icon"
                        />
                        {getUnitSellCost()}
                    </div>
                </div>

                <div className={styles.resources}>
                    <div
                        className={styles.health}
                        // style={{ width: `${healthWidth}%` }}
                    >
                        {unit.current_health} / {unit.max_health}
                    </div>
                    <div
                        className={styles.mana}
                        // style={{ width: `${manaWidth}%` }}
                    >
                        {unit.current_mana} / {unit.max_mana}
                    </div>
                </div>

                <div className={styles.firstRowSquares}>
                    <div className={styles.squares}>
                        <HoverWrapper
                            type="square"
                            setIsHovered={setIsAbilitySquareHovered}
                        >
                            <AbilitySquare champion={unit.name} />
                        </HoverWrapper>
                        <div className={styles.square}>
                            <img
                                src={`general/${unit.position_type}_row.png`}
                                alt=""
                                className={styles.positionIcon}
                            />
                            {unit.position_type}
                        </div>
                        <div className={styles.square}>
                            <img
                                src="general/hex_range.png"
                                alt=""
                                className={styles.rangeIcon}
                            />
                            {unit.range + " hex"}
                        </div>
                    </div>
                </div>

                <div className={styles.unused}></div>

                <div className={styles.statsContainer}>
                    <div className={styles.statsBox}>{statItems}</div>
                </div>
            </div>
        </div>
    );
};

export default UnitInfoBox;
