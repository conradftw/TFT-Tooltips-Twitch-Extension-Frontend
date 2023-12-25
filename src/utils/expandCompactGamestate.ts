import { GamestateType, CompactGamestateType } from "../types/Gamestate";

export const expandCompactGamestate = (
    compactGamestate: CompactGamestateType
): GamestateType => {
    const gamestate = {} as GamestateType;

    gamestate.height = compactGamestate.h;
    gamestate.width = compactGamestate.w;
    gamestate.currentBoard = compactGamestate.b;
    gamestate.isCombatPhase = compactGamestate.f;
    gamestate.stage = compactGamestate.s;
    gamestate.round = compactGamestate.r;

    gamestate.shopUnits = [];
    for (const shopUnit of compactGamestate.sh) {
        gamestate.shopUnits.push({
            cost: shopUnit.c,
            shopUnitName: shopUnit.n,
        });
    }

    gamestate.traits = [];
    for (const trait of compactGamestate.tr) {
        gamestate.traits.push({
            count: trait.c,
            traitName: trait.n,
        });
    }

    gamestate.units = [];
    for (const unit of compactGamestate.u) {
        gamestate.units.push({
            name: unit.n,
            bounding_box: {
                corner1: {
                    x: unit.b.c1.x,
                    y: unit.b.c1.y,
                },
                corner2: {
                    x: unit.b.c2.x,
                    y: unit.b.c2.y,
                },
            },
            starLevel: unit.l,
            currentAttackRange: unit.r,

            currentHealth: unit.h,
            totalHealth: unit.ht,

            currentMana: unit.m,
            totalMana: unit.mt,

            baseAttackDamage: unit.tb,
            bonusAttackDamagePercent: Math.round(unit.tb * unit.t),
            totalAttackDamage: Math.round(unit.tb * (1 + unit.t)),

            baseAbilityPower: 100,
            bonusAbilityPower: unit.u,
            totalAbilityPower: 100 + unit.u,

            baseArmor: unit.vb,
            bonusArmor: unit.v,
            totalArmor: unit.vb + unit.v,

            baseMagicResist: unit.wb,
            bonusMagicResist: unit.w,
            totalMagicResist: unit.wb + unit.w,

            baseAttackSpeed: unit.xb,
            bonusAttackSpeed: 1 + unit.x,
            totalAttackSpeed: unit.xb * (1 + unit.x),

            baseCritChance: Math.round(0.25 * 100),
            totalCritChance: Math.round(unit.y * 100),
            bonusCritChance: Math.round(unit.y * 100) - Math.round(0.25 * 100),

            baseCritDamage: Math.round(1.4 * 100),
            totalCritDamage: Math.round(unit.z * 100),
            bonusCritDamage: Math.round(unit.z * 100) - Math.round(1.4 * 100),
        });
    }

    return gamestate;
};

/*
 
    n: string; // name (REMOVE TFT10 prefix, use lowercase no space format)
    // bounding_box
    b: {
        c1: {
            x: number;
            y: number;
        };
        c2: {
            x: number;
            y: number;
        };
    };
    l: number; // starlevel of unit
    r: number; // currentAttackRange (convert the range value into a hex range and save it here)
    h: number; // currentHealth
    ht: number; // totalHealth
    m: number; // currentMana
    mt: number; //totalMana
    t: number; // bonusAttackDamagePercent  is not shown graphically but used to calculate blue bonus ad in hover box: (baseAd * this) = blue bonus
    u: number; // bonusAbilityPower blue bonus value shown in hover box; base ap is always 100 for every unit btw
    v: number; // bonusArmor blue value shown in hover box
    w: number; // bonusMagicResist blue value shown in hover box
    x: number; // bonusAttackSpeed value is added to 1 and shown as bonus in hover box
    y: number; // totalCritChance value shown in stat box
    // bonusCritChance: number; NOT NEEDED, just subtract 0.25 from total
    z: number; // totalCritDamage value shown in stat box
    // bonusCritDamage: number; NOT NEEDED, just subtract 1.40 from total
    // baseAp = 100, baseCritChance = 0.25, and baseCritDmg = 1.40
    tb: number; //  baseAttackDamage
    vb: number; //  baseArmor
    wb: number; //   box baseMr
    xb: number; // baseAs
*/
