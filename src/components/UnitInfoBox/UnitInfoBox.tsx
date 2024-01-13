import styles from "./UnitInfoBox.module.css";
import AbilitySquare from "../AbilitySquare/AbilitySquare";
import HoverWrapper from "../HoverWrapper/HoverWrapper";
import { UnitInfo } from "../../types/InfoBoxProps";

type UnitInfoBoxProps = {
    unit: UnitInfo;
    onHoverAbilitySquare: (showAbilityInfoBox: boolean) => void;
    setHoveredTrait: (hoveredTrait: string) => void;
    setHoveredStat: (hoveredStat: string) => void;
};

const UnitInfoBox = ({
    unit,
    onHoverAbilitySquare,
    setHoveredTrait,
    setHoveredStat,
}: UnitInfoBoxProps) => {
    const unitTraits = [];
    for (const trait of unit.traits) {
        const unitTrait = (
            <HoverWrapper
                type="unitTrait"
                valueHovered={[trait.name, ""]}
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

    for (let i = 0; i < 7; i++) {
        const statType = statTypes[i];
        const stat = unit.stats[statType];
        const statItem = (
            <HoverWrapper
                type="statItem"
                valueHovered={[statType, ""]}
                key={statType}
                sendValueHovered={setHoveredStat}
            >
                <img
                    src={`general/stats/${stat.type}.png`}
                    alt=""
                    className={styles.statIcon}
                />
                {stat.total === Math.floor(stat.total)
                    ? Math.round(stat.total)
                    : stat.total.toFixed(2)}
                {statType === "crit_chance" || statType === "crit_damage"
                    ? "%"
                    : ""}
            </HoverWrapper>
        );
        statItems.push(statItem);
    }

    const getUnitSellCost = () => {
        if (!unit.cost) return 0;

        if (unit.star_level === 1) {
            return unit.cost;
        }

        if (unit.cost === 1) {
            return Math.pow(3, unit.star_level - 1);
        }

        return unit.cost * Math.pow(3, unit.star_level - 1) - 1;
    };

    const healthWidth = unit.totalHealth
        ? (unit.currentHealth * 100) / unit.totalHealth
        : 0;
    const manaWidth = unit.totalMana
        ? (unit.currentMana * 100) / unit.totalMana
        : 0;

    // throw new Error();

    return (
        <div
            className={styles.border1}
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            <div className={styles.unitInfoBox}>
                <div className={styles.starLevelContainer}>
                    {unit.star_level && (
                        <img
                            src={`general/${unit.star_level}star.png`}
                            alt="star_level_icon"
                            className={styles.starLevelIcon}
                        />
                    )}
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

                    <div className={styles.costBannerName}>
                        {unit.displayName}
                    </div>
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
                    <div className={styles.health}>
                        <div
                            className={styles.healthBar}
                            style={{ width: `${healthWidth}%` }}
                        ></div>

                        <p className={styles.healthText}>
                            {unit.currentHealth} / {unit.totalHealth}
                        </p>
                    </div>
                    <div className={styles.mana}>
                        <div
                            className={styles.manaBar}
                            style={{ width: `${manaWidth}%` }}
                        ></div>
                        <p className={styles.manaText}>
                            {unit.currentMana} / {unit.totalMana}
                        </p>
                    </div>
                </div>

                <div className={styles.firstRowSquares}>
                    <div className={styles.squares}>
                        <HoverWrapper
                            type="square"
                            valueHovered={[true, false]}
                            sendValueHovered={onHoverAbilitySquare}
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
