export type StatType = {
    type:
        | "attack_damage"
        | "ability_power"
        | "armor"
        | "magic_resist"
        | "attack_speed"
        | "crit_chance"
        | "crit_damage";
    // displayName:
    //     | "Attack Damage"
    //     | "Ability Power"
    //     | "Armor"
    //     | "Magic Resist"
    //     | "Attack Speed"
    //     | "Critical Strike Chance"
    //     | "Critical Strike Damage";
    total: number;
    base: number;
    bonus: number;
};

export type UnitType = {
    name: string;
    bounding_box: {
        corner1: {
            x: number;
            y: number;
        };
        corner2: {
            x: number;
            y: number;
        };
    };
    starLevel: number;
    currentAttackRange: number; // hex range
    currentHealth: number;
    totalHealth: number;
    currentMana: number;
    totalMana: number;

    // stats: StatType[];
    stats: {
        [stat_type: string]: StatType;
    };

    // totalAttackDamage: number; // value shown in stat box
    // bonusAttackDamagePercent: number; // is not shown graphically but used to calculate blue bonus ad in hover box: (baseAd * this) = blue bonus

    // totalAbilityPower: number; // base (100) + bonus
    // bonusAbilityPower: number; // blue bonus value shown in hover box; base ap is always 100 for every unit btw

    // totalArmor: number; // value shown in stat box
    // bonusArmor: number; // blue value shown in hover box

    // totalMagicResist: number; // value shown in stat box
    // bonusMagicResist: number; // blue value shown in hover box

    // totalAttackSpeed: number; //value shown in stat box, NEEDS TO BE CALCULATED FROM BASE * BONUS
    // bonusAttackSpeed: number; // value is added to 1 and shown as bonus in hover box

    // totalCritChance: number; // value shown in stat box
    // bonusCritChance: number; // ust subtract 0.25 from total

    // totalCritDamage: number; // value shown in stat box
    // bonusCritDamage: number; // NOT NEEDED, just subtract 1.40 from total

    // baseAttackDamage: number; // blue value shown in hover box
    // baseAbilityPower: number; // always 100
    // baseArmor: number; // blue value shown in hover box
    // baseMagicResist: number; // blue value shown in hover box
    // baseAttackSpeed: number; // blue value shown in hover box
    // baseCritChance: number; // always 0.25
    // baseCritDamage: number; // always 1.40
};

export type TraitType = {
    count: number;
    traitName: string;
};

export type ShopUnitType = {
    cost: number;
    shopUnitName: string;
};

export type GamestateType = {
    height: number;
    width: number;
    currentBoard: number;
    isCombatPhase: boolean;
    stage: number;
    round: number;
    shopUnits: ShopUnitType[];
    traits: TraitType[];
    units: UnitType[];
};

type CompactShopUnitType = {
    c: number; // cost (max 2 digits)
    n: string; // shopUnitName
};

type CompactTraitType = {
    c: number; // count (max 2 digits)
    n: string; // traitName
};

type CompactUnitType = {
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
};

export type CompactGamestateType = {
    // streamer: string;   //not needed i think
    h: number; // height (4 digits max)
    w: number; // width  (4 digits max)
    b: number; // currentBoard (1 digit max) i dont think this is needed
    f: boolean; // isCombatPhase (1 digit max) will need to implement hiding shop
    s: number; // stage (max 2 digit)
    r: number; // round (max 1-2 digit?)
    sh: CompactShopUnitType[]; // shopUnits (max 5 shopUnit objects)
    tr: CompactTraitType[];
    u: CompactUnitType[];
};
