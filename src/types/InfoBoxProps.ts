export type MiniChampionInfo = {
    name: string;
    displayName: string;
    cost: number;
    traits: string[];
};

export type StatInfo = {
    type: string;
    header: string;
    description: string;
    mainBody: string;
};

export type AbilityInfo = {
    champion: string;
    name: string;
    mainBody: string;
    details: string;
};

export type ShopUnitInfo = {
    champion: string;
    name: string;
    mainBody: string;
};

export type TraitInfo = {
    name: string;
    displayName: string;
    activeCount: number;
    description: string;
    intervals: { count: number; text: string }[];
    champions: MiniChampionInfo[];
};

export type UnitInfo = {
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
    // ability: Ability
    // stats: {
    //     attack_damage: number;
    //     ability_power: number;
    //     armor: number;
    //     magic_resist: number;
    //     attack_speed: number;
    //     crit_chance: number;
    //     crit_damage: number;
    // };
    stats: {
        [stat_type: string]: {
            type: string; //used in img/${}, needs underscores
            displayName: string; //attack_damage = Attack Damage
            total: number;
            base: number;
            bonus: number;
        };
    };
    // stats: {
    //     type: string; //used in img/${}, needs underscores
    //     displayName: string; //attack_damage = Attack Damage
    //     total: number;
    //     base: number;
    //     bonus: number;
    // }[];
    ability: {
        name: string;
        mainBody: string;
        details: string;
    };
};

/*

    starLevel: number;
    currentAttackRange: number; // hex range
    currentHealth: number;
    totalHealth: number;
    currentMana: number;
    totalMana: number;

    totalAttackDamage: number; // value shown in stat box
    bonusAttackDamagePercent: number; // is not shown graphically but used to calculate blue bonus ad in hover box: (baseAd * this) = blue bonus

    totalAbilityPower: number; // base (100) + bonus
    bonusAbilityPower: number; // blue bonus value shown in hover box; base ap is always 100 for every unit btw

    totalArmor: number; // value shown in stat box
    bonusArmor: number; // blue value shown in hover box

    totalMagicResist: number; // value shown in stat box
    bonusMagicResist: number; // blue value shown in hover box

    totalAttackSpeed: number; //value shown in stat box, NEEDS TO BE CALCULATED FROM BASE * BONUS
    bonusAttackSpeed: number; // value is added to 1 and shown as bonus in hover box

    totalCritChance: number; // value shown in stat box
    bonusCritChance: number; // ust subtract 0.25 from total

    totalCritDamage: number; // value shown in stat box
    bonusCritDamage: number; // NOT NEEDED, just subtract 1.40 from total

    baseAttackDamage: number; // blue value shown in hover box
    baseAbilityPower: number; // always 100
    baseArmor: number; // blue value shown in hover box
    baseMagicResist: number; // blue value shown in hover box
    baseAttackSpeed: number; // blue value shown in hover box
    baseCritChance: number; // always 0.25
    baseCritDamage: number; // always 1.40
*/
