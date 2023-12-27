type TraitInfoType = {
    name: string;
    displayName: string;
    getTraitDescription: () => string;
    getIntervals: () => {
        count: number;
        text: string;
    }[];
    getChampions: () => {
        name: string;
        displayName: string;
        cost: number;
        traits: string[];
    }[];
};

export const traitNameVariations: {
    [name: string]: {
        name: string;
        internalName: string;
        displayName: string;
    };
} = {
    "8bit": {
        name: "8bit",
        internalName: "set10_8bit",
        displayName: "8-bit",
    },
    bigshot: {
        name: "bigshot",
        internalName: "set10_deadeye",
        displayName: "Big Shot",
    },
    breakout: {
        name: "breakout",
        internalName: "set10_breakout",
        displayName: "Breakout",
    },
    bruiser: {
        name: "bruiser",
        internalName: "set10_brawler",
        displayName: "Bruiser",
    },
    country: {
        name: "country",
        internalName: "set10_country",
        displayName: "Country",
    },
    crowddiver: {
        name: "crowddiver",
        internalName: "set10_crowddive",
        displayName: "Crowd Diver",
    },
    dazzler: {
        name: "dazzler",
        internalName: "set10_dazzler",
        displayName: "Dazzler",
    },
    disco: {
        name: "disco",
        internalName: "set10_funk",
        displayName: "Disco",
    },
    edgelord: {
        name: "edgelord",
        internalName: "set10_edgelord",
        displayName: "Edgelord",
    },
    edm: {
        name: "edm",
        internalName: "set10_edm",
        displayName: "EDM",
    },
    emo: {
        name: "emo",
        internalName: "set10_emo",
        displayName: "Emo",
    },
    executioner: {
        name: "executioner",
        internalName: "set10_executioner",
        displayName: "Executioner",
    },
    guardian: {
        name: "guardian",
        internalName: "set10_guardian",
        displayName: "Guardian",
    },
    heartsteel: {
        name: "heartsteel",
        internalName: "set10_popband",
        displayName: "Heartsteel",
    },
    hyperpop: {
        name: "hyperpop",
        internalName: "set10_hyperpop",
        displayName: "Hyperpop",
    },
    illbeats: {
        name: "illbeats",
        internalName: "set10_illbeats",
        displayName: "ILLBEATS",
    },
    jazz: {
        name: "jazz",
        internalName: "set10_jazz",
        displayName: "Jazz",
    },
    kda: {
        name: "kda",
        internalName: "set10_kda",
        displayName: "KDA",
    },
    maestro: {
        name: "maestro",
        internalName: "set10_classical",
        displayName: "Maestro",
    },
    mixmaster: {
        name: "mixmaster",
        internalName: "set10_dj",
        displayName: "Mixmaster",
    },
    mosher: {
        name: "mosher",
        internalName: "set10_fighter",
        displayName: "Mosher",
    },
    pentakill: {
        name: "pentakill",
        internalName: "set10_pentakill",
        displayName: "Pentakill",
    },
    punk: {
        name: "punk",
        internalName: "set10_punkrock",
        displayName: "Punk",
    },
    rapidfire: {
        name: "rapidfire",
        internalName: "set10_quickshot",
        displayName: "Rapidfire",
    },
    sentinel: {
        name: "sentinel",
        internalName: "set10_sentinel",
        displayName: "Sentinel",
    },
    spellweaver: {
        name: "spellweaver",
        internalName: "set10_spellweaver",
        displayName: "Spellweaver",
    },
    superfan: {
        name: "superfan",
        internalName: "set10_superfan",
        displayName: "Superfan",
    },
    truedamage: {
        name: "truedamage",
        internalName: "set10_truedamage",
        displayName: "True Damage",
    },
    wildcard: {
        name: "wildcard",
        internalName: "set10_twosides",
        displayName: "Wildcard",
    },
};

