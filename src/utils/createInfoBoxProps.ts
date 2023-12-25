import { TraitType, ShopUnitType, UnitType } from "../types/Gamestate";
import {
    TraitInfo,
    ShopUnitInfo,
    UnitInfo,
    AbilityInfo,
    UnitStatsInfo,
} from "../types/InfoBoxProps";
import { traitDetails, traitNameVariations } from "./traitDetails";
import { championDetails } from "./championDetails";
import { statDetails } from "./statDetails";

export const createTraitInfo = (simpleTrait: TraitType): TraitInfo => {
    const traitInfo = {} as TraitInfo;

    const detailedTrait = traitDetails[simpleTrait.traitName];

    traitInfo.name = detailedTrait.name;
    traitInfo.displayName = detailedTrait.displayName;
    traitInfo.activeCount = simpleTrait.count;
    traitInfo.description = detailedTrait.getTraitDescription();
    traitInfo.intervals = detailedTrait.getIntervals();
    traitInfo.champions = detailedTrait.getChampions();

    return traitInfo;
};

export const createShopUnitInfo = (
    simpleShopUnit: ShopUnitType
): ShopUnitInfo => {
    const shopUnit = {} as ShopUnitInfo;
    const champion = championDetails[simpleShopUnit.shopUnitName];

    shopUnit.champion = champion.name;
    shopUnit.name = champion.getAbilityName();
    shopUnit.mainBody = champion.getAbilityMainTextWithDefaults();

    return shopUnit;
};

export const createUnitInfo = (unit: UnitType): UnitInfo => {
    const unitInfo = {} as UnitInfo;

    if (!Object.keys(unit).length) {
        return unitInfo;
    }

    const champion = championDetails[unit.name];

    if (champion) {
        unitInfo.name = champion.name;
        unitInfo.displayName = champion.displayName;
        unitInfo.cost = champion.cost;
        unitInfo.star_level = unit.starLevel;

        unitInfo.traits = [];
        for (const trait of champion.traits) {
            unitInfo.traits.push(traitNameVariations[trait]);
        }

        unitInfo.currentHealth = unit.currentHealth;
        unitInfo.totalHealth = unit.totalHealth;

        unitInfo.currentMana = unit.currentMana;
        unitInfo.totalMana = unit.totalMana;

        unitInfo.position_type = champion.position_type;
        unitInfo.range = unit.currentAttackRange;

        // oh fuck i screwed up, redo this later
        // change UnitType to be more array based?
        unitInfo.stats = unit.stats;

        unitInfo.ability = {
            champion: champion.name,
            name: champion.getAbilityName(),
            mainBody: champion.getAbilityMainText(unit),
            details: champion.getAbilityDetails(unit),
        };
    }

    return unitInfo;
};

export const createAbilityInfo = (unit: UnitType): AbilityInfo => {
    const abilityInfo = {} as AbilityInfo;

    const champion = championDetails[unit.name];

    abilityInfo.champion = champion.name;
    abilityInfo.name = champion.getAbilityName();
    abilityInfo.mainBody = champion.getAbilityMainText(unit);
    abilityInfo.details = champion.getAbilityDetails(unit);

    return abilityInfo;
};

export const createUnitStatsInfo = (unit: UnitType): UnitStatsInfo => {
    const unitStatsInfo = {} as UnitStatsInfo;

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
        const detailedStat = statDetails[stat];

        unitStatsInfo[stat] = {
            type: stat,
            header: detailedStat.displayName,
            description: detailedStat.description,
            mainBody: detailedStat.mainBody(unit.stats[stat]),
        };
    }

    return unitStatsInfo;
};
/*


    stats: {
        [stat_type: string]: StatType;
    };



    export type StatInfo = {
        type: string;
        header: string;
        description: string;
        mainBody: string;
    };

    export type UnitStatsInfo = {
        [statType: string]: StatInfo;
    };

};
*/
