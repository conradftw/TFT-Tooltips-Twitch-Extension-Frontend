import { GamestateType, CompactGamestateType } from "../types/Gamestate";

// const starLevelIncreases: {
//     [starLevel: number]: number;
// } = {
//     0: 1,
//     1: 1,
//     2: 1.5,
//     3: 2.25,
//     4: 2.25,
// };

const starLevelAdIncreases = [1, 1, 1.5, 2.25, 2.25];

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

            stats: {
                attack_damage: {
                    type: "attack_damage",
                    // displayName: "Attack Damage",
                    total: Math.round(
                        unit.tb * starLevelAdIncreases[unit.l] * (1 + unit.t)
                    ),
                    base: unit.tb * starLevelAdIncreases[unit.l],
                    bonus: Math.round(
                        unit.tb * starLevelAdIncreases[unit.l] * unit.t
                    ),
                },
                ability_power: {
                    type: "ability_power",
                    // displayName: "Ability Power",
                    total: 100 + unit.u,
                    base: 100,
                    bonus: unit.u,
                },
                armor: {
                    type: "armor",
                    // displayName: "Armor",
                    total: unit.vb + unit.v,
                    base: unit.vb,
                    bonus: unit.v,
                },
                magic_resist: {
                    type: "magic_resist",
                    // displayName: "Magic Resist",
                    total: unit.wb + unit.w,
                    base: unit.wb,
                    bonus: unit.w,
                },
                attack_speed: {
                    type: "attack_speed",
                    // displayName: "Attack Speed",
                    total: unit.xb * (1 + unit.x),
                    base: unit.xb,
                    bonus: 1 + unit.x,
                },
                crit_chance: {
                    type: "crit_chance",
                    // displayName: "Critical Strike Chance",
                    total: Math.round(unit.y * 100),
                    base: Math.round(0.25 * 100),
                    bonus: Math.round(unit.y * 100) - Math.round(0.25 * 100),
                },
                crit_damage: {
                    type: "crit_damage",
                    // displayName: "Critical Strike Damage",
                    total: Math.round(unit.z * 100),
                    base: Math.round(1.4 * 100),
                    bonus: Math.round(unit.z * 100) - Math.round(1.4 * 100),
                },
            },
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
