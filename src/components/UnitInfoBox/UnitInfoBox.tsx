import styles from "./UnitInfoBox.module.css";
import AbilitySquare from "../AbilitySquare/AbilitySquare";
import HoverWrapper from "../HoverWrapper/HoverWrapper";
import { UnitInfo } from "../../types/InfoBoxProps";

type UnitInfoBoxProps = {
    unit?: UnitInfo;
    onHoverAbilitySquare: (showAbilityInfoBox: boolean) => void;
    setHoveredTrait: (hoveredTrait: string) => void;
    setHoveredStat: (hoveredStat: string) => void;
};

const UnitInfoBox = ({
    unit = {
        name: "ahri",
        displayName: "Ahri",
        cost: 2,
        star_level: 2,
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
        currentHealth: 70,
        totalHealth: 100,
        currentMana: 50,
        totalMana: 100,
        position_type: "front",
        range: 4,
        stats: {
            attack_damage: {
                type: "attack_damage",
                total: 128,
                base: 55,
                bonus: 73,
            },
            ability_power: {
                type: "ability_power",
                total: 100,
                base: 100,
                bonus: 0,
            },
            armor: {
                type: "armor",
                total: 15,
                base: 15,
                bonus: 0,
            },
            magic_resist: {
                type: "magic_resist",
                total: 55,
                base: 15,
                bonus: 40,
            },
            attack_speed: {
                type: "attack_speed",
                total: 1.05,
                base: 0.7,
                bonus: 1.5,
            },
            crit_chance: {
                type: "crit_chance",
                total: 80,
                base: 25,
                bonus: 55,
            },
            crit_damage: {
                type: "crit_damage",
                total: 140,
                base: 140,
                bonus: 0,
            },
        },
        ability: {
            champion: "jinx",
            name: "Escalation",
            mainBody: `<p<b>Passive Minigun: </b> Attacks grant 4% (<img src="general/stats/ability_power.png"/>) 
                    xddasdasda <hr/> sdaaaaaaaaaaaaaaaaaa</p>`,
            details: `xdd`,
        },
    },
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

                {Math.round(stat.total * 100) / 100}
            </HoverWrapper>
        );
        statItems.push(statItem);
    }

    const getUnitSellCost = () => {
        if (!unit.cost) return 0;

        if (unit.cost === 1) {
            return Math.pow(3, unit.star_level - 1);
        }
        return unit.cost * Math.pow(3, unit.star_level - 1) - 1;
    };

    return (
        <div className={styles.border1}>
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
                        {unit.currentHealth} / {unit.totalHealth}
                    </div>
                    <div
                        className={styles.mana}
                        // style={{ width: `${manaWidth}%` }}
                    >
                        {unit.currentMana} / {unit.totalMana}
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