export const traitDetails: {
    [name: string]: TraitInfoType;
} = {
    "8bit": {
        name: "8bit",
        displayName: "8-bit",
        getTraitDescription: () => {
            const traitDescription = `Keep score of your team's damage dealt. For each high score you beat, 8-bit champions gain Attack Damage.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `3.5% <img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 4,
                    text: `6% <img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 6,
                    text: `10% <img src="general/stats/attack_damage.png"/> and unlock a final high score, that rewards you with a grand prize.`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "corki",
                    displayName: "Corki",
                    cost: 1,
                    traits: ["8-bit", "Big Shot"],
                },
                {
                    name: "garen",
                    displayName: "Garen",
                    cost: 2,
                    traits: ["8-bit", "Sentinel"],
                },
                {
                    name: "riven",
                    displayName: "Riven",
                    cost: 3,
                    traits: ["8-bit", "Edgelord"],
                },
                {
                    name: "caitlyn",
                    displayName: "Caitlyn",
                    cost: 4,
                    traits: ["8-bit", "Rapidfire"],
                },
            ];
            return champions;
        },
    },
    bigshot: {
        name: "bigshot",
        displayName: "Big Shot",
        getTraitDescription: () => {
            const traitDescription = `Big Shots gain Attack Damage, which increases for 3 seconds when they use their ability.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `10% <img src="general/stats/attack_damage.png"/>, 40% after casting`,
                },
                {
                    count: 4,
                    text: `15% <img src="general/stats/attack_damage.png"/>, 60% after casting`,
                },
                {
                    count: 6,
                    text: `25% <img src="general/stats/attack_damage.png"/>, 100% after casting`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "corki",
                    displayName: "Corki",
                    cost: 1,
                    traits: ["8-bit", "Big Shot"],
                },
                {
                    name: "kaisa",
                    displayName: "Kaisa",
                    cost: 2,
                    traits: ["K/DA", "Big Shot"],
                },
                {
                    name: "missfortune",
                    displayName: "Miss Fortune",
                    cost: 3,
                    traits: ["Jazz", "Big Shot"],
                },
                {
                    name: "ezreal",
                    displayName: "Ezreal",
                    cost: 4,
                    traits: ["Heartsteel", "Big Shot"],
                },
                {
                    name: "jhin",
                    displayName: "Jhin",
                    cost: 5,
                    traits: ["Maestro", "Big Shot"],
                },
            ];
            return champions;
        },
    },
    breakout: {
        name: "breakout",
        displayName: "Breakout",
        getTraitDescription: () => {
            const traitDescription = `(unique) Akali is a member of K/DA or True Damage depending on which trait has more fielded champions. She gains a different Ability depending on which form she takes.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [] as {
                count: number;
                text: string;
            }[];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "akali_truedamage",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["True Damage", "Executioner", "Breakout"],
                },
                {
                    name: "akali",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["K/DA", "Executioner", "Breakout"],
                },
            ];
            return champions;
        },
    },
    bruiser: {
        name: "bruiser",
        displayName: "Bruiser",
        getTraitDescription: () => {
            const traitDescription = `Your team gains 100 Health. Bruisers gain bonux max Health.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `20% max <img src="general/stats/health.png"/>`,
                },
                {
                    count: 4,
                    text: `40% max <img src="general/stats/health.png"/>`,
                },
                {
                    count: 6,
                    text: `80% max <img src="general/stats/health.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "olaf",
                    displayName: "Olaf",
                    cost: 1,
                    traits: ["Pentakill", "Bruiser"],
                },
                {
                    name: "tahmkench",
                    displayName: "Tahm Kench",
                    cost: 1,
                    traits: ["Country", "Bruiser"],
                },
                {
                    name: "gragas",
                    displayName: "Gragas",
                    cost: 2,
                    traits: ["Disco", "Spellweaver", "Bruiser"],
                },
                {
                    name: "sett",
                    displayName: "Sett",
                    cost: 3,
                    traits: ["Heartsteel", "Bruiser", "Mosher"],
                },
                {
                    name: "zac",
                    displayName: "Zac",
                    cost: 4,
                    traits: ["EDM", "Bruiser"],
                },
                {
                    name: "illaoi",
                    displayName: "Illaoi",
                    cost: 5,
                    traits: ["ILLBEATS", "Bruiser"],
                },
            ];
            return champions;
        },
    },
    country: {
        name: "country",
        displayName: "Country",
        getTraitDescription: () => {
            const traitDescription = `When your team loses 30% of their Health, call a Dreadsteed that empowers your team. Each Country star level increases the Dreadsteed's Health and Attack Damage.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `Dreadsteed`,
                },
                {
                    count: 5,
                    text: `Midnight Dreadsteed`,
                },
                {
                    count: 7,
                    text: `Infernal Invocation Dreadsteed`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "tahmkench",
                    displayName: "Tahm Kench",
                    cost: 1,
                    traits: ["Country", "Bruiser"],
                },
                {
                    name: "katarina",
                    displayName: "Katarina",
                    cost: 2,
                    traits: ["Country", "Crowd Diver"],
                },
                {
                    name: "samira",
                    displayName: "Samira",
                    cost: 3,
                    traits: ["Country", "Executioner"],
                },
                {
                    name: "urgot",
                    displayName: "Urgot",
                    cost: 3,
                    traits: ["Country", "Mosher"],
                },
                {
                    name: "thresh",
                    displayName: "Thresh",
                    cost: 4,
                    traits: ["Country", "Guardian"],
                },
            ];
            return champions;
        },
    },
    crowddiver: {
        name: "crowddiver",
        displayName: "Crowd Diver",
        getTraitDescription: () => {
            const traitDescription = `After Crowd Divers die, they leap onto the furthest enemy, dealing <span class="magicDamage">300</span> magic damage. Enemies within 1 hex are Stunned for 1.5 seconds.<br/>
            <br/>
            They also deal bonus damage, increased by 1% each second.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `5% bonus damage`,
                },
                {
                    count: 4,
                    text: `30% bonus damage`,
                },
                {
                    count: 6,
                    text: `70% bonus damage`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "evelynn",
                    displayName: "Evelynn",
                    cost: 1,
                    traits: ["K/DA", "Crowd Diver"],
                },
                {
                    name: "katarina",
                    displayName: "Katarina",
                    cost: 2,
                    traits: ["Country", "Crowd Diver"],
                },
                {
                    name: "yone",
                    displayName: "Yone",
                    cost: 3,
                    traits: ["Heartsteel", "Edgelord", "Crowd Diver"],
                },
                {
                    name: "zed",
                    displayName: "Zed",
                    cost: 4,
                    traits: ["EDM", "Crowd Diver"],
                },
                {
                    name: "qiyana",
                    displayName: "Qiyana",
                    cost: 5,
                    traits: ["True Damage", "Crowd Diver"],
                },
            ];
            return champions;
        },
    },
    dazzler: {
        name: "dazzler",
        displayName: "Dazzler",
        getTraitDescription: () => {
            const traitDescription = `Dazzlers' Abilities reduce their target's damage by 15% and deal bonus magic damage over 2 seconds.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `<span class="magicDamage">20%</span> magic damage`,
                },
                {
                    count: 4,
                    text: `<span class="magicDamage">60%</span> magic damage`,
                },
                {
                    count: 6,
                    text: `<span class="magicDamage">100%</span> magic damage`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "nami",
                    displayName: "Nami",
                    cost: 1,
                    traits: ["Disco", "Dazzler"],
                },
                {
                    name: "bard",
                    displayName: "Bard",
                    cost: 2,
                    traits: ["Jazz", "Dazzler"],
                },
                {
                    name: "lux",
                    displayName: "Lux",
                    cost: 3,
                    traits: ["EDM", "Dazzler"],
                },
                {
                    name: "twistedfate",
                    displayName: "Twisted Fate",
                    cost: 4,
                    traits: ["Disco", "Dazzler"],
                },
                {
                    name: "ziggs",
                    displayName: "Ziggs",
                    cost: 5,
                    traits: ["Hyperpop", "Dazzler"],
                },
            ];
            return champions;
        },
    },
    disco: {
        name: "disco",
        displayName: "Disco",
        getTraitDescription: () => {
            // const traitDescription = `Summon a movable Disco Ball.<br/>
            // <br/>
            // Combat start: Allies next to it gain Attack Speed and healing immediately and every 3 seconds.`;

            const traitDescription = `Summon a movable Disco Ball.
            
            Combat start: Allies next to it gain Attack Speed and healing immediately and every 3 seconds.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `5% <img src="general/stats/attack_speed.png"/> and 2% max <img src="general/stats/health.png"/>`,
                },
                {
                    count: 4,
                    text: `10% <img src="general/stats/attack_speed.png"/> and 3% max <img src="general/stats/health.png"/>`,
                },
                {
                    count: 5,
                    text: `2 Disco Balls, 15% <img src="general/stats/attack_speed.png"/> and 3% max <img src="general/stats/health.png"/>`,
                },
                {
                    count: 6,
                    text: `20% <img src="general/stats/attack_speed.png"/> and 5% max <img src="general/stats/health.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "nami",
                    displayName: "Nami",
                    cost: 1,
                    traits: ["Disco", "Dazzler"],
                },
                {
                    name: "taric",
                    displayName: "Taric",
                    cost: 1,
                    traits: ["Disco", "Guardian"],
                },
                {
                    name: "gragas",
                    displayName: "Gragas",
                    cost: 2,
                    traits: ["Disco", "Spellweaver", "Bruiser"],
                },
                {
                    name: "blitzcrank",
                    displayName: "Blitzcrank",
                    cost: 4,
                    traits: ["Disco", "Sentinel"],
                },
                {
                    name: "twistedfate",
                    displayName: "Twisted Fate",
                    cost: 4,
                    traits: ["Disco", "Dazzler"],
                },
            ];
            return champions;
        },
    },
    edgelord: {
        name: "edgelord",
        displayName: "Edgelord",
        getTraitDescription: () => {
            const traitDescription = `Edgelords gain Attack Speed, which doubles when their target drops below 50% Health. Edgelords with 1-hex range also dash through them on their next attack.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `30% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 5,
                    text: `45% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 7,
                    text: `70% <img src="general/stats/attack_speed.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "yasuo",
                    displayName: "Yasuo",
                    cost: 1,
                    traits: ["True Damage", "Edgelord"],
                },
                {
                    name: "kayle",
                    displayName: "Kayle",
                    cost: 2,
                    traits: ["Pentakill", "Edgelord"],
                },
                {
                    name: "riven",
                    displayName: "Riven",
                    cost: 3,
                    traits: ["8-bit", "Edgelord"],
                },
                {
                    name: "yone",
                    displayName: "Yone",
                    cost: 3,
                    traits: ["Heartsteel", "Edgelord", "Crowd Diver"],
                },
                {
                    name: "viego",
                    displayName: "Viego",
                    cost: 4,
                    traits: ["Pentakill", "Edgelord"],
                },
                {
                    name: "kayn",
                    displayName: "Kayn",
                    cost: 5,
                    traits: ["Heartsteel", "Edgelord", "Wildcard"],
                },
            ];
            return champions;
        },
    },
    edm: {
        name: "edm",
        displayName: "EDM",
        getTraitDescription: () => {
            const traitDescription = `Use the EDM selector item to choose an EDM champion and see the frequency for each.<br/>
            <br/>
            At the selected champion's frequency, your EDM champions cast the selected Ability with modified effectiveness.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `80% effectiveness`,
                },
                {
                    count: 3,
                    text: `90% effectiveness`,
                },
                {
                    count: 4,
                    text: `100% effectiveness. -1 second`,
                },
                {
                    count: 5,
                    text: `120% effectiveness, -2 seconds`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "jax",
                    displayName: "Jax",
                    cost: 2,
                    traits: ["EDM", "Mosher"],
                },
                {
                    name: "lux",
                    displayName: "Lux",
                    cost: 3,
                    traits: ["EDM", "Dazzler"],
                },
                {
                    name: "zac",
                    displayName: "Zac",
                    cost: 4,
                    traits: ["EDM", "Bruiser"],
                },
                {
                    name: "zed",
                    displayName: "Zed",
                    cost: 4,
                    traits: ["EDM", "Crowd Diver"],
                },
            ];
            return champions;
        },
    },
    emo: {
        name: "emo",
        displayName: "Emo",
        getTraitDescription: () => {
            const traitDescription = `Emo champions' Abilities cost less Mana to cast, and they gain Mana whenever an allied champion dies.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `20% less, gain 10 <img src="general/stats/mana.png"/>`,
                },
                {
                    count: 4,
                    text: `25% less, gain 20 <img src="general/stats/mana.png"/>`,
                },
                {
                    count: 6,
                    text: `20 <img src="general/stats/ability_power.png"/>; 30% less, gain 25 <img src="general/stats/mana.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "annie",
                    displayName: "Annie",
                    cost: 1,
                    traits: ["Emo", "Spellweaver"],
                },
                {
                    name: "amumu",
                    displayName: "Amumu",
                    cost: 3,
                    traits: ["Emo", "Guardian"],
                },
                {
                    name: "vex",
                    displayName: "Vex",
                    cost: 3,
                    traits: ["Emo", "Executioner"],
                },
                {
                    name: "poppy",
                    displayName: "Poppy",
                    cost: 4,
                    traits: ["Emo", "Mosher"],
                },
            ];
            return champions;
        },
    },
    executioner: {
        name: "executioner",
        displayName: "Executioner",
        getTraitDescription: () => {
            const traitDescription = `Executioner Abilities can critically strike and they gain Critical Strike Damage. Their Critical Strike Chance is increased based on their target's missing Health.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `15% less <img src="general/stats/crit_damage.png"/>. Up to 15% <img src="general/stats/crit_chance.png"/>`,
                },
                {
                    count: 4,
                    text: `30% less <img src="general/stats/crit_damage.png"/>. Up to 35% <img src="general/stats/crit_chance.png"/>`,
                },
                {
                    count: 6,
                    text: `45% less <img src="general/stats/crit_damage.png"/>. Up to 55% <img src="general/stats/crit_chance.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "twitch",
                    displayName: "Twitch",
                    cost: 2,
                    traits: ["Punk", "Executioner"],
                },
                {
                    name: "samira",
                    displayName: "Samira",
                    cost: 3,
                    traits: ["Country", "Executioner"],
                },
                {
                    name: "vex",
                    displayName: "Vex",
                    cost: 3,
                    traits: ["Emo", "Executioner"],
                },
                {
                    name: "akali",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["K/DA", "Executioner", "Breakout"],
                },
                {
                    name: "akali_truedamage",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["True Damage", "Executioner", "Breakout"],
                },
                {
                    name: "karthus",
                    displayName: "Karthus",
                    cost: 4,
                    traits: ["Pentakill", "Executioner"],
                },
            ];
            return champions;
        },
    },
    guardian: {
        name: "guardian",
        displayName: "Guardian",
        getTraitDescription: () => {
            const traitDescription = `Once per combat at 50% Health, Guardians shield themselves and their closest ally for a percent of their max Health.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `30%`,
                },
                {
                    count: 4,
                    text: `50%`,
                },
                {
                    count: 6,
                    text: `70%`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "kennen",
                    displayName: "Kennen",
                    cost: 1,
                    traits: ["True Damage", "Superfan", "Guardian"],
                },
                {
                    name: "taric",
                    displayName: "Taric",
                    cost: 1,
                    traits: ["Disco", "Guardian"],
                },
                {
                    name: "pantheon",
                    displayName: "Pantheon",
                    cost: 2,
                    traits: ["Punk", "Guardian"],
                },
                {
                    name: "amumu",
                    displayName: "Amumu",
                    cost: 3,
                    traits: ["Emo", "Guardian"],
                },
                {
                    name: "neeko",
                    displayName: "Neeko",
                    cost: 3,
                    traits: ["K/DA", "Superfan", "Guardian"],
                },
                {
                    name: "thresh",
                    displayName: "Thresh",
                    cost: 4,
                    traits: ["Country", "Guardian"],
                },
                {
                    name: "yorick",
                    displayName: "Yorick",
                    cost: 5,
                    traits: ["Pentakill", "Mosher", "Guardian"],
                },
            ];
            return champions;
        },
    },
    heartsteel: {
        name: "heartsteel",
        displayName: "Heartsteel",
        getTraitDescription: () => {
            const traitDescription = `Earn Hearts by killing enemies. Gain even more by losing player combat. Every 3 player combats, convert Hearts into powerful rewards!`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `1x Hearts`,
                },
                {
                    count: 5,
                    text: `2.5x Hearts`,
                },
                {
                    count: 7,
                    text: `6x Hearts`,
                },
                {
                    count: 10,
                    text: `10x Hearts`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "ksante",
                    displayName: "K'Sante",
                    cost: 1,
                    traits: ["Heartsteel", "Sentinel"],
                },
                {
                    name: "aphelios",
                    displayName: "Aphelios",
                    cost: 2,
                    traits: ["Heartsteel", "Rapidfire"],
                },
                {
                    name: "sett",
                    displayName: "Sett",
                    cost: 3,
                    traits: ["Heartsteel", "Bruiser", "Mosher"],
                },
                {
                    name: "yone",
                    displayName: "Yone",
                    cost: 3,
                    traits: ["Heartsteel", "Edgekill", "Crowd Diver"],
                },
                {
                    name: "ezreal",
                    displayName: "Ezreal",
                    cost: 4,
                    traits: ["Heartsteel", "Big Shot"],
                },
                {
                    name: "kayn",
                    displayName: "Kayn",
                    cost: 5,
                    traits: ["Heartsteel", "Edgelord", "Wildcard"],
                },
            ];
            return champions;
        },
    },
    hyperpop: {
        name: "hyperpop",
        displayName: "Hyperpop",
        getTraitDescription: () => {
            const traitDescription = `When Hyperpop champions use an Ability, they grant Mana and 4 seconds of Attack Speed to their 2 closest allies.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 1,
                    text: `3 <img src="general/stats/mana.png"/> and 10% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 2,
                    text: `5 <img src="general/stats/mana.png"/> and 20% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 3,
                    text: `7 <img src="general/stats/mana.png"/> and 35% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 4,
                    text: `10 <img src="general/stats/mana.png"/> and 60% <img src="general/stats/attack_speed.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "lulu",
                    displayName: "Lulu",
                    cost: 3,
                    traits: ["Hyperpop", "Spellweaver"],
                },
                {
                    name: "ziggs",
                    displayName: "Ziggs",
                    cost: 5,
                    traits: ["Hyperpop", "Dazzler"],
                },
            ];
            return champions;
        },
    },
    illbeats: {
        name: "illbeats",
        displayName: "ILLBEATS",
        getTraitDescription: () => {
            const traitDescription = `(unique) Gain 2/2/8 placeable Spirit Tentacles, based on Illaoi's star level. Tentacles gain Illaoi's bonus Armor and Magic Resist.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [] as {
                count: number;
                text: string;
            }[];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "illaoi",
                    displayName: "Illaoi",
                    cost: 5,
                    traits: ["ILLBEATS", "Bruiser"],
                },
            ];
            return champions;
        },
    },
    jazz: {
        name: "jazz",
        displayName: "Jazz",
        getTraitDescription: () => {
            const traitDescription = `For each active trait (except uniques), your team gains bonus Health and deals bonus damage.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `2% <img src="general/stats/health.png"/>, 1% damage`,
                },
                {
                    count: 3,
                    text: `3% <img src="general/stats/health.png"/>, 2% damage`,
                },
                {
                    count: 4,
                    text: `4% <img src="general/stats/health.png"/>, 3% damage`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "bard",
                    displayName: "Bard",
                    cost: 2,
                    traits: ["Jazz", "Dazzler"],
                },
                {
                    name: "missfortune",
                    displayName: "Miss Fortune",
                    cost: 3,
                    traits: ["Jazz", "Big Shot"],
                },
                {
                    name: "lucian",
                    displayName: "Lucian",
                    cost: 5,
                    traits: ["Jazz", "Rapidfire"],
                },
            ];
            return champions;
        },
    },
    kda: {
        name: "kda",
        displayName: "K/DA",
        getTraitDescription: () => {
            const traitDescription = `Your team gains max Health, Ability Power, and Attack Damage if they are in a lighted hex. K/DA champions gain double!`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `10% max <img src="general/stats/health.png"/>, 10% <img src="general/stats/ability_power.png"/><img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 5,
                    text: `15% max <img src="general/stats/health.png"/>, 15% <img src="general/stats/ability_power.png"/><img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 7,
                    text: `22% max <img src="general/stats/health.png"/>, 22% <img src="general/stats/ability_power.png"/><img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 10,
                    text: `50% max <img src="general/stats/health.png"/>, 50% <img src="general/stats/ability_power.png"/><img src="general/stats/attack_damage.png"/>, 10 mana per second`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "evelynn",
                    displayName: "Evelynn",
                    cost: 1,
                    traits: ["K/DA", "Crowd Diver"],
                },
                {
                    name: "lillia",
                    displayName: "Lillia",
                    cost: 1,
                    traits: ["K/DA", "Superfan", "Sentinel"],
                },
                {
                    name: "kaisa",
                    displayName: "Kai'Sa",
                    cost: 2,
                    traits: ["K/DA", "Big Shot"],
                },
                {
                    name: "seraphine",
                    displayName: "Seraphine",
                    cost: 2,
                    traits: ["K/DA", "Spellweaver"],
                },
                {
                    name: "neeko",
                    displayName: "Neeko",
                    cost: 3,
                    traits: ["K/DA", "Superfan", "Guardian"],
                },
                {
                    name: "ahri",
                    displayName: "Ahri",
                    cost: 4,
                    traits: ["K/DA", "Spellweaver"],
                },
                {
                    name: "akali",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["K/DA", "Executioner", "Breakout"],
                },
                {
                    name: "akali_truedamage",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["True Damage", "Executioner", "Breakout"],
                },
            ];
            return champions;
        },
    },
    maestro: {
        name: "maestro",
        displayName: "Maestro",
        getTraitDescription: () => {
            const traitDescription = `(unique) The Maestro always attacks at a fixed pace, converting 1% bonus Attack Speed into 0.7% Attack Damage.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [] as {
                count: number;
                text: string;
            }[];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "jhin",
                    displayName: "Jhin",
                    cost: 5,
                    traits: ["Maestro", "Big Shot"],
                },
            ];
            return champions;
        },
    },
    mixmaster: {
        name: "mixmaster",
        displayName: "Mixmaster",
        getTraitDescription: () => {
            const traitDescription = `(unique) Choose a mode that changes the Mixmaster's attacks and Ability!`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [] as {
                count: number;
                text: string;
            }[];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "sona",
                    displayName: "sona",
                    cost: 5,
                    traits: ["Mixmaster", "Spellweaver"],
                },
            ];
            return champions;
        },
    },
    mosher: {
        name: "mosher",
        displayName: "Mosher",
        getTraitDescription: () => {
            const traitDescription = `Moshers gain Attack Speed and <span class="effectText">Omnivamp</span>, which increases up to 100% based on their missing Health.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `20% <img src="general/stats/attack_speed.png"/>, 10% Omnivamp`,
                },
                {
                    count: 4,
                    text: `30% <img src="general/stats/attack_speed.png"/>, 15% Omnivamp`,
                },
                {
                    count: 6,
                    text: `50% <img src="general/stats/attack_speed.png"/>, 20% Omnivamp`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "vi",
                    displayName: "Vi",
                    cost: 1,
                    traits: ["Punk", "Mosher"],
                },
                {
                    name: "gnar",
                    displayName: "gnar",
                    cost: 2,
                    traits: ["Pentakill", "Superfan", "Mosher"],
                },
                {
                    name: "jax",
                    displayName: "Jax",
                    cost: 2,
                    traits: ["EDM", "Mosher"],
                },
                {
                    name: "sett",
                    displayName: "Sett",
                    cost: 3,
                    traits: ["Heartsteel", "Bruiser", "Mosher"],
                },
                {
                    name: "urgot",
                    displayName: "Urgot",
                    cost: 3,
                    traits: ["Country", "Mosher"],
                },
                {
                    name: "poppy",
                    displayName: "Poppy",
                    cost: 4,
                    traits: ["Emo", "Mosher"],
                },
                {
                    name: "yorick",
                    displayName: "Yorick",
                    cost: 5,
                    traits: ["Pentakill", "Mosher", "Guardian"],
                },
            ];
            return champions;
        },
    },
    pentakill: {
        name: "pentakill",
        displayName: "Pentakill",
        getTraitDescription: () => {
            const traitDescription = `Pentakill champions reduce incoming damage by 15% and deal bonus damage. For each champon kill, a Pentakill champion rocks out and increases their damage bonus by 25%. <br/>
            <br/>
            On the 5th kill, all Pentakill champions rock out and your team gains 50% Attack Speed.`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `15% bonus damage`,
                },
                {
                    count: 5,
                    text: `30% bonus damage`,
                },
                {
                    count: 7,
                    text: `45% bonus damage`,
                },
                {
                    count: 10,
                    text: `50% damage reduction and 110% bonus damage`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "olaf",
                    displayName: "Olaf",
                    cost: 1,
                    traits: ["Pentakill", "Bruiser"],
                },
                {
                    name: "gnar",
                    displayName: "Gnar",
                    cost: 2,
                    traits: ["Pentakill", "Superfan", "Mosher"],
                },
                {
                    name: "kayle",
                    displayName: "Kayle",
                    cost: 2,
                    traits: ["Pentakill", "Edgelord"],
                },
                {
                    name: "mordekaiser",
                    displayName: "Mordekaiser",
                    cost: 3,
                    traits: ["Pentakill", "Sentinel"],
                },
                {
                    name: "karthus",
                    displayName: "Karthus",
                    cost: 4,
                    traits: ["Pentakill", "Executioner"],
                },
                {
                    name: "viego",
                    displayName: "Viego",
                    cost: 4,
                    traits: ["Pentakill", "Edgelord"],
                },
                {
                    name: "yorick",
                    displayName: "Yorick",
                    cost: 5,
                    traits: ["Pentakill", "Mosher", "Guardian"],
                },
            ];
            return champions;
        },
    },
    punk: {
        name: "punk",
        displayName: "Punk",
        getTraitDescription: () => {
            const traitDescription = `Punks gain bonus Health and Attack Damage, which increases by 1% every time you spend gold on a Shop reroll.<br/>
            <br/>
            After Punks fight in combat, your Ist Shop reroll costs I gold and grants 3% bonus instead!`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `170 <img src="general/stats/health.png"/> and 17% <img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 4,
                    text: `280 <img src="general/stats/health.png"/> and 28% <img src="general/stats/attack_damage.png"/>`,
                },
                {
                    count: 6,
                    text: `420 <img src="general/stats/health.png"/> and 42% <img src="general/stats/attack_damage.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "jinx",
                    displayName: "Jinx",
                    cost: 1,
                    traits: ["Punk", "Rapidfire"],
                },
                {
                    name: "vi",
                    displayName: "Vi",
                    cost: 1,
                    traits: ["Punk", "Mosher"],
                },
                {
                    name: "pantheon",
                    displayName: "Pantheon",
                    cost: 2,
                    traits: ["Punk", "Guardian"],
                },
                {
                    name: "twitch",
                    displayName: "Twitch",
                    cost: 2,
                    traits: ["Punk", "Executioner"],
                },
            ];
            return champions;
        },
    },
    rapidfire: {
        name: "rapidfire",
        displayName: "Rapidfire",
        getTraitDescription: () => {
            const traitDescription = `Your team gains 10% Attack Speed.<br/>
            <br/>
            Rapidfire champions gain more on every attack, up to 10 stacks.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `4% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 4,
                    text: `7% <img src="general/stats/attack_speed.png"/>`,
                },
                {
                    count: 6,
                    text: `12% <img src="general/stats/attack_speed.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "jinx",
                    displayName: "Jinx",
                    cost: 1,
                    traits: ["Punk", "Rapidfire"],
                },
                {
                    name: "aphelios",
                    displayName: "Aphelios",
                    cost: 2,
                    traits: ["Heartsteel", "Rapidfire"],
                },
                {
                    name: "senna",
                    displayName: "Senna",
                    cost: 2,
                    traits: ["True Damage", "Rapidfire"],
                },
                {
                    name: "caitlyn",
                    displayName: "Caitlyn",
                    cost: 4,
                    traits: ["8-bit", "Rapidfire"],
                },
                {
                    name: "lucian",
                    displayName: "Lucian",
                    cost: 5,
                    traits: ["Jazz", "Rapidfire"],
                },
            ];
            return champions;
        },
    },
    sentinel: {
        name: "sentinel",
        displayName: "Sentinel",
        getTraitDescription: () => {
            const traitDescription = `Your team gains Armor and Magic Resist. Sentinels gain double.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `16 <img src="general/stats/armor.png"/> 16 <img src="general/stats/magic_resist.png"/>`,
                },
                {
                    count: 4,
                    text: `35 <img src="general/stats/armor.png"/> 35 <img src="general/stats/magic_resist.png"/>`,
                },
                {
                    count: 6,
                    text: `60 <img src="general/stats/armor.png"/> 60 <img src="general/stats/magic_resist.png"/>`,
                },
                {
                    count: 8,
                    text: `125 <img src="general/stats/armor.png"/> 125 <img src="general/stats/magic_resist.png"/>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "ksante",
                    displayName: "K'Sante",
                    cost: 1,
                    traits: ["Heartsteel", "Sentinel"],
                },
                {
                    name: "lillia",
                    displayName: "Lillia",
                    cost: 1,
                    traits: ["K/DA", "Superfan", "Sentinel"],
                },
                {
                    name: "garen",
                    displayName: "Garen",
                    cost: 2,
                    traits: ["8-bit", "Sentinel"],
                },
                {
                    name: "ekko",
                    displayName: "Ekko",
                    cost: 3,
                    traits: ["True Damage", "Spellweaver", "Sentinel"],
                },
                {
                    name: "mordekaiser",
                    displayName: "Mordekaiser",
                    cost: 3,
                    traits: ["Pentakill", "Sentinel"],
                },
                {
                    name: "blitzcrank",
                    displayName: "Blitzcrank",
                    cost: 4,
                    traits: ["Disco", "Sentinel"],
                },
            ];
            return champions;
        },
    },
    spellweaver: {
        name: "spellweaver",
        displayName: "Spellweaver",
        getTraitDescription: () => {
            const traitDescription = `Your team gains 15 Ability Power. Spellweavers gain more, plus extra Ability Power whenever a Spellweaver casts an Ability.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `20 <img src="general/stats/ability_power.png"/>, +1 <img src="general/stats/ability_power.png"/> per cast`,
                },
                {
                    count: 5,
                    text: `35 <img src="general/stats/ability_power.png"/>, +1 <img src="general/stats/ability_power.png"/> per cast`,
                },
                {
                    count: 7,
                    text: `60 <img src="general/stats/ability_power.png"/>, +2 <img src="general/stats/ability_power.png"/> per cast`,
                },
                {
                    count: 10,
                    text: `120 <img src="general/stats/ability_power.png"/>, +10 <img src="general/stats/ability_power.png"/> per cast`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "annie",
                    displayName: "Annie",
                    cost: 1,
                    traits: ["Emo", "Spellweaver"],
                },
                {
                    name: "gragas",
                    displayName: "Gragas",
                    cost: 2,
                    traits: ["Disco", "Spellweaver", "Bruiser"],
                },
                {
                    name: "seraphine",
                    displayName: "Seraphine",
                    cost: 2,
                    traits: ["K/DA", "Spellweaver"],
                },
                {
                    name: "ekko",
                    displayName: "Ekko",
                    cost: 3,
                    traits: ["True Damage", "Spellweaver", "Sentinel"],
                },
                {
                    name: "lulu",
                    displayName: "Lulul",
                    cost: 3,
                    traits: ["Hyperpop", "Spellweaver"],
                },
                {
                    name: "ahri",
                    displayName: "Ahri",
                    cost: 4,
                    traits: ["K/DA", "Spellweaver"],
                },
                {
                    name: "sona",
                    displayName: "Sona",
                    cost: 5,
                    traits: ["Mixmaster", "Spellweaver"],
                },
            ];
            return champions;
        },
    },
    superfan: {
        name: "superfan",
        displayName: "Superfan",
        getTraitDescription: () => {
            const traitDescription = `Superfans improve your Headliner!`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 3,
                    text: `Headliner gets a completed item`,
                },
                {
                    count: 4,
                    text: `Headliner gets 250 <img src="general/stats/health.png"/> and 15% <span class="effectText">Omnivamp</span>`,
                },
                {
                    count: 5,
                    text: `Item upgrades to radiant<br/>
                    <br/>
                    <span class="blingBonusText">Omnivamp: Heal for percentage of damage dealt</span>`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "kennen",
                    displayName: "Kennen",
                    cost: 1,
                    traits: ["True Damage", "Superfan", "Guardian"],
                },
                {
                    name: "lillia",
                    displayName: "Lillia",
                    cost: 1,
                    traits: ["K/DA", "Superfan", "Sentinel"],
                },
                {
                    name: "gnar",
                    displayName: "Gnar",
                    cost: 2,
                    traits: ["Pentakill", "Superfan", "Mosher"],
                },
                {
                    name: "neeko",
                    displayName: "Neeko",
                    cost: 3,
                    traits: ["K/DA", "Superfan", "Guardian"],
                },
            ];
            return champions;
        },
    },
    truedamage: {
        name: "truedamage",
        displayName: "True Damage",
        getTraitDescription: () => {
            const traitDescription = `True Damage champions deal bonus true damage. If they are holding an item, they gain a unique Bling Bonus for their Ability.`;

            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [
                {
                    count: 2,
                    text: `<span class="effectText">15%</span> damage`,
                },
                {
                    count: 4,
                    text: `<span class="effectText">30%</span> damage`,
                },
                {
                    count: 6,
                    text: `<span class="effectText">45%</span> damage`,
                },
                {
                    count: 9,
                    text: `<span class="effectText">125%</span> damage, Bling Bonuses go Platinum!`,
                },
            ];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "kennen",
                    displayName: "Kennen",
                    cost: 1,
                    traits: ["True Damage", "Superfan", "Guardian"],
                },
                {
                    name: "yasuo",
                    displayName: "Yasuo",
                    cost: 1,
                    traits: ["True Damage", "Edgelord"],
                },
                {
                    name: "senna",
                    displayName: "Senna",
                    cost: 2,
                    traits: ["True Damage", "Rapidfire"],
                },
                {
                    name: "ekko",
                    displayName: "Ekko",
                    cost: 3,
                    traits: ["True Damage", "Spellweaver", "Sentinel"],
                },
                {
                    name: "akali_truedamage",
                    displayName: "Akali",
                    cost: 4,
                    traits: ["True Damage", "Executioner", "Breakout"],
                },
                {
                    name: "qiyana",
                    displayName: "Qiyana",
                    cost: 5,
                    traits: ["True Damage", "Crowd Diver"],
                },
            ];
            return champions;
        },
    },
    wildcard: {
        name: "wildcard",
        displayName: "Wildcard",
        getTraitDescription: () => {
            const traitDescription = `(unique) If you win player combat, Kayn becomes the Shadow Assassin. If not, he becomes Rhaast. You receive a reward based on his form every time he kills 2 enemy champions.<br/>
            <br/>
            Shadow Assassin: 3g <br/>
            Rhaast: 1 player health`;
            return traitDescription;
        },
        getIntervals: () => {
            const intervals = [] as {
                count: number;
                text: string;
            }[];
            return intervals;
        },
        getChampions: () => {
            const champions = [
                {
                    name: "kayn",
                    displayName: "Kayn",
                    cost: 5,
                    traits: ["Heartsteel", "Edgelord", "Wildcard"],
                },
            ];
            return champions;
        },
    },
};
