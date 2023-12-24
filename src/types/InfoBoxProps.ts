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
    cost: number;
    star_level: number;
    // traits: string[];
    traits: {
        name: string;
        internalName: string;
        displayName: string;
    }[];
    current_health: number;
    max_health: number;
    current_mana: number;
    max_mana: number;
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
        [stat_type: string]: number;
    };
    ability: {
        name: string;
        mainBody: string;
        details: string;
    };
};
