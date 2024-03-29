import { StatType } from "../types/Gamestate";

export const statDetails: {
    [statType: string]: {
        displayName: string;
        description: string;
        mainBody: (stat: StatType) => string;
    };
} = {
    attack_damage: {
        displayName: "Attack Damage",
        description: "The amount of damage dealt when attacking.",
        mainBody: (stat: StatType): string => {
            const baseAd = Math.round(stat.base);
            const bonusAd = Math.round(stat.bonus);
            const totalAd = baseAd + bonusAd;

            const statText = `<p>Current Attack Damage: <span class="bonusStat">${totalAd}</span> (<span class="baseStat">${baseAd}</span> + <span class="bonusStat">${bonusAd}</span>)</p>`;
            return statText;
        },
    },
    ability_power: {
        displayName: "Ability Power",
        description: "Affects the power of Abilities.",
        mainBody: (stat: StatType): string => {
            const baseAp = Math.round(stat.base);
            const bonusAp = Math.round(stat.bonus);
            const totalAp = baseAp + bonusAp;
            const statText = `<p>Current Ability Power: <span class="bonusStat">${totalAp}</span> (<span class="baseStat">${baseAp}</span> + <span class="bonusStat">${bonusAp}</span>)</p>`;
            return statText;
        },
    },
    armor: {
        displayName: "Armor",
        description: "Reduces physical damage taken.",
        mainBody: (stat: StatType): string => {
            const baseAr = Math.round(stat.base);
            const bonusAr = Math.round(stat.bonus);
            const totalAr = baseAr + bonusAr;

            const damageReduction = Math.round(
                (stat.total / (stat.total + 100)) * 100
            );

            const statText = `<p>Current Armor: <span class="bonusStat">${totalAr}</span> (<span class="baseStat">${baseAr}</span> + <span class="bonusStat">${bonusAr}</span>)<br/>
                                This champion takes ${damageReduction}% reduced physical damage
            </p>`;
            return statText;
        },
    },
    magic_resist: {
        displayName: "Magic Resist",
        description: "Reduces magic damage taken.",
        mainBody: (stat: StatType): string => {
            const baseMr = Math.round(stat.base);
            const bonusMr = Math.round(stat.bonus);
            const totalMr = baseMr + bonusMr;

            const damageReduction = Math.round(
                (stat.total / (stat.total + 100)) * 100
            );

            const statText = `<p>Current Magic Resistances: <span class="bonusStat">${totalMr}</span> (<span class="baseStat">${baseMr}</span> + <span class="bonusStat">${bonusMr}</span>)<br/>
                                This champion takes ${damageReduction}% reduced physical damage
            </p>`;
            return statText;
        },
    },
    attack_speed: {
        displayName: "Attack Speed",
        description: "Number of attacks per second.",
        mainBody: (stat: StatType): string => {
            const baseAs = stat.base.toFixed(2);
            const bonusAs = stat.bonus.toFixed(2);
            const totalAs = (parseFloat(baseAs) * parseFloat(bonusAs)).toFixed(
                2
            );

            const statText = `<p>Current Attack Speed: <span class="bonusStat">${
                totalAs + ""
            }</span> (<span class="baseStat">${baseAs}</span> x <span class="bonusStat">${bonusAs}</span>)</p>`;
            return statText;
        },
    },
    crit_chance: {
        displayName: "Critical Strike Chance",
        description:
            "Chance that an attacks deal bonus damage. Excess Critical Strike Chance is converted into bonus Critical Strike Damage.",
        mainBody: (stat: StatType): string => {
            const statText = `<p>Current Critical Strike Chance: <span class="bonusStat">${stat.total}%</span> (<span class="baseStat">${stat.base}%</span> + <span class="bonusStat">${stat.bonus}%</span>)</p>`;
            return statText;
        },
    },
    crit_damage: {
        displayName: "Critical Strike Damage",
        description: "Total damage dealt on Critical Strike",
        mainBody: (stat: StatType): string => {
            const statText = `<p>Current Critical Strike Damage Bonus: <span class="bonusStat">${stat.total}%</span> (<span class="baseStat">${stat.base}%</span> + <span class="bonusStat">${stat.bonus}%</span>)</p>`;
            return statText;
        },
    },
};
