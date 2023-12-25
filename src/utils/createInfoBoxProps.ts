import { TraitType, ShopUnitType, UnitType } from "../types/Gamestate";
import { TraitInfo, ShopUnitInfo, UnitInfo } from "../types/InfoBoxProps";
import { traitDetails, traitNameVariations } from "./traitDetails";
import { championDetails } from "./championDetails";

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
    }

    return unitInfo;
};

/*
    name: string;
    displayName: string;
    cost: number;
    star_level: number;
    // traits: string[];
    traits: {
        name: string;
        internalName: string;
        displayName: string;
    }[];
    currentHealth: number;
    totalHealth: number;
    currentMana: number;
    totalMana: number;
    position_type: "front" | "back";
    range: number;
    stats: {
        type: string; //used in img/${}, needs underscores
        displayName: string; //attack_damage = Attack Damage
        total: number;
        base: number;
        bonus: number;
    }[];
    ability: {
        name: string;
        mainBody: string;
        details: string;
    };
*/
