import { TraitType, ShopUnitType } from "../types/Gamestate";
import { TraitInfo, ShopUnitInfo } from "../types/InfoBoxProps";
import { traitDetails } from "./traitDetails";
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

/*

ShopUnitType = {
    cost: number;
    shopUnitName: string;
};


ShopUnitInfo
    champion: string;
    name: string;
    mainBody: string;

*/
