import { UnitType } from "../types/Gamestate";

type ChampInfoType = {
    name: string;
    displayName: string;
    cost: number;
    traits: string[];
    position_type: "back" | "front";
    getAbilityName: () => string;
    getAbilityMainText: (unit: UnitType) => string;
    getAbilityDetails: (unit: UnitType) => string;
    getAbilityMainTextWithDefaults: () => string;
};

export const championDetails: {
    [name: string]: ChampInfoType;
} = {
    ahri: {
        // check REMOVE TODO
        name: "ahri",
        displayName: "Ahri",
        cost: 1,
        traits: ["kda", "spellweaver"],
        position_type: "back",
        getAbilityName: () => {
            return `POP/STAR`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [3.2, 4.8, 16];
            const empoweredDamageRatios = [4.8, 7.2, 24];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const empoweredDamage =
                unit.stats["ability_power"].total *
                empoweredDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Blow a kiss at the current target. It deals <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage and briefly Stuns them. If the target has been kissed before, deal <span class="magicDamage">${Math.round(
                empoweredDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage instead.<br/>
                                        <br/>
                                        <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [3.2, 4.8, 16];
            const empoweredDamageRatios = [4.8, 7.2, 24];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const empoweredDamage =
                unit.stats["ability_power"].total *
                empoweredDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            Empowered Damage: <span class="magicDamage">${empoweredDamage} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                empoweredDamageRatios[0] * 100
            )}% / ${Math.round(empoweredDamageRatios[1] * 100)}% / ${Math.round(
                empoweredDamageRatios[2] * 100
            )}% ]</span>
                                </p>`;
            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Blow a kiss at the current target. It deals <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage and briefly Stuns them. If the target has been kissed before, deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage instead.<br/>
                                        <br/>
                                        <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    akali: {
        name: "akali",
        displayName: "Akali",
        cost: 4,
        traits: ["kda", "executioner", "breakout"],
        position_type: "front",
        getAbilityName: () => {
            return `The Baddest`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const strikeDamageRatios = [1.9, 1.9, 3.8];
            const dashDamageRatios = [0.8, 1.2, 4];

            const strikeDamage =
                unit.stats["attack_damage"].total *
                strikeDamageRatios[unit.starLevel - 1];
            const dashDamage =
                unit.stats["ability_power"].total *
                dashDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Throw a shuriken at the farthest unmarked target, marking them. Dash to every marked enemy, striking them for <span class="physicalDamage">${Math.round(
                strikeDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage and dealing <span class="physicalDamage">${Math.round(
                dashDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> physical damage to enemies dashed through.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const strikeDamageRatios = [1.9, 1.9, 3.8];
            const dashDamageRatios = [0.8, 1.2, 4];

            const strikeDamage =
                unit.stats["attack_damage"].total *
                strikeDamageRatios[unit.starLevel - 1];
            const dashDamage =
                unit.stats["ability_power"].total *
                dashDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Strike Damage: <span class="physicalDamage">${Math.round(
                strikeDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                strikeDamageRatios[0] * 100
            )}% / ${Math.round(strikeDamageRatios[1] * 100)}% / ${Math.round(
                strikeDamageRatios[2] * 100
            )}% ]</span><br/>
            Dash Damage: <span class="physicalDamage">${Math.round(
                dashDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                dashDamageRatios[0] * 100
            )}% / ${Math.round(dashDamageRatios[1] * 100)}% / ${Math.round(
                dashDamageRatios[2] * 100
            )}% ]</span>
                                
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Throw a shuriken at the farthest unmarked target, marking them. Dash to every marked enemy, striking them for <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage and dealing <span class="physicalDamage">??? (<img src="general/stats/ability_power.png"/>)</span> physical damage to enemies dashed through.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    akali_truedamage: {
        // NOT CHECKED REMOVE TODO
        name: "akali_truedamage",
        displayName: "Akali",
        cost: 4,
        traits: ["truedamage", "executioner", "breakout"],
        position_type: "front",
        getAbilityName: () => {
            return `Three Point Strike`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damagePerWaveRatios = [2.75, 2.75, 5.5];
            const manaRefundRatios = [0.12, 0.12, 0.2];

            const damagePerWave =
                unit.stats["attack_damage"].total *
                damagePerWaveRatios[unit.starLevel - 1];
            const manaRefund =
                unit.stats["ability_power"].total *
                manaRefundRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Deal <span class="physicalDamage">${Math.round(
                damagePerWave
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage three times split between the three closest enemies within three hexes. For each enemy that survives all three waves, refund <span class="effectText">${Math.round(
                manaRefund
            )} (<img src="general/stats/ability_power.png"/>)</span> Mana. <br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: Heal for 20% of the damage dealt with Three Point Strike</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damagePerWaveRatios = [2.75, 2.75, 5.5];
            const manaRefundRatios = [0.12, 0.12, 0.2];

            const damagePerWave =
                unit.stats["attack_damage"].total *
                damagePerWaveRatios[unit.starLevel - 1];
            const manaRefund =
                unit.stats["ability_power"].total *
                manaRefundRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Damage Per Wave: <span class="physicalDamage">${Math.round(
                damagePerWave
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damagePerWaveRatios[0] * 100
            )}% / ${Math.round(damagePerWaveRatios[1] * 100)}% / ${Math.round(
                damagePerWaveRatios[2] * 100
            )}% ]</span><br/>
            Mana Refund: <span class="effectText">${Math.round(
                manaRefund
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                manaRefundRatios[0] * 100
            )}% / ${Math.round(manaRefundRatios[1] * 100)}% / ${Math.round(
                manaRefundRatios[2] * 100
            )}% ]</span>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage three times split between the three closest enemies within three hexes. For each enemy that survives all three waves, refund <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> Mana. <br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: Heal for 20% of the damage dealt with Three Point Strike</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    amumu: {
        name: "amumu",
        displayName: "Amumu",
        cost: 3,
        traits: ["emo", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `Tantrum`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageApRatio = [0.8, 1.2, 1.9];
            const damageArmorRatio = [1.5, 1.75, 2];

            const totalDamage =
                unit.stats["ability_power"].total *
                    damageApRatio[unit.starLevel - 1] +
                unit.stats["armor"].total *
                    damageArmorRatio[unit.starLevel - 1];

            const abilityMainText = `<p><b>Passive:</b> When attacked, gain <b>4</b> Armor (stacks up to 25 times).<br/>
            <br/>
            <b>Active:</b> Deal <span class="magicDamage">${Math.round(
                totalDamage
            )}(<img src="general/stats/ability_power.png"/><img src="general/stats/armor.png"/>)</span> magic damage to adjacent enemies. Every 3rd cast hits enemies within 2 hexes and Stuns them for 1.5.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> When attacked, also gains Magic Resist.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageApRatio = [0.8, 1.2, 1.9];
            const damageArmorRatio = [1.5, 1.75, 2];

            const apDamage =
                unit.stats["ability_power"].total *
                damageApRatio[unit.starLevel - 1];
            const armorDamage =
                unit.stats["armor"].total *
                damageArmorRatio[unit.starLevel - 1];
            const totalDamage = apDamage + armorDamage;

            const abilityDetails = `<p>Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                damageApRatio[0] * 100
            )}% / ${Math.round(damageApRatio[1] * 100)}% / ${Math.round(
                damageApRatio[2] * 100
            )}% ]</span><br/>
            Damage: (<img src="general/stats/armor.png"/>) <span class="abilityRatios">[ ${Math.round(
                damageArmorRatio[0] * 100
            )}% / ${Math.round(damageArmorRatio[1] * 100)}% / ${Math.round(
                damageArmorRatio[2] * 100
            )}% ]</span><br/>
            Damage: <span class="magicDamage">${Math.round(
                totalDamage
            )}</span> = ${Math.round(
                apDamage
            )} (<img src="general/stats/ability_power.png"/>) + ${Math.round(
                armorDamage
            )} (<img src="general/stats/armor.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b> When attacked, gain <b>4</b> Armor (stacks up to 25 times).<br/>
            <br/>
            <b>Active:</b> Deal <span class="magicDamage">???(<img src="general/stats/ability_power.png"/><img src="general/stats/armor.png"/>)</span> magic damage to adjacent enemies. Every 3rd cast hits enemies within 2 hexes and Stuns them for 1.5.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> When attacked, also gains Magic Resist.</span>
            </p>`;

            return abilityMainText;
        },
    },
    annie: {
        name: "annie",
        displayName: "Annie",
        cost: 1,
        traits: ["emo", "spellweaver"],
        position_type: "back",
        getAbilityName: () => {
            return `Disintegrate`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatio = [1.95, 2.95, 4.4];
            const additionalDamageRatio = [1.15, 1.7, 2.55];

            const damage =
                unit.stats["ability_power"].total *
                damageRatio[unit.starLevel - 1];
            const additionalDamage =
                unit.stats["ability_power"].total *
                additionalDamageRatio[unit.starLevel - 1];

            const abilityMainText = `<p><b>Passive:</b> After 4 casts, gain <span class="attackSpeed">50%</span> Attack Speed and casts <span class="magicDamage">${Math.round(
                additionalDamage
            )}(<img src="general/stats/ability_power.png"/>)</span>.<br/>
            <br/>
            <b>Active:</b> Deal <span class="magicDamage">${Math.round(
                damage
            )}(<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatio = [1.95, 2.95, 4.4];
            const additionalDamageRatio = [1.15, 1.7, 2.55];

            const damage =
                unit.stats["ability_power"].total *
                damageRatio[unit.starLevel - 1];
            const additionalDamage =
                unit.stats["ability_power"].total *
                additionalDamageRatio[unit.starLevel - 1];

            const abilityDetails = `<p>Damage: <span class="magicDamage">${Math.round(
                damage
            )}(<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatio[0] * 100
            )}% / ${Math.round(damageRatio[1] * 100)}% / ${Math.round(
                damageRatio[2] * 100
            )}% ]</span><br/>
            Additional Cast Damage: <span class="magicDamage">${Math.round(
                additionalDamage
            )}(<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                additionalDamageRatio[0] * 100
            )}% / ${Math.round(additionalDamageRatio[1] * 100)}% / ${Math.round(
                additionalDamageRatio[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b> After 4 casts, gain <span class="attackSpeed">50%</span> Attack Speed and casts <span class="magicDamage">???(<img src="general/stats/ability_power.png"/>)</span>.<br/>
            <br/>
            <b>Active:</b> Deal <span class="magicDamage">???(<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    aphelios: {
        name: "aphelios",
        displayName: "Aphelios",
        cost: 2,
        traits: ["heartsteel", "rapidfire"],
        position_type: "back",
        getAbilityName: () => {
            return `Moonlight Lullaby`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const stunDurations = [1.5, 1.5, 2];
            const adRatio = 7.25;
            const percentDamageRatio = 0.1;

            const damage = unit.stats["attack_damage"].total * adRatio;
            const percentDamage =
                (unit.stats["ability_power"].total * percentDamageRatio) / 100;
            const splashDamage = percentDamage * damage;

            const abilityMainText = `<p>Deal <span class="physicalDamage">${Math.round(
                damage
            )}(<img src="general/stats/attack_damage.png"/>)</span> physical damage and Stun the current target for <span class="effectText">${
                stunDurations[unit.starLevel - 1]
            }</span> seconds. Deal <span class="physicalDamage">${Math.round(
                splashDamage
            )}(<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to enemies within 1 hex. If the original target dies, Stun enemies within 1 hex for 1 second.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const stunDurations = [1.5, 1.5, 2];
            const adRatio = 7.25;
            const percentDamageRatio = 0.1;

            const damage = unit.stats["attack_damage"].total * adRatio;
            const percentDamage =
                (unit.stats["ability_power"].total * percentDamageRatio) / 100;
            const splashDamage = percentDamage * damage;

            const abilityDetails = `<p>Stun Duration <span class="abilityRatios">[ ${
                stunDurations[0]
            } / ${stunDurations[1]} / ${stunDurations[2]} ]</span><br/>
            Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${
                adRatio * 100
            }% <img src="general/stats/attack_damage.png"/><br/>
            Percent Damage: <span class="effectText">${
                percentDamage * 100
            }%</span> = ${
                percentDamageRatio * 100
            }% (<img src="general/stats/ability_power.png"/>)<br/>
            Nearby Enemy Damage: <span class="physicalDamage">${splashDamage}</span> = <span class="effectText">${
                percentDamage * 100
            }%</span> of <span class="physicalDamage">${damage}</span><br/>

            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="physicalDamage">???(<img src="general/stats/attack_damage.png"/>)</span> physical damage and Stun the current target for <span class="effectText">???</span> seconds. Deal <span class="physicalDamage">???(<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to enemies within 1 hex. If the original target dies, Stun enemies within 1 hex for 1 second.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    bard: {
        name: "bard",
        displayName: "Bard",
        cost: 2,
        traits: ["jazz", "dazzler"],
        position_type: "back",
        getAbilityName: () => {
            return `Improv`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const dootRatios = [1.9, 2.85, 4.3];
            const chimeRatios = [1.2, 1.5, 1.8];
            const tipRatios = [0.01, 0.01, 0.03];
            const headlinerDootRatios = [8.5, 1.25, 1.9];

            const dootDamage =
                unit.stats["ability_power"].total *
                dootRatios[unit.starLevel - 1];
            const chimeDamage =
                unit.stats["ability_power"].total *
                chimeRatios[unit.starLevel - 1];
            const headlinerDootDamage =
                unit.stats["ability_power"].total *
                headlinerDootRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Play a 4-note tune at random using 3 possible notes:<br/>
            <br/>
            Doot - Deal <span class="magicDamage">${Math.round(
                dootDamage
            )}(<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target.<br/>
            Chime - Heal the lowest Health ally for <span class="health">${Math.round(
                chimeDamage
            )}(<img src="general/stats/ability_power.png"/>)</span> Health.<br/>
            Tip - Drop <span class="effectText">1</span> gold and play another note.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: The finale of Bard's first cast each combat spreads an additional Doot for every 8 times he's cast this game. Doots deal <span class="magicDamage">${Math.round(
                headlinerDootDamage
            )}(<img src="general/stats/ability_power.png"/>)</span> magic damage. (0 Doots. 0/8 casts to next Doot.) </span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const dootRatios = [1.9, 2.85, 4.3];
            const chimeRatios = [1.2, 1.5, 1.8];
            const tipRatios = [0.01, 0.01, 0.03];
            const headlinerDootRatios = [8.5, 1.25, 1.9];

            const dootDamage =
                unit.stats["ability_power"].total *
                dootRatios[unit.starLevel - 1];
            const chimeDamage =
                unit.stats["ability_power"].total *
                chimeRatios[unit.starLevel - 1];
            const headlinerDootDamage =
                unit.stats["ability_power"].total *
                headlinerDootRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Doot: <span class="magicDamage">${Math.round(
                dootDamage
            )}(<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${
                dootRatios[0] * 100
            }% / ${dootRatios[1] * 100} / ${dootRatios[2] * 100} ]</span><br/>
            Chime: <span class="magicDamage">${Math.round(
                chimeDamage
            )}(<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${
                chimeRatios[0] * 100
            }% / ${chimeRatios[1] * 100} / ${chimeRatios[2] * 100} ]</span><br/>
            Tip Chance <span class="abilityRatios">[ ${tipRatios[0] * 100}% / ${
                tipRatios[1] * 100
            } / ${tipRatios[2] * 100} ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Play a 4-note tune at random using 3 possible notes:<br/>
            <br/>
            Doot - Deal <span class="magicDamage">???(<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target.<br/>
            Chime - Heal the lowest Health ally for <span class="health">???(<img src="general/stats/ability_power.png"/>)</span> Health.<br/>
            Tip - Drop <span class="effectText">1</span> gold and play another note.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: The finale of Bard's first cast each combat spreads an additional Doot for every 8 times he's cast this game. Doots deal <span class="magicDamage">???(<img src="general/stats/ability_power.png"/>)</span> magic damage. (0 Doots. 0/8 casts to next Doot.) </span>
            </p>`;

            return abilityMainText;
        },
    },
    blitzcrank: {
        name: "blitzcrank",
        displayName: "Blitzcrank",
        cost: 4,
        traits: ["disco", "sentinel"],
        position_type: "front",
        getAbilityName: () => {
            return `Boogie Barrier`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const zapDamageRatio = [1, 1.5, 10];
            const shieldRatio = [6, 7.5, 20];

            const zapDamage =
                unit.stats["ability_power"].total *
                zapDamageRatio[unit.starLevel - 1];
            const shield =
                unit.stats["ability_power"].total *
                shieldRatio[unit.starLevel - 1];

            const abilityMainText = `<p><b>Passive: </b>Deal <span class="magicDamage">${Math.round(
                zapDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to a nearby enemy every 2 seconds.<br/>
            <b>Active: </b>Gain a <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> Shield. For 5 seconds, Blitzcrank's Passive deals damage every second and deals an additional <span class="effectText">1%</span> of the target's max Health as magic damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> and the Passive always deals the max Health magic damage.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const zapDamageRatio = [1, 1.5, 10];
            const shieldRatio = [6, 7.5, 20];

            const zapDamage =
                unit.stats["ability_power"].total *
                zapDamageRatio[unit.starLevel - 1];
            const shield =
                unit.stats["ability_power"].total *
                shieldRatio[unit.starLevel - 1];

            const abilityDetails = `<p>Zap Damage: <span class="magicDamage">${Math.round(
                zapDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                zapDamageRatio[0] * 100
            )}% / ${Math.round(zapDamageRatio[1] * 100)}% / ${Math.round(
                zapDamageRatio[2] * 100
            )}% ]</span><br/>
            Shield: <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                shieldRatio[0] * 100
            )}% / ${Math.round(shieldRatio[1] * 100)}% / ${Math.round(
                shieldRatio[2] * 100
            )}% ]</span>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive: </b>Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to a nearby enemy every 2 seconds.<br/>
            <b>Active: </b>Gain a <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> Shield. For 5 seconds, Blitzcrank's Passive deals damage every second and deals an additional <span class="effectText">1%</span> of the target's max Health as magic damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> and the Passive always deals the max Health magic damage.</span>
            </p>`;

            return abilityMainText;
        },
    },
    caitlyn: {
        name: "caitlyn",
        displayName: "Caitlyn",
        cost: 4,
        traits: ["8bit", "rapidfire"],
        position_type: "back",
        getAbilityName: () => {
            return `Champ Hunt`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageApRatio = [0.25, 0.4, 1.2];
            const damageAdRatio = [3.9, 3.9, 8];

            const apDamage =
                unit.stats["ability_power"].total *
                damageApRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                damageAdRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityMainText = `<p>Fire shots at the 4 furthest enemies. Shots deal <span class="physicalDamage">${Math.round(
                totalDamage
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to the first enemy they hit.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> and fire another shot that deals 60% damage.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageApRatio = [0.25, 0.4, 1.2];
            const damageAdRatio = [3.9, 3.9, 8];

            const apDamage =
                unit.stats["ability_power"].total *
                damageApRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                damageAdRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityDetails = `<p>Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                damageApRatio[0] * 100
            )}% / ${Math.round(damageApRatio[1] * 100)}% / ${Math.round(
                damageApRatio[2] * 100
            )}% ]</span><br/>
            Damage: (<img src="general/stats/attack_damage.png"/>) <span class="abilityRatios">[ ${Math.round(
                damageAdRatio[0] * 100
            )}% / ${Math.round(damageAdRatio[1] * 100)}% / ${Math.round(
                damageAdRatio[2] * 100
            )}% ]</span><br/>
            Damage: <span class="physicalDamage">${Math.round(
                totalDamage
            )}</span> = ${Math.round(
                adDamage
            )} (<img src="general/stats/attack_damage.png"/>) + ${Math.round(
                apDamage
            )} (<img src="general/stats/ability_power.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Fire shots at the 4 furthest enemies. Shots deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to the first enemy they hit.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> and fire another shot that deals 60% damage.</span>
            </p>`;

            return abilityMainText;
        },
    },
    corki: {
        name: "corki",
        displayName: "Corki",
        cost: 1,
        traits: ["8bit", "bigshot"],
        position_type: "back",
        getAbilityName: () => {
            return `Blown to 8 Bits`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatio = 3.2;
            const durationRatio = 0.05;

            const damage = unit.stats["attack_damage"].total * damageRatio;
            const duration = unit.stats["ability_power"].total * durationRatio;

            const abilityMainText = `<p>Deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target and adjacent enemies, then <span class="effectText">Wound</span> them for ${Math.round(
                duration
            )} (<img src="general/stats/ability_power.png"/>) seconds.<br/>
            <br/>
            <span class="blingBonusText">Wound: Reduce healing received by 33%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatio = 3.2;
            const durationRatio = 0.05;

            const damage = unit.stats["attack_damage"].total * damageRatio;
            const duration = unit.stats["ability_power"].total * durationRatio;

            const abilityDetails = `<p>Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${
                damageRatio * 100
            }% <img src="general/stats/attack_damage.png"/><br/>
            Duration: ${Math.round(duration)} = ${
                durationRatio * 100
            }% <img src="general/stats/ability_power.png"/><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target and adjacent enemies, then <span class="effectText">Wound</span> them for ??? (<img src="general/stats/ability_power.png"/>) seconds.<br/>
            <br/>
            <span class="blingBonusText">Wound: Reduce healing received by 33%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    ekko: {
        name: "ekko",
        displayName: "Ekko",
        cost: 3,
        traits: ["truedamage", "spellweaver", "sentinel"],
        position_type: "front",
        getAbilityName: () => {
            return `Record Scratch`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const shieldRatios = [4, 4.5, 5.5];
            const damageRatios = [0.6, 0.9, 1.45];

            const shield =
                unit.stats["ability_power"].total *
                shieldRatios[unit.starLevel - 1];
            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies within 2 hexes and Stun them for 1.5 seconds. Gain a <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> Health shield for 4 seconds.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: While the shield is up, heal 100 every second.</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const shieldRatios = [4, 4.5, 5.5];
            const damageRatios = [0.6, 0.9, 1.45];

            const shield =
                unit.stats["ability_power"].total *
                shieldRatios[unit.starLevel - 1];
            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Shield: <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                shieldRatios[0] * 100
            )}% / ${Math.round(shieldRatios[1] * 100)}% / ${Math.round(
                shieldRatios[2] * 100
            )}% ]</span><br/>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies within 2 hexes and Stun them for 1.5 seconds. Gain a <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> Health shield for 4 seconds.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: While the shield is up, heal 100 every second.</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    evelynn: {
        name: "evelynn",
        displayName: "Evelynn",
        cost: 1,
        traits: ["kda", "crowddiver"],
        position_type: "front",
        getAbilityName: () => {
            return `Whiplash`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [2, 3, 4.5];
            const healPerLevel = [25, 30, 35];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target. Gain <span class="attackSpeed">120%</span> Attack Speed that decays over 4 seconds. While active, attacks restore <span class="health">${
                healPerLevel[unit.starLevel - 1]
            }</span> Health.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +25 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [2, 3, 4.5];
            const healPerLevel = [25, 30, 35];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Heal: <span class="health">${Math.round(
                healPerLevel[unit.starLevel - 1]
            )}</span> <span class="abilityRatios">[ ${Math.round(
                healPerLevel[0]
            )}% / ${Math.round(healPerLevel[1])}% / ${Math.round(
                healPerLevel[2]
            )}% ]</span><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target. Gain <span class="attackSpeed">120%</span> Attack Speed that decays over 4 seconds. While active, attacks restore <span class="health">???/span> Health.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +25 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    ezreal: {
        name: "ezreal",
        displayName: "Ezreal",
        cost: 4,
        traits: ["heartsteel", "bigshot"],
        position_type: "back",
        getAbilityName: () => {
            return `Crash the Party`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [3.5, 3.5, 7];
            const apWaveDamageRatios = [0.8, 1.2, 3.6];
            const adWaveDamageRatios = [3.5, 3.5, 7];

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];
            const apWaveDamage =
                unit.stats["ability_power"].total *
                apWaveDamageRatios[unit.starLevel - 1];
            const adWaveDamage =
                unit.stats["attack_damage"].total *
                adWaveDamageRatios[unit.starLevel - 1];
            const waveDamage = apWaveDamage + adWaveDamage;

            const abilityMainText = `<p>Blink away from the current target and deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to them. Every 3rd cast, deal <span class="physicalDamage">${Math.round(
                waveDamage
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to all enemies in a line.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [3.5, 3.5, 7];
            const apWaveDamageRatios = [0.8, 1.2, 3.6];
            const adWaveDamageRatios = [3.5, 3.5, 7];

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];
            const apWaveDamage =
                unit.stats["ability_power"].total *
                apWaveDamageRatios[unit.starLevel - 1];
            const adWaveDamage =
                unit.stats["attack_damage"].total *
                adWaveDamageRatios[unit.starLevel - 1];
            const waveDamage = apWaveDamage + adWaveDamage;

            const abilityDetails = `<p>Damage: <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Wave Damage: <span class="physicalDamage">${Math.round(
                apWaveDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                apWaveDamageRatios[0] * 100
            )}% / ${Math.round(apWaveDamageRatios[1] * 100)}% / ${Math.round(
                apWaveDamageRatios[2] * 100
            )}% ]</span><br/>

            Wave Damage: <span class="physicalDamage">${Math.round(
                adWaveDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                adWaveDamageRatios[0] * 100
            )}% / ${Math.round(adWaveDamageRatios[1] * 100)}% / ${Math.round(
                adWaveDamageRatios[2] * 100
            )}% ]</span><br/>

            Wave Damage: <span class="physicalDamage">${Math.round(
                waveDamage
            )}</span> = ${adWaveDamage} (<img src="general/stats/attack_damage.png"/>) + ${apWaveDamage} (<img src="general/stats/ability_power.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Blink away from the current target and deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to them. Every 3rd cast, deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to all enemies in a line.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    garen: {
        name: "garen",
        displayName: "Garen",
        cost: 2,
        traits: ["8bit", "sentinel"],
        position_type: "front",
        getAbilityName: () => {
            return `Power-Up!`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const healthRatios = [2, 2.15, 2.3];
            const adRatio = 1.6;
            const maxHealthRatio = 0.1;

            const health =
                unit.stats["ability_power"].total *
                healthRatios[unit.starLevel - 1];

            const damage =
                unit.stats["attack_damage"].total * adRatio +
                unit.totalHealth * maxHealthRatio;

            const abilityMainText = `<p>Gain <span class="health">${Math.round(
                health
            )} (<img src="general/stats/ability_power.png"/>)</span> max Health. Garen's next attack deals <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/health.png"/>)</span> physical damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +400 <img src="general/stats/health.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const healthRatios = [2, 2.15, 2.3];
            const adRatio = 1.6;
            const maxHealthRatio = 0.1;

            const health =
                unit.stats["ability_power"].total *
                healthRatios[unit.starLevel - 1];

            const damage =
                unit.stats["attack_damage"].total * adRatio +
                unit.totalHealth * maxHealthRatio;

            const abilityDetails = `<p>Health: <span class="health">${Math.round(
                health
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                healthRatios[0] * 100
            )}% / ${Math.round(healthRatios[1] * 100)}% / ${Math.round(
                healthRatios[2] * 100
            )}% ]</span><br/>
            Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${
                adRatio * 100
            }% (<img src="general/stats/attack_damage.png"/>) + ${
                maxHealthRatio * 100
            }% (<img src="general/stats/health.png"/>)  
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Gain <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> max Health. Garen's next attack deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/health.png"/>)</span> physical damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +400 <img src="general/stats/health.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    gnar: {
        name: "gnar",
        displayName: "Gnar",
        cost: 2,
        traits: ["pentakill", "superfan", "mosher"],
        position_type: "front",
        getAbilityName: () => {
            return `Rabid Fandom`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const healthRatios = [5, 5.5, 6];
            const adRatios = [3.35, 3.35, 3.35];

            const health =
                unit.stats["ability_power"].total *
                healthRatios[unit.starLevel - 1];

            const damage =
                unit.stats["attack_damage"].total *
                adRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Leap over the current target and transform into Mega Gnar for the rest of combat, gaining <span class="health">${Math.round(
                health
            )} (<img src="general/stats/ability_power.png"/>)</span> Health and <span class="effectText">70%</span> Attack Damage. Subsequent casts deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: At combat start, transform into Mega Gnar</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const healthRatios = [5, 5.5, 6];
            const adRatios = [3.35, 3.35, 3.35];

            const health =
                unit.stats["ability_power"].total *
                healthRatios[unit.starLevel - 1];

            const damage =
                unit.stats["attack_damage"].total *
                adRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Health: <span class="health">${Math.round(
                health
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                healthRatios[0] * 100
            )}% / ${Math.round(healthRatios[1] * 100)}% / ${Math.round(
                healthRatios[2] * 100
            )}% ]</span><br/>

            Damage: <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                adRatios[0] * 100
            )}% / ${Math.round(adRatios[1] * 100)}% / ${Math.round(
                adRatios[2] * 100
            )}% ]</span><br/>  
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Leap over the current target and transform into Mega Gnar for the rest of combat, gaining <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> Health and <span class="effectText">70%</span> Attack Damage. Subsequent casts deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: At combat start, transform into Mega Gnar</span>
            </p>`;

            return abilityMainText;
        },
    },
    gragas: {
        name: "gragas",
        displayName: "Gragas",
        cost: 2,
        traits: ["disco", "spellweaver", "bruiser"],
        position_type: "front",
        getAbilityName: () => {
            return `Boogie Hour`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const healPerLevel = [500, 575, 650];
            const damageRatios = [1.5, 2.25, 3.5];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p> Heal <span class="health">${
                healPerLevel[unit.starLevel - 1]
            }</span> Health over 2 seconds. Then, deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies and <span class="effectText">Chill</span> them for 3 seconds.<br/>
            <br/>
            <span class="blingBonusText">Chill: Reduce Attack Speed by 30%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Gragas takes 8% less damage and deals 15% more damage.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const healPerLevel = [500, 575, 650];
            const damageRatios = [1.5, 2.25, 3.5];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Heal: <span class="health">${Math.round(
                healPerLevel[unit.starLevel - 1]
            )} (<img src="general/stats/health.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                healPerLevel[0]
            )}% / ${Math.round(healPerLevel[1])}% / ${Math.round(
                healPerLevel[2]
            )}% ]</span><br/>

            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>  
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p> Heal <span class="health">???</span> Health over 2 seconds. Then, deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies and <span class="effectText">Chill</span> them for 3 seconds.<br/>
            <br/>
            <span class="blingBonusText">Chill: Reduce Attack Speed by 30%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Gragas takes 8% less damage and deals 15% more damage.</span>
            </p>`;

            return abilityMainText;
        },
    },
    countryhecarim: {
        name: "hecarim",
        displayName: "Hecarim",
        cost: 0,
        traits: [],
        position_type: "front",
        getAbilityName: () => {
            return `The Reaping`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const adRatio = 2;

            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityMainText = `<p><b>Passive:</b> On entrance, grant all allies <span class="effectText">15%</span> Attack Speed for the rest of combat.<br/>
            <br/>
            <b>Active:</b> Deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to all enemies within 2 hexes.<br/>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const adRatio = 2;

            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityDetails = `<p>Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${
                adRatio * 100
            } (<img src="general/stats/attack_damage.png"/>) 
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b> On entrance, grant all allies <span class="effectText">15%</span> Attack Speed for the rest of combat.<br/>
            <br/>
            <b>Active:</b> Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to all enemies within 2 hexes.<br/>
            </p>`;

            return abilityMainText;
        },
    },
    illaoi: {
        name: "illaoi",
        displayName: "Illaoi",
        cost: 5,
        traits: ["illbeats", "bruiser"],
        position_type: "front",
        getAbilityName: () => {
            return `Drums of the Deep`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const tentacleDamageRatios = [0.6, 0.6, 5];
            const circleDamageRatios = [1, 1.5, 40];
            const armorMRperLevel = [100, 150, 400];

            const tentacleDamage =
                tentacleDamageRatios[unit.starLevel - 1] *
                (unit.stats["armor"].total + unit.stats["magic_resist"].total);
            const circleDamage =
                unit.stats["ability_power"].total *
                circleDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p><b>Passive:</b>: Every 3 seconds, Illaoi's tentacles deal <span class="magicDamage">${Math.round(
                tentacleDamage
            )} (<img src="general/stats/armor.png"/><img src="general/stats/magic_resist.png"/>)</span> magic damage to nearby enemies.<br/>
            <br/>
            <b>Active:</b> Gain <span class="effectText">${
                armorMRperLevel[unit.starLevel - 1]
            }</span> Armor and Magic Resist for 3.5 seconds. Revive or fully heal the lowest Health tentacle. Leap at the nearest enemy and deal <span class="magicDamage">${Math.round(
                circleDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage in a large circle 3 times as tentacles slam in unison.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +10 <img src="general/stats/ability_power.png"/> +15 <img src="general/stats/armor.png"/> +5 <img src="general/stats/magic_resist.png"/> and tentacles slam every 2 seconds.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const tentacleDamageRatios = [0.6, 0.6, 5];
            const circleDamageRatios = [1, 1.5, 40];
            const armorMRperLevel = [100, 150, 400];

            const tentacleDamage =
                tentacleDamageRatios[unit.starLevel - 1] *
                (unit.stats["armor"].total + unit.stats["magic_resist"].total);
            const circleDamage =
                unit.stats["ability_power"].total *
                circleDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>Damage <img src="general/stats/armor.png"/> <img src="general/stats/magic_resist.png"/> <span class="abilityRatios">[ ${Math.round(
                tentacleDamageRatios[0] * 100
            )}% / ${Math.round(tentacleDamageRatios[1] * 100)}% / ${Math.round(
                tentacleDamageRatios[2] * 100
            )}% ]</span><br/>

            Circle Damage: <span class="magicDamage">${Math.round(
                circleDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                circleDamageRatios[0] * 100
            )}% / ${Math.round(circleDamageRatios[1] * 100)}% / ${Math.round(
                circleDamageRatios[2] * 100
            )}% ]</span><br/>

            Armor and Magic Resist <span class="abilityRatios">[ ${Math.round(
                armorMRperLevel[0]
            )} / ${Math.round(armorMRperLevel[1])}/ ${Math.round(
                armorMRperLevel[2]
            )} ]</span><br/>

            Tentacle Damage: <span class="magicDamage">${Math.round(
                tentacleDamage
            )}</span> = ${
                tentacleDamageRatios[unit.starLevel - 1] * 100
            }% (<img src="general/stats/armor.png"/>) + ${
                tentacleDamageRatios[unit.starLevel - 1] * 100
            }% (<img src="general/stats/magic_resist.png"/>) 
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b>: Every 3 seconds, Illaoi's tentacles deal <span class="magicDamage">??? (<img src="general/stats/armor.png"/><img src="general/stats/magic_resist.png"/>)</span> magic damage to nearby enemies.<br/>
            <br/>
            <b>Active:</b> Gain <span class="effectText">???</span> Armor and Magic Resist for 3.5 seconds. Revive or fully heal the lowest Health tentacle. Leap at the nearest enemy and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage in a large circle 3 times as tentacles slam in unison.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +10 <img src="general/stats/ability_power.png"/> +15 <img src="general/stats/armor.png"/> +5 <img src="general/stats/magic_resist.png"/> and tentacles slam every 2 seconds.</span>
            </p>`;

            return abilityMainText;
        },
    },
    jax: {
        name: "jax",
        displayName: "Jax",
        cost: 2,
        traits: ["edm", "mosher"],
        position_type: "front",
        getAbilityName: () => {
            return `Counter Melody`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const slamDamageRatios = [2.3, 3.45, 5.2];
            const spinDamageRatios = [1.4, 2.1, 3.15];
            const range = 1 + Math.round(unit.currentAttackRange / 240);

            const slamDamage =
                unit.stats["ability_power"].total *
                slamDamageRatios[unit.starLevel - 1];
            const spinDamage =
                unit.stats["ability_power"].total *
                spinDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Leap at the highest Health enemy within ${range} (<img src="general/hex_range.png"/>) hexes and deal <span class="magicDamage">${Math.round(
                slamDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to them. Then, deal <span class="magicDamage">${Math.round(
                spinDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to all adjacent enemies. Gain <span class="effectText">10%</span> Attack Damage and Ability Power for the rest of combat.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const slamDamageRatios = [2.3, 3.45, 5.2];
            const spinDamageRatios = [1.4, 2.1, 3.15];
            const range = 1 + Math.round(unit.currentAttackRange / 240);

            const slamDamage =
                unit.stats["ability_power"].total *
                slamDamageRatios[unit.starLevel - 1];
            const spinDamage =
                unit.stats["ability_power"].total *
                spinDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Slam Damage: <span class="magicDamage">${Math.round(
                slamDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                slamDamageRatios[0] * 100
            )}% / ${Math.round(slamDamageRatios[1] * 100)}% / ${Math.round(
                slamDamageRatios[2] * 100
            )}% ]</span><br/>

            Spin Damage: <span class="magicDamage">${Math.round(
                spinDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                spinDamageRatios[0] * 100
            )}% / ${Math.round(spinDamageRatios[1] * 100)}% / ${Math.round(
                spinDamageRatios[2] * 100
            )}% ]</span><br/>

            Spin Damage: <span class="effectText">${range}</span> = 1 + <img src="general/hex_range.png"/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Leap at the highest Health enemy within ??? (<img src="general/hex_range.png"/>) hexes and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to them. Then, deal <span class="magicDamage">???(<img src="general/stats/ability_power.png"/>)</span> magic damage to all adjacent enemies. Gain <span class="effectText">10%</span> Attack Damage and Ability Power for the rest of combat.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    jhin: {
        name: "jhin",
        displayName: "Jhin",
        cost: 5,
        traits: ["maestro", "bigshot"],
        position_type: "back",
        getAbilityName: () => {
            return `Concerto of Demise in D Minor`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const riflesPerLevel = [1, 1, 4, 4];
            const apDamageRatio = [0.15, 0.25, 1.44, 1.44];
            const adDamageRatio = [0.6, 0.6, 4.44, 4.44];

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityMainText = `<p><b>Passive:</b> Attacks generate <span class="effectText">10</span> additional Mana. If your bench has 4 Grand Finale Rifles, begin conducting instead of attacking. Each Rifle fires at the same rate as the Maestro and deals <span class="physicalDamage">${Math.round(
                totalDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage. Every 4th volley deals 200% damage.<br/>
            <br/>
            <b>Active:</b> Put <span class="effectText">${
                riflesPerLevel[unit.starLevel - 1]
            }</span> Grand Finale Rifle into one of your empty bench slots. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> Combat Start: Put 1 Grand Finale Rifle onto an empty bench slot.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const riflesPerLevel = [1, 1, 4, 4];
            const apDamageRatio = [0.15, 0.25, 1.44, 1.44];
            const adDamageRatio = [0.6, 0.6, 4.44, 4.44];

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityDetails = `<p>
            Rifles Per Cast <span class="abilityRatios">[ ${Math.round(
                riflesPerLevel[0]
            )} / ${Math.round(riflesPerLevel[1])} / ${Math.round(
                riflesPerLevel[2]
            )} ]</span><br/> 

            Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                apDamageRatio[0] * 100
            )}% / ${Math.round(apDamageRatio[1] * 100)}% / ${Math.round(
                apDamageRatio[2] * 100
            )}% ]</span><br/> 

            Damage: (<img src="general/stats/attack_damage.png"/>) <span class="abilityRatios">[ ${Math.round(
                adDamageRatio[0] * 100
            )}% / ${Math.round(adDamageRatio[1] * 100)}% / ${Math.round(
                adDamageRatio[2] * 100
            )}% ]</span><br/> 

            Damage: <span class="physicalDamage">${Math.round(
                totalDamage
            )}</span> = ${
                adDamageRatio[unit.starLevel - 1] * 100
            }% (<img src="general/stats/attack_damage.png"/>) + ${
                apDamageRatio[unit.starLevel - 1] * 100
            }% (<img src="general/stats/ability_power.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b> Attacks generate <span class="effectText">10</span> additional Mana. If your bench has 4 Grand Finale Rifles, begin conducting instead of attacking. Each Rifle fires at the same rate as the Maestro and deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage. Every 4th volley deals 200% damage.<br/>
            <br/>
            <b>Active:</b> Put <span class="effectText">???</span> Grand Finale Rifle into one of your empty bench slots. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> Combat Start: Put 1 Grand Finale Rifle onto an empty bench slot.</span>
            </p>`;

            return abilityMainText;
        },
    },
    jinx: {
        name: "jinx",
        displayName: "Jinx",
        cost: 1,
        traits: ["punk", "rapidfire"],
        position_type: "back",
        getAbilityName: () => {
            return `Escalation`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const attackSpeedRatio = 0.04;
            const adRatio = 0.5;

            const attackSpeed =
                unit.stats["ability_power"].total * attackSpeedRatio;
            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityMainText = `<p><b>Passive Minigun:</b> Attacks grant <span class="attackSpeed">${Math.round(
                attackSpeed
            )} (<img src="general/stats/ability_power.png"/>)</span> Attack Speed. <br/>
                    <b>Passive Rocket Launcher:</b> Attacks deal <span class="physicalDamage">${Math.round(
                        damage
                    )} (<img src="general/stats/attack_damage.png"/>)</span> bonus physical damage. <br/>
                    <br/>
                    <b>Active:</b> Swap between Minigun and Rocket Launcher.<br/> 
                    <br/>
                    <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Minigun attacks grant an extra 1% Attack Speed, Rocket Launcher attacks deal an extra 10% (<img src="general/stats/attack_damage.png"/>) bonus damage.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const attackSpeedRatio = 0.04;
            const adRatio = 0.5;

            const attackSpeed =
                unit.stats["ability_power"].total * attackSpeedRatio;
            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityDetails = `<p>Attack Speed: <span class="attackSpeed">${Math.round(
                attackSpeed
            )}% </span> = ${
                attackSpeedRatio * 100
            }% <img src="general/stats/ability_power.png"/><br/>
            Rocket Damage: <span class="physicalDamage">${Math.round(
                damage
            )} </span> = ${
                adRatio * 100
            }% <img src="general/stats/attack_damage.png"/><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive Minigun:</b> Attacks grant <span class="attackSpeed">??? (<img src="general/stats/ability_power.png"/>)</span> Attack Speed. <br/>
                    <b>Passive Rocket Launcher:</b> Attacks deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> bonus physical damage. <br/>
                    <br/>
                    <b>Active:</b> Swap between Minigun and Rocket Launcher.<br/> 
                    <br/>
                    <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Minigun attacks grant an extra 1% Attack Speed, Rocket Launcher attacks deal an extra 10% (<img src="general/stats/attack_damage.png"/>) bonus damage.</span>
            </p>`;

            return abilityMainText;
        },
    },
    kaisa: {
        name: "kaisa",
        displayName: "Kaisa",
        cost: 2,
        traits: ["kda", "bigshot"],
        position_type: "back",
        getAbilityName: () => {
            return `Got the Boom`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const apDamageRatio = [0.3, 0.45, 0.65];
            const adDamageRatio = [2.8, 2.8, 2.85];

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityMainText = `<p>Dash up to <span class="effectText">2</span> hexes and fire a missile at the current target. It deals <span class="physicalDamage">${Math.round(
                totalDamage
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to the first enemy hit.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +2 <img src="general/hex_range.png"/> and dash farther.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const apDamageRatio = [0.3, 0.45, 0.65];
            const adDamageRatio = [2.8, 2.8, 2.85];

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityDetails = `<p>
            Damage: (<img src="general/stats/attack_damage.png"/>) <span class="abilityRatios">[ ${Math.round(
                adDamageRatio[0] * 100
            )}% / ${Math.round(adDamageRatio[1] * 100)}% / ${Math.round(
                adDamageRatio[2] * 100
            )}% ]</span><br/> 

            Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                apDamageRatio[0] * 100
            )}% / ${Math.round(apDamageRatio[1] * 100)}% / ${Math.round(
                apDamageRatio[2] * 100
            )}% ]</span><br/> 

            Damage: <span class="physicalDamage">${Math.round(
                totalDamage
            )}</span> = ${
                adDamageRatio[unit.starLevel - 1] * 100
            }% (<img src="general/stats/attack_damage.png"/>) + ${
                apDamageRatio[unit.starLevel - 1] * 100
            }% (<img src="general/stats/ability_power.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Dash up to <span class="effectText">2</span> hexes and fire a missile at the current target. It deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to the first enemy hit.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +2 <img src="general/hex_range.png"/> and dash farther.</span>
            </p>`;

            return abilityMainText;
        },
    },
    karthus: {
        name: "karthus",
        displayName: "Karthus",
        cost: 4,
        traits: ["pentakill", "executioner"],
        position_type: "back",
        getAbilityName: () => {
            return `Mortal Reminder`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [2.2, 3.3, 10];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p> Deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the 5 lowest Health enemies. Gain 10 Mana for each that dies. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [2.2, 3.3, 10];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p> Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to the 5 lowest Health enemies. Gain 10 Mana for each that dies. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    katarina: {
        name: "katarina",
        displayName: "Katarina",
        cost: 2,
        traits: ["country", "crowddiver"],
        position_type: "front",
        getAbilityName: () => {
            return `Bouncing Blade`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.4, 2.1, 3.15];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Throw a blade at the current target that bounces 3 times, dealing <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage and applying <span class="effectText">Wound</span> for 6 seconds.<br/>
            <br/>
            <span class="blingBonusText">Wound Reduce healing received by 33%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> and the final blade bounce deals 45% more magic damage.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.4, 2.1, 3.15];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Throw a blade at the current target that bounces 3 times, dealing <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage and applying <span class="effectText">Wound</span> for 6 seconds.<br/>
            <br/>
            <span class="blingBonusText">Wound Reduce healing received by 33%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> and the final blade bounce deals 45% more magic damage.</span>
            </p>`;

            return abilityMainText;
        },
    },
    kayle: {
        name: "kayle",
        displayName: "Kayle",
        cost: 2,
        traits: ["pentakill", "edgelord"],
        position_type: "back",
        getAbilityName: () => {
            return `Fires of Ascension`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const bonusDamageRatios = [0.3, 0.45, 0.7];
            const finaleDamageRatios = [1.9, 2.85, 4.3];

            const bonusDamage =
                unit.stats["ability_power"].total *
                bonusDamageRatios[unit.starLevel - 1];
            const finaleDamage =
                unit.stats["ability_power"].total *
                finaleDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>For 5 seconds, attacks deal <span class="magicDamage">${Math.round(
                bonusDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> bonus magic damage in waves at the current target and behind them. <span class="effectText">Shred</span> enemies hit for 4 seconds. Finally, deal <span class="magicDamage">${Math.round(
                finaleDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies around the target.<br/>
            <br/>
            <span class="blingBonusText">Shred: Reduce Magic Resist by 30%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const bonusDamageRatios = [0.3, 0.45, 0.7];
            const finaleDamageRatios = [1.9, 2.85, 4.3];

            const bonusDamage =
                unit.stats["ability_power"].total *
                bonusDamageRatios[unit.starLevel - 1];
            const finaleDamage =
                unit.stats["ability_power"].total *
                finaleDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Bonus Damage: <span class="magicDamage">${Math.round(
                bonusDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                bonusDamageRatios[0] * 100
            )}% / ${Math.round(bonusDamageRatios[1] * 100)}% / ${Math.round(
                bonusDamageRatios[2] * 100
            )}% ]</span><br/>

            Finale Damage: <span class="magicDamage">${Math.round(
                finaleDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                finaleDamageRatios[0] * 100
            )}% / ${Math.round(finaleDamageRatios[1] * 100)}% / ${Math.round(
                finaleDamageRatios[2] * 100
            )}% ]</span><br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>For 5 seconds, attacks deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> bonus magic damage in waves at the current target and behind them. <span class="effectText">Shred</span> enemies hit for 4 seconds. Finally, deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies around the target.<br/>
            <br/>
            <span class="blingBonusText">Shred: Reduce Magic Resist by 30%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    kayn: {
        name: "kayn",
        displayName: "Kayn",
        cost: 5,
        traits: ["heartsteel", "edgelord", "wildcard"],
        position_type: "front",
        getAbilityName: () => {
            return `Fear the Reaper`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [4, 6, 40];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Dash, then deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies and <span class="effectText">Chill</span> them for 3 seconds. If Kayn only hits one target, he immediately casts again.<br/>
            <br/>
            <span class="blingBonusText">Chill: Reduce Attack Speed by 20%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5 <img src="general/stats/ability_power.png"/> Shadow Assassin rewards an extra 2 gold. Rhaast rewards an extra 1 Tactician Health.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [4, 6, 40];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Dash, then deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies and <span class="effectText">Chill</span> them for 3 seconds. If Kayn only hits one target, he immediately casts again.<br/>
            <br/>
            <span class="blingBonusText">Chill: Reduce Attack Speed by 20%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5 <img src="general/stats/ability_power.png"/> Shadow Assassin rewards an extra 2 gold. Rhaast rewards an extra 1 Tactician Health.</span>
            </p>`;

            return abilityMainText;
        },
    },
    kennen: {
        name: "kennen",
        displayName: "Kennen",
        cost: 2,
        traits: ["truedamage", "superfan", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `Shock and Awe`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.45, 2.15, 3.25];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Discharge 2 Jolts over 2 seconds. Each Jolt deals <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to a random enemy within range and Stuns them for 0.75 seconds.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: Discharge at 2nd target for 50% damage and Stun duration.</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +75 <img src="general/stats/health.png"/> Jolts heal 4% Maximum Health.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.45, 2.15, 3.25];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Discharge 2 Jolts over 2 seconds. Each Jolt deals <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to a random enemy within range and Stuns them for 0.75 seconds.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: Discharge at 2nd target for 50% damage and Stun duration.</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +75 <img src="general/stats/health.png"/> Jolts heal 4% Maximum Health.</span>
            </p>`;

            return abilityMainText;
        },
    },
    ksante: {
        name: "ksante",
        displayName: "K'Sante",
        cost: 1,
        traits: ["heartsteel", "sentinel"],
        position_type: "front",
        getAbilityName: () => {
            return `Block the Haters`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageReductionApRatio = [0.2, 0.2, 0.25];
            const baseDamageReduction = 30;
            const adRatio = 8;

            const damageReductionAp =
                unit.stats["ability_power"].total *
                damageReductionApRatio[unit.starLevel - 1];
            const totalDamageReduction = Math.min(
                75,
                baseDamageReduction + damageReductionAp
            );
            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityMainText = `<p>Enter a defensive stance, reducing damage taken by <span class="effectText">${Math.round(
                totalDamageReduction
            )}% (<img src="general/stats/ability_power.png"/>)</span> for 2.5 seconds. Afterwards, deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +225 <img src="general/stats/health.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageReductionApRatio = [0.2, 0.2, 0.25];
            const baseDamageReduction = 30;
            const adRatio = 8;

            const damageReductionAp =
                unit.stats["ability_power"].total *
                damageReductionApRatio[unit.starLevel - 1];
            const totalDamageReduction = Math.min(
                75,
                baseDamageReduction + damageReductionAp
            );
            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityDetails = `<p>
            Damage Reduction <img src="general/stats/ability_power.png"/> <span class="abilityRatios">[ ${Math.round(
                damageReductionApRatio[0] * 100
            )}% / ${Math.round(
                damageReductionApRatio[1] * 100
            )}% / ${Math.round(damageReductionApRatio[2] * 100)}% ]</span><br/>

            Damage Reduction: <span class="effectText">${totalDamageReduction}%</span> (max 75%) = <span class="effectText">${baseDamageReduction}%</span> + ${damageReductionAp} <img src="general/stats/ability_power.png"/><br/>
            
            Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${
                adRatio * 100
            }% <img src="general/stats/attack_damage.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Enter a defensive stance, reducing damage taken by <span class="effectText">???% (<img src="general/stats/ability_power.png"/>)</span> for 2.5 seconds. Afterwards, deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +225 <img src="general/stats/health.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    lillia: {
        name: "lillia",
        displayName: "Lillia",
        cost: 1,
        traits: ["kda", "superfan", "sentinel"],
        position_type: "front",
        getAbilityName: () => {
            return `Confetti Bloom`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.8, 2.7, 4];
            const selfHealRatios = [1.8, 2.2, 2.6];
            const allyHealRatios = [0.9, 1.1, 1.3];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const selfHeal =
                unit.stats["ability_power"].total *
                selfHealRatios[unit.starLevel - 1];

            const allyHeal =
                unit.stats["ability_power"].total *
                allyHealRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies. Heal Lillia for <span class="health">${Math.round(
                selfHeal
            )} (<img src="general/stats/ability_power.png"/>)</span> and her nearest ally for <span class="health">${Math.round(
                allyHeal
            )} (<img src="general/stats/ability_power.png"/>)</span>. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> Confetti Bloom heals 12% more.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.8, 2.7, 4];
            const selfHealRatios = [1.8, 2.2, 2.6];
            const allyHealRatios = [0.9, 1.1, 1.3];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const selfHeal =
                unit.stats["ability_power"].total *
                selfHealRatios[unit.starLevel - 1];

            const allyHeal =
                unit.stats["ability_power"].total *
                allyHealRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            
            Self healing: <span class="health">${Math.round(
                selfHeal
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                selfHealRatios[0] * 100
            )}% / ${Math.round(selfHealRatios[1] * 100)}% / ${Math.round(
                selfHealRatios[2] * 100
            )}% ]</span><br/>

            Ally healing: <span class="health">${Math.round(
                allyHeal
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                allyHealRatios[0] * 100
            )}% / ${Math.round(allyHealRatios[1] * 100)}% / ${Math.round(
                allyHealRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies. Heal Lillia for <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> and her nearest ally for <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span>. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> Confetti Bloom heals 12% more.</span>
            </p>`;

            return abilityMainText;
        },
    },
    lucian: {
        name: "lucian",
        displayName: "Lucian",
        cost: 5,
        traits: ["jazz", "rapidfire"],
        position_type: "back",
        getAbilityName: () => {
            return `Arpeggio`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const armorReductionPerLevel = [3, 5, 20];
            const apDamageRatios = [0.2, 0.3, 1];
            const adDamageRatios = [0.55, 0.55, 10];
            const baseNumberOfShots = 14;

            const shotsPerAttackSpeed = 0.2;
            const numberOfShots =
                baseNumberOfShots +
                Math.floor(
                    unit.stats["attack_speed"].bonus / shotsPerAttackSpeed
                );

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatios[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatios[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityMainText = `<p>Fire <span class="attackSpeed">${Math.round(
                numberOfShots
            )} (<img src="general/stats/attack_speed.png"/>)</span> shots toward the furthest enemy. Each shot explodes on the first enemy hit, dealing <span class="physicalDamage">${Math.round(
                totalDamage
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to all nearby enemies and reducing their Armor by <span class="effectText">${
                armorReductionPerLevel[unit.starLevel - 1]
            }</span> for the rest of combat.<br/>
            <br/>
            If Arpeggio ends early, gain Mana based on the number of unused shots.  <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> and Arpeggio fires 3 more shots.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const armorReductionPerLevel = [3, 5, 20];
            const apDamageRatios = [0.2, 0.3, 1];
            const adDamageRatios = [0.55, 0.55, 10];
            const baseNumberOfShots = 14;

            const shotsPerAttackSpeed = 0.2;
            const numberOfShots =
                baseNumberOfShots +
                Math.floor(
                    unit.stats["attack_speed"].bonus / shotsPerAttackSpeed
                );

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatios[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatios[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityDetails = `<p>
            Armor Reduction <span class="abilityRatios">[ ${Math.round(
                armorReductionPerLevel[0]
            )} / ${Math.round(armorReductionPerLevel[1])} / ${Math.round(
                armorReductionPerLevel[2]
            )} ]</span><br/> 

            Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                apDamageRatios[0] * 100
            )}% / ${Math.round(apDamageRatios[1] * 100)}% / ${Math.round(
                apDamageRatios[2] * 100
            )}% ]</span><br/> 

            Damage: (<img src="general/stats/attack_damage.png"/>) <span class="abilityRatios">[ ${Math.round(
                adDamageRatios[0] * 100
            )}% / ${Math.round(adDamageRatios[1] * 100)}% / ${Math.round(
                adDamageRatios[2] * 100
            )}% ]</span><br/> 

            Number of shots: <span class="effectText">${numberOfShots}</span> = ${baseNumberOfShots} + 1 per ${
                shotsPerAttackSpeed * 100
            }% bonus <img src="general/stats/attack_speed.png"/><br/>

            Total Damage: <span class="physicalDamage">${Math.round(
                totalDamage
            )}</span> = ${Math.round(
                adDamageRatios[unit.starLevel - 1] * 100
            )}% (<img src="general/stats/attack_damage.png"/>) + ${Math.round(
                apDamageRatios[unit.starLevel - 1] * 100
            )}% (<img src="general/stats/ability_power.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Fire <span class="attackSpeed">??? (<img src="general/stats/attack_speed.png"/>)</span> shots toward the furthest enemy. Each shot explodes on the first enemy hit, dealing <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage to all nearby enemies and reducing their Armor by <span class="effectText">???</span> for the rest of combat.<br/>
            <br/>
            If Arpeggio ends early, gain Mana based on the number of unused shots.  <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> and Arpeggio fires 3 more shots.</span>
            </p>`;

            return abilityMainText;
        },
    },
    lulu: {
        name: "lulu",
        displayName: "Lulu",
        cost: 3,
        traits: ["hyperpop", "spellweaver"],
        position_type: "back",
        getAbilityName: () => {
            return `Tastes like Glitter`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const firstTargetDamageRatios = [2.4, 3.6, 5.75];
            const secondTargetDamageRatios = [1.5, 2.25, 3.6];
            const thirdCastDamageRatios = [1.2, 1.8, 2.8];

            const firstTargetDamage =
                unit.stats["ability_power"].total *
                firstTargetDamageRatios[unit.starLevel - 1];
            const secondTargetDamage =
                unit.stats["ability_power"].total *
                secondTargetDamageRatios[unit.starLevel - 1];
            const thirdCastDamage =
                unit.stats["ability_power"].total *
                thirdCastDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Fire a bolt toward the current target. It deals <span class="magicDamage">${Math.round(
                firstTargetDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the first enemy it passes through and <span class="magicDamage">${Math.round(
                secondTargetDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the second. 
            Every 3rd cast, Stun the 3 nearest enemies for 1.25 seconds and deal <span class="magicDamage">${Math.round(
                thirdCastDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage instead.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const firstTargetDamageRatios = [2.4, 3.6, 5.75];
            const secondTargetDamageRatios = [1.5, 2.25, 3.6];
            const thirdCastDamageRatios = [1.2, 1.8, 2.8];

            const firstTargetDamage =
                unit.stats["ability_power"].total *
                firstTargetDamageRatios[unit.starLevel - 1];
            const secondTargetDamage =
                unit.stats["ability_power"].total *
                secondTargetDamageRatios[unit.starLevel - 1];
            const thirdCastDamage =
                unit.stats["ability_power"].total *
                thirdCastDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                firstTargetDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                firstTargetDamageRatios[0] * 100
            )}% / ${Math.round(
                firstTargetDamageRatios[1] * 100
            )}% / ${Math.round(firstTargetDamageRatios[2] * 100)}% ]</span><br/>
            
            Second Target Damage: <span class="magicDamage">${Math.round(
                secondTargetDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                secondTargetDamageRatios[0] * 100
            )}% / ${Math.round(
                secondTargetDamageRatios[1] * 100
            )}% / ${Math.round(
                secondTargetDamageRatios[2] * 100
            )}% ]</span><br/>

            Third Cast Damage: <span class="magicDamage">${Math.round(
                thirdCastDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                thirdCastDamageRatios[0] * 100
            )}% / ${Math.round(thirdCastDamageRatios[1] * 100)}% / ${Math.round(
                thirdCastDamageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Fire a bolt toward the current target. It deals <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to the first enemy it passes through and <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to the second. 
            Every 3rd cast, Stun the 3 nearest enemies for 1.25 seconds and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage instead.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    lux: {
        name: "lux",
        displayName: "Lux",
        cost: 3,
        traits: ["edm", "dazzler"],
        position_type: "back",
        getAbilityName: () => {
            return `Laser Light Show`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatio = [2.3, 3.45, 5.5];

            const damage =
                unit.stats["ability_power"].total *
                damageRatio[unit.starLevel - 1];

            const abilityMainText = `<p>Fire a beam at the farthest enemy, dealing <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to all enemies it hits. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15 <img src="general/stats/crit_chance.png"/> and this ability can critically strike.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatio = [2.3, 3.45, 5.5];

            const damage =
                unit.stats["ability_power"].total *
                damageRatio[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatio[0] * 100
            )}% / ${Math.round(damageRatio[1] * 100)}% / ${Math.round(
                damageRatio[2] * 100
            )}% ]</span>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Fire a beam at the farthest enemy, dealing <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to all enemies it hits. <br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15 <img src="general/stats/crit_chance.png"/> and this ability can critically strike.</span>
            </p>`;

            return abilityMainText;
        },
    },
    missfortune: {
        name: "missfortune",
        displayName: "Miss Fortune",
        cost: 3,
        traits: ["jazz", "bigshot"],
        position_type: "back",
        getAbilityName: () => {
            return `Double Time`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const primaryDamageRatios = [2.7, 2.7, 2.75];
            const secondaryDamageRatios = [1.8, 1.8, 1.8];
            const apRatio = 0.4;

            const primaryDamage =
                unit.stats["attack_damage"].total *
                primaryDamageRatios[unit.starLevel - 1];

            const secondaryDamage =
                unit.stats["attack_damage"].total *
                secondaryDamageRatios[unit.starLevel - 1];

            const bonusAs = unit.stats["ability_power"].total * apRatio;

            const abilityMainText = `<p>Deal <span class="physicalDamage">${Math.round(
                primaryDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target and <span class="physicalDamage">${Math.round(
                secondaryDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the closest enemy behind them. If either die, gain <span class="effectText">${Math.round(
                bonusAs
            )}% (<img src="general/stats/ability_power.png"/>)</span> Attack Speed for 4 seconds.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const primaryDamageRatios = [2.7, 2.7, 2.75];
            const secondaryDamageRatios = [1.8, 1.8, 1.8];
            const apRatio = 0.4;

            const primaryDamage =
                unit.stats["attack_damage"].total *
                primaryDamageRatios[unit.starLevel - 1];

            const secondaryDamage =
                unit.stats["attack_damage"].total *
                secondaryDamageRatios[unit.starLevel - 1];

            const bonusAs = unit.stats["ability_power"].total * apRatio;

            const abilityDetails = `<p>
            Primary Damage: <span class="physicalDamage">${Math.round(
                primaryDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                primaryDamageRatios[0] * 100
            )}% / ${Math.round(primaryDamageRatios[1] * 100)}% / ${Math.round(
                primaryDamageRatios[2] * 100
            )}% ]</span><br/>

            Secondary Damage: <span class="physicalDamage">${Math.round(
                secondaryDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                secondaryDamageRatios[0] * 100
            )}% / ${Math.round(secondaryDamageRatios[1] * 100)}% / ${Math.round(
                secondaryDamageRatios[2] * 100
            )}% ]</span><br/>

            Attack Speed: <span class="effectText">${bonusAs}%</span> = ${
                apRatio * 100
            }% (<img src="general/stats/ability_power.png"/>)
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target and <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the closest enemy behind them. If either die, gain <span class="effectText">???% (<img src="general/stats/ability_power.png"/>)</span> Attack Speed for 4 seconds.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    mordekaiser: {
        name: "mordekaiser",
        displayName: "Mordekaiser",
        cost: 3,
        traits: ["pentakill", "sentinel"],
        position_type: "front",
        getAbilityName: () => {
            return `Face-Melter`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const shieldRatios = [5, 5.75, 6.5];
            const zoneDamageRatios = [2, 3, 4.8];
            const finaleDamageRatios = [2, 3, 4.8];

            const shield =
                unit.stats["ability_power"].total *
                shieldRatios[unit.starLevel - 1];

            const zoneDamage =
                unit.stats["ability_power"].total *
                zoneDamageRatios[unit.starLevel - 1];

            const finaleDamage =
                unit.stats["ability_power"].total *
                finaleDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p> Gain a <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> Shield and deal <span class="magicDamage">${Math.round(
                zoneDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies over 3 seconds. Afterwards, deal <span class="magicDamage">${Math.round(
                finaleDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to nearby enemies.<br/>
            <br/>
            When Face-Melter kills an enemy, gain <span class="effectText"> 4%</span> Ability Power and Attack Damage, and <span class="effectText"> 4</span> Armor and Magic Resist.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +5 <img src="general/stats/ability_power.png"/> When this ability kills, permanently gain 1% permanent Ability Power. (0 Stacks)</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const shieldRatios = [5, 5.75, 6.5];
            const zoneDamageRatios = [2, 3, 4.8];
            const finaleDamageRatios = [2, 3, 4.8];

            const shield =
                unit.stats["ability_power"].total *
                shieldRatios[unit.starLevel - 1];

            const zoneDamage =
                unit.stats["ability_power"].total *
                zoneDamageRatios[unit.starLevel - 1];

            const finaleDamage =
                unit.stats["ability_power"].total *
                finaleDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Shield: <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                shieldRatios[0] * 100
            )}% / ${Math.round(shieldRatios[1] * 100)}% / ${Math.round(
                shieldRatios[2] * 100
            )}% ]</span><br/>
            
            Damage: <span class="magicDamage">${Math.round(
                zoneDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                zoneDamageRatios[0] * 100
            )}% / ${Math.round(zoneDamageRatios[1] * 100)}% / ${Math.round(
                zoneDamageRatios[2] * 100
            )}% ]</span><br/>

            Finale Damage: <span class="magicDamage">${Math.round(
                finaleDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                finaleDamageRatios[0] * 100
            )}% / ${Math.round(finaleDamageRatios[1] * 100)}% / ${Math.round(
                finaleDamageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p> Gain a <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> Shield and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to adjacent enemies over 3 seconds. Afterwards, deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to nearby enemies.<br/>
            <br/>
            When Face-Melter kills an enemy, gain <span class="effectText"> 4%</span> Ability Power and Attack Damage, and <span class="effectText"> 4</span> Armor and Magic Resist.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +5 <img src="general/stats/ability_power.png"/> When this ability kills, permanently gain 1% permanent Ability Power. (0 Stacks)</span>
            </p>`;

            return abilityMainText;
        },
    },
    nami: {
        name: "nami",
        displayName: "Nami",
        cost: 1,
        traits: ["disco", "dazzler"],
        position_type: "back",
        getAbilityName: () => {
            return `Disco Prison`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatio = [3, 4.5, 6.75];

            const damage =
                unit.stats["ability_power"].total *
                damageRatio[unit.starLevel - 1];

            const abilityMainText = `<p>Deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target and Stun them for 1.5 seconds.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatio = [3, 4.5, 6.75];

            const damage =
                unit.stats["ability_power"].total *
                damageRatio[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatio[0] * 100
            )}% / ${Math.round(damageRatio[1] * 100)}% / ${Math.round(
                damageRatio[2] * 100
            )}% ]</span>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target and Stun them for 1.5 seconds.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +20 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    neeko: {
        name: "neeko",
        displayName: "Neeko",
        cost: 3,
        traits: ["kda", "superfan", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `Cosplay`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const shieldRatio = [2.5, 3, 3.5];
            const damageRatio = [0.7, 0.9, 1.15];

            const shield =
                unit.stats["ability_power"].total *
                shieldRatio[unit.starLevel - 1];

            const abilityMainText = `<p>Cosplay the highest Health ally and gain a <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> Shield + <span class="effectText">5%</span> of the ally's Health for 4 seconds. When it breaks, deal <span class="magicDamage">${Math.round(
                damageRatio[unit.starLevel - 1] * 100
            )}%</span> of its initial value as magic damage to adjacent enemies.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> Neeko grants 20 Mana to the ally she copies.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const shieldRatio = [2.5, 3, 3.5];
            const damageRatio = [0.7, 0.9, 1.15];

            const shield =
                unit.stats["ability_power"].total *
                shieldRatio[unit.starLevel - 1];

            const abilityDetails = `<p>
            Shield: <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                shieldRatio[0] * 100
            )}% / ${Math.round(shieldRatio[1] * 100)}% / ${Math.round(
                shieldRatio[2] * 100
            )}% ]</span><br/>

            Percent Damage: <span class="abilityRatios">[ ${Math.round(
                damageRatio[0] * 100
            )}% / ${Math.round(damageRatio[1] * 100)}% / ${Math.round(
                damageRatio[2] * 100
            )}% ]</span>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Cosplay the highest Health ally and gain a <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> Shield + <span class="effectText">5%</span> of the ally's Health for 4 seconds. When it breaks, deal <span class="magicDamage">???%</span> of its initial value as magic damage to adjacent enemies.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> Neeko grants 20 Mana to the ally she copies.</span>
            </p>`;

            return abilityMainText;
        },
    },
    olaf: {
        name: "olaf",
        displayName: "Olaf",
        cost: 1,
        traits: ["pentakill", "bruiser"],
        position_type: "front",
        getAbilityName: () => {
            return `Berserker Rage`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const bonusAttackSpeedRatio = 0.0012;
            const healRatios = [0.2, 0.25, 0.35];

            const heal =
                unit.stats["ability_power"].total *
                healRatios[unit.starLevel - 1];

            const bonusAS = unit.totalHealth * bonusAttackSpeedRatio;

            const abilityMainText = `<p><b>Passive</b>: Heal <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/ability_power.png"/>)</span> Health on attack. For every 1% missing Health, gain <span class="effectText">${Math.round(
                bonusAS
            )}% (<img src="general/stats/health.png"/>)</span> Attack Speed.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +75 <img src="general/stats/health.png"/> +10 <img src="general/stats/armor.png"/> +10 <img src="general/stats/magic_resist.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const bonusAttackSpeedRatio = 0.0012;
            const healRatios = [0.2, 0.25, 0.35];

            const heal =
                unit.stats["ability_power"].total *
                healRatios[unit.starLevel - 1];

            const bonusAS = unit.totalHealth * bonusAttackSpeedRatio;

            const abilityDetails = `<p>
            Heal: <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                healRatios[0] * 100
            )}% / ${Math.round(healRatios[1] * 100)}% / ${Math.round(
                healRatios[2] * 100
            )}% ]</span><br/>

            Attack Speed: <span class="effectText">${Math.round(
                bonusAS
            )}%</span> = ${
                bonusAttackSpeedRatio * 100
            }% (<img src="general/stats/health.png"/>)
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive</b>: Heal <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> Health on attack. For every 1% missing Health, gain <span class="effectText">???% (<img src="general/stats/health.png"/>)</span> Attack Speed.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +75 <img src="general/stats/health.png"/> +10 <img src="general/stats/armor.png"/> +10 <img src="general/stats/magic_resist.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    pantheon: {
        name: "pantheon",
        displayName: "Pantheon",
        cost: 2,
        traits: ["punk", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `Too Tough To Kill`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageReductionApRatio = [0.25, 0.25, 0.3];
            const baseDamageReduction = 25;
            const adRatio = 2;

            const damageReductionAp =
                unit.stats["ability_power"].total *
                damageReductionApRatio[unit.starLevel - 1];
            const totalDamageReduction = Math.min(
                70,
                baseDamageReduction + damageReductionAp
            );
            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityMainText = `<p>Reduce damage taken by <span class="effectText">${Math.round(
                totalDamageReduction
            )}% (<img src="general/stats/ability_power.png"/>)</span> for 2.5 seconds. Afterwards, deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the 3 enemies who dealt the most damage to Pantheon during the duration.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20 <img src="general/stats/armor.png"/> +20 <img src="general/stats/magic_resist.png"/> </span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageReductionApRatio = [0.25, 0.25, 0.3];
            const baseDamageReduction = 25;
            const adRatio = 2;

            const damageReductionAp =
                unit.stats["ability_power"].total *
                damageReductionApRatio[unit.starLevel - 1];
            const totalDamageReduction = Math.min(
                70,
                baseDamageReduction + damageReductionAp
            );
            const damage = unit.stats["attack_damage"].total * adRatio;

            const abilityDetails = `<p>
            Damage Reduction <img src="general/stats/ability_power.png"/> <span class="abilityRatios">[ ${Math.round(
                damageReductionApRatio[0] * 100
            )}% / ${Math.round(
                damageReductionApRatio[1] * 100
            )}% / ${Math.round(damageReductionApRatio[2] * 100)}% ]</span><br/>

            Damage Reduction: <span class="effectText">${totalDamageReduction}%</span> (max 70%) = <span class="effectText">${baseDamageReduction}%</span> + ${damageReductionAp} <img src="general/stats/ability_power.png"/><br/>
            
            Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${
                adRatio * 100
            }% <img src="general/stats/attack_damage.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Reduce damage taken by <span class="effectText">???% (<img src="general/stats/ability_power.png"/>)</span> for 2.5 seconds. Afterwards, deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the 3 enemies who dealt the most damage to Pantheon during the duration.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20 <img src="general/stats/armor.png"/> +20 <img src="general/stats/magic_resist.png"/> </span>
            </p>`;

            return abilityMainText;
        },
    },
    poppy: {
        name: "poppy",
        displayName: "Poppy",
        cost: 4,
        traits: ["emo", "mosher"],
        position_type: "front",
        getAbilityName: () => {
            return `Hammer Time`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [2.4, 2.4, 5];
            const bonusAdRatio = 0.03;
            const armorMrGain = 100;
            const armorMrGainDuration = 6;
            const hammerCount = 3;
            const apHealRatio = 0.06;

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];
            const bonusDamage = unit.totalHealth * bonusAdRatio;

            const heal =
                ((unit.stats["ability_power"].total * apHealRatio) / 100) *
                unit.totalHealth;

            const abilityMainText = `<p><b>Passive:</b> Gain Attack Damage based on bonus Health. (Current: <span class="effectText">${Math.round(
                bonusDamage
            )}%</span> (<img src="general/stats/health.png"/>)).<br/>
            <br/>
            <b>Active:</b> Gain <span class="effectText">${armorMrGain}</span> Armor and Magic Resistance for ${armorMrGainDuration} seconds. Hammer the nearest enemy <span class="effectText">${hammerCount}</span> times; each deals <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage and heals <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/health.png"/><img src="general/stats/ability_power.png"/>)</span> Health. If this kills an emey, slam an additional time.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_damage.png"/> </span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [2.4, 2.4, 5];
            const bonusAdRatio = 0.03;
            const armorMrGain = 100;
            const armorMrGainDuration = 6;
            const hammerCount = 3;
            const apHealRatio = 0.06;

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];
            const bonusDamage = unit.totalHealth * bonusAdRatio;

            const heal =
                ((unit.stats["ability_power"].total * apHealRatio) / 100) *
                unit.totalHealth;

            const abilityDetails = `<p>Damage: <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Bonus Attack Damage: <span class="effectText">${Math.round(
                bonusDamage
            )}%</span> = ${
                bonusAdRatio * 100
            }% <img src="general/stats/health.png"/><br/>

            Heal: <span class="health">${Math.round(heal)}</span> = ${
                apHealRatio * 100
            }% <img src="general/stats/ability_power.png"/> of max Health<br/>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b> Gain Attack Damage based on bonus Health. (Current: <span class="effectText">???%</span> (<img src="general/stats/health.png"/>)).<br/>
            <br/>
            <b>Active:</b> Gain <span class="effectText">???</span> Armor and Magic Resistance for ??? seconds. Hammer the nearest enemy <span class="effectText">???</span> times; each deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage and heals <span class="health">??? (<img src="general/stats/health.png"/><img src="general/stats/ability_power.png"/>)</span> Health. If this kills an emey, slam an additional time.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_damage.png"/> </span>
            </p>`;

            return abilityMainText;
        },
    },
    qiyana: {
        name: "qiyana",
        displayName: "Qiyana",
        cost: 5,
        traits: ["truedamage", "crowddiver"],
        position_type: "back",
        getAbilityName: () => {
            return `Sample & Remix`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const numItemsCopiedPerLevel = [1, 2, 3];
            const adDamageRatio = [5, 5, 10];
            const apRatio = [0.75, 0.75, 5];

            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const bonusTrueDamage = apRatio[unit.starLevel - 1] * adDamage;

            const abilityMainText = `<p>Copy <span class="effectText">${
                numItemsCopiedPerLevel[unit.starLevel - 1]
            }</span> of the current target's items and throw them to an ally. Deal <span class="physicalDamage">${Math.round(
                adDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage and knock them back. If the target had no items, deal <span class="trueDamage">${Math.round(
                bonusTrueDamage
            )} (<img src="general/stats/ability_power.png"/><img src="general/stats/attack_damage.png"/>)</span> additional true damage and knock them back to the edge of the board instead.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: After Sample & Remix kills a champion and copies an item, create 2 permanent component(s).</span><br/>
            <br/>
            <span class="blingBonusText">[Radiant items, Artifacts, and Emblems cannot be copied]</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> When Qiyana copies an item, she permanently  gains 5% Attack Damage. (0.0%)</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const numItemsCopiedPerLevel = [1, 2, 3];
            const adDamageRatio = [5, 5, 10];
            const apRatio = [0.75, 0.75, 5];

            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const bonusTrueDamage = apRatio[unit.starLevel - 1] * adDamage;

            const abilityDetails = `<p>
            Number of Items Copied: <span class="abilityRatios">[ ${Math.round(
                numItemsCopiedPerLevel[0]
            )} / ${Math.round(numItemsCopiedPerLevel[1])} / ${Math.round(
                numItemsCopiedPerLevel[2]
            )} ]</span><br/> 

            Damage: <span class="physicalDamage">${Math.round(
                adDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                adDamageRatio[0] * 100
            )}% / ${Math.round(adDamageRatio[1] * 100)}% / ${Math.round(
                adDamageRatio[2] * 100
            )}% ]</span><br/> 

            Bonus Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                apRatio[0] * 100
            )}% / ${Math.round(apRatio[1] * 100)}% / ${Math.round(
                apRatio[2] * 100
            )}% ]</span><br/> 

            Bonus Damage: <span class="trueDamage">${Math.round(
                bonusTrueDamage
            )}</span> = <span class="effectText">${Math.round(
                apRatio[unit.starLevel - 1] * 100
            )}% (<img src="general/stats/ability_power.png"/>)</span> of <span class="physicalDamage">${Math.round(
                adDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span>
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Copy <span class="effectText">???</span> of the current target's items and throw them to an ally. Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage and knock them back. If the target had no items, deal <span class="trueDamage">??? (<img src="general/stats/ability_power.png"/><img src="general/stats/attack_damage.png"/>)</span> additional true damage and knock them back to the edge of the board instead.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: After Sample & Remix kills a champion and copies an item, create 2 permanent component(s).</span><br/>
            <br/>
            <span class="blingBonusText">[Radiant items, Artifacts, and Emblems cannot be copied]</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_damage.png"/> When Qiyana copies an item, she permanently  gains 5% Attack Damage. (0.0%)</span>
            </p>`;

            return abilityMainText;
        },
    },
    riven: {
        name: "riven",
        displayName: "Riven",
        cost: 3,
        traits: ["8bit", "edgelord"],
        position_type: "front",
        getAbilityName: () => {
            return `Voxel Defense`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const shieldRatios = [1, 1.2, 1.4];
            const adShieldRatio = 2.5;
            const adDamageRatio = 1;

            const shield =
                unit.stats["attack_damage"].total * adShieldRatio +
                unit.stats["ability_power"].total *
                    shieldRatios[unit.starLevel - 1];
            const damage = unit.stats["attack_damage"].total * adDamageRatio;

            const abilityMainText = `<p>For the next 6 seconds, gain a <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> Shield and attacks deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> damage to enemies within 1 hex of the target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +15% <img src="general/stats/attack_damage.png"/> +10 <img src="general/stats/armor.png"/> +10 <img src="general/stats/magic_resist.png"/> </span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const shieldRatios = [1, 1.2, 1.4];
            const adShieldRatio = 2.5;
            const adDamageRatio = 1;

            const shield =
                unit.stats["attack_damage"].total * adShieldRatio +
                unit.stats["ability_power"].total *
                    shieldRatios[unit.starLevel - 1];
            const damage = unit.stats["attack_damage"].total * adDamageRatio;

            const abilityDetails = `<p>
            Shield <img src="general/stats/ability_power.png"/> <span class="abilityRatios">[ ${Math.round(
                shieldRatios[0] * 100
            )}% / ${Math.round(shieldRatios[1] * 100)}% / ${Math.round(
                shieldRatios[2] * 100
            )}% ]</span><br/>

            Damage Reduction: <span class="effectText">${shield}% (<img src="general/stats/attack_damage.png"/>)</span> = ${Math.round(
                adShieldRatio * 100
            )}% <img src="general/stats/attack_damage.png"/> + ${Math.round(
                shieldRatios[unit.starLevel - 1] * 100
            )}% <img src="general/stats/ability_power.png"/><br/>
            
            Damage: <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> = ${
                adDamageRatio * 100
            }% <img src="general/stats/attack_damage.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>For the next 6 seconds, gain a <span class="effectText">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> Shield and attacks deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> damage to enemies within 1 hex of the target.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +15% <img src="general/stats/attack_damage.png"/> +10 <img src="general/stats/armor.png"/> +10 <img src="general/stats/magic_resist.png"/> </span>
            </p>`;

            return abilityMainText;
        },
    },
    samira: {
        name: "samira",
        displayName: "Samira",
        cost: 3,
        traits: ["country", "executioner"],
        position_type: "back",
        getAbilityName: () => {
            return `Thrills & Kills`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [2.4, 2.4, 2.5];
            const apRatio = 0.2;
            const bonusAdRatio = 1.1;

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];
            const bonusDamage =
                unit.stats["attack_damage"].total * bonusAdRatio;

            const attackSpeedPerStack =
                unit.stats["ability_power"].total * apRatio;

            const abilityMainText = `<p><b>Passive</b>: Attacks that critically strike grant a stack of Style, up to 6 stacks. Each stack grants <span class="attackSpeed">${Math.round(
                attackSpeedPerStack
            )} (<img src="general/stats/ability_power.png"/>)</span> Attack Speed.<br/>
            <br/>
            <b>Active</b>: Deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target, then another <span class="physicalDamage">${Math.round(
                bonusDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage per Style stack. Afterwards, reset Style.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +10% <img src="general/stats/crit_chance.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [2.4, 2.4, 2.5];
            const apRatio = 0.2;
            const bonusAdRatio = 1.1;

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];
            const bonusDamage =
                unit.stats["attack_damage"].total * bonusAdRatio;

            const attackSpeedPerStack =
                unit.stats["ability_power"].total * apRatio;

            const abilityDetails = `<p>
            Damage <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Damage per Style: <span class="physicalDamage">${Math.round(
                bonusDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> = ${Math.round(
                bonusAdRatio * 100
            )}% (<img src="general/stats/attack_damage.png"/>)<br/>

            Attack Speed: <span class="effectText">${Math.round(
                attackSpeedPerStack
            )}%</span> = ${Math.round(
                apRatio * 100
            )}% (<img src="general/stats/ability_power.png"/>)
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive</b>: Attacks that critically strike grant a stack of Style, up to 6 stacks. Each stack grants <span class="attackSpeed">??? (<img src="general/stats/ability_power.png"/>)</span> Attack Speed.<br/>
            <br/>
            <b>Active</b>: Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target, then another <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage per Style stack. Afterwards, reset Style.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +10% <img src="general/stats/crit_chance.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    senna: {
        name: "senna",
        displayName: "Senna",
        cost: 2,
        traits: ["truedamage", "rapidfire"],
        position_type: "back",
        getAbilityName: () => {
            return `Concussive Noise`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.05, 1.55, 2.25];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Fire a blast of sound at the current target's location. It pulses 3 times, each dealing <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies within 1 hex.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: -15 max Mana</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5 <img src="general/stats/ability_power.png"/> and each pulse grows larger.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.05, 1.55, 2.25];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Fire a blast of sound at the current target's location. It pulses 3 times, each dealing <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies within 1 hex.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: -15 max Mana</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5 <img src="general/stats/ability_power.png"/> and each pulse grows larger.</span>
            </p>`;

            return abilityMainText;
        },
    },
    seraphine: {
        name: "seraphine",
        displayName: "Seraphine",
        cost: 2,
        traits: ["kda", "spellweaver"],
        position_type: "back",
        getAbilityName: () => {
            return `High Note`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.4, 2.1, 3.15];
            const healRatios = [0.8, 1.2, 1.6];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const heal =
                unit.stats["ability_power"].total *
                healRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Send a high note to the largest clump of units that hits all units within 1 hex. Enemies take <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage. Allies heal for <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/ability_power.png"/>)</span> Health.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Every other cast, send another High Note that deals 40% damage and heals 40%.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.4, 2.1, 3.15];
            const healRatios = [0.8, 1.2, 1.6];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const heal =
                unit.stats["ability_power"].total *
                healRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            
            Heal: <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                healRatios[0] * 100
            )}% / ${Math.round(healRatios[1] * 100)}% / ${Math.round(
                healRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Send a high note to the largest clump of units that hits all units within 1 hex. Enemies take <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage. Allies heal for <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> Health.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Every other cast, send another High Note that deals 40% damage and heals 40%.</span>
            </p>`;

            return abilityMainText;
        },
    },
    sett: {
        name: "sett",
        displayName: "Sett",
        cost: 3,
        traits: ["heartsteel", "bruiser", "mosher"],
        position_type: "front",
        getAbilityName: () => {
            return `THE PUNCHLINE`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const shieldPerLevel = [375, 425, 475];
            const damageRatios = [2.75, 4.2, 6.8];
            const coneDamageRatios = [1.3, 2.1, 3.4];
            const shieldGainPerMissingHp = 1;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const coneDamage =
                unit.stats["ability_power"].total *
                coneDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p> Gain a <span class="effectText">${
                shieldPerLevel[unit.starLevel - 1]
            }</span> Shield for 2 seconds, increased by <span class="effectText">${shieldGainPerMissingHp}</span> for every 4 missing Health. Deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target and <span class="magicDamage">${Math.round(
                coneDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies in a cone around them.<br/>
            <br/> 
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +250 <img src="general/stats/health.png"/> At 50% Health, gain 50 max Health permanently. (0 bonus max Health).</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const shieldPerLevel = [375, 425, 475];
            const damageRatios = [2.75, 4.2, 6.8];
            const coneDamageRatios = [1.3, 2.1, 3.4];
            const shieldGainPerMissingHp = 1;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const coneDamage =
                unit.stats["ability_power"].total *
                coneDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>

            Shield <span class="abilityRatios">[ ${Math.round(
                shieldPerLevel[0]
            )}% / ${Math.round(shieldPerLevel[1])}% / ${Math.round(
                shieldPerLevel[2]
            )}% ]</span><br/>

            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
 
            Cone Damage: <span class="magicDamage">${Math.round(
                coneDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                coneDamageRatios[0] * 100
            )}% / ${Math.round(coneDamageRatios[1] * 100)}% / ${Math.round(
                coneDamageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p> Gain a <span class="effectText">???</span> Shield for 2 seconds, increased by <span class="effectText">???</span> for every 4 missing Health. Deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to the current target and <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies in a cone around them.<br/>
            <br/> 
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +250 <img src="general/stats/health.png"/> At 50% Health, gain 50 max Health permanently. (0 bonus max Health).</span>
            </p>`;

            return abilityMainText;
        },
    },
    sona: {
        name: "sona",
        displayName: "Sona",
        cost: 5,
        traits: ["mixmaster", "spellweaver"],
        position_type: "back",
        getAbilityName: () => {
            return `The Drop (Ethereal, Concussive, Kinetic)`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            // ethereal (attack speed)
            const passiveAttackSpeedRatios = [0.25, 0.35, 5];
            const activeAttackSpeed = [1.25, 1.75, 7.77];
            const dmgPerAttackRatios = [0.9, 1.35, 7.77];

            const damagePerAttack =
                unit.stats["ability_power"].total *
                dmgPerAttackRatios[unit.starLevel - 1];

            // concussive (damage)
            const apPerLevel = [2, 3, 100];
            const damageRatios = [4.5, 6.75, 9.999];
            const numTargets = [5, 5, 11];

            // kinetic (heal/shield)
            const maxHealthHealRatios = [0.04, 0.07, 1];
            const shieldRatios = [3.5, 5.5, 3.333];
            const durationPerLevel = [2, 2, 30];

            // const abilityMainText = `<p>
            // <b>Passive (Ethereal):</b> Attacks instead send a beat to an ally, granting them <span class="attackSpeed">${
            //     passiveAttackSpeedRatios[unit.starLevel - 1]
            // }</span> Attack Speed for 4 seconds.<br/>
            // <br/>
            // <b>Active (Ethereal):</b> Grants all allies <span class="attackSpeed">${
            //     activeAttackSpeed[unit.starLevel - 1]
            // }</span> Attack Speed and <span class="magicDamage">${Math.round(
            //     dmgPerAttack[unit.starLevel - 1]
            // )} (<img src="general/stats/ability_power.png"/>)</span> magic damage on attack for 6 seconds.<br/>
            // <br/>
            // <br/>
            // <b>Passive (Concussive):</b> Attacks instead send a beat to an ally, granting both Sona and the ally <span class="effectText">${
            //     apPerLevel[unit.starLevel - 1]
            // }</span> Ability Power.<br/>
            // <br/>
            // <b>Active (Concussive):</b> Deal <span class="magicDamage">${Math.round(
            //     damageRatios[unit.starLevel - 1]
            // )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to the <span class="effectText">${
            //     numTargets[unit.starLevel - 1]
            // }</span> nearest enemies.  <br/>
            // <br/>
            // <br/>
            // <b>Passive (Kinetic):</b> Attacks instead send a beat to an ally, healing them for <span class="health">${Math.round(
            //     maxHealthHealRatios[unit.starLevel - 1] * 100
            // )}%</span> of their maximum Health.<br/>
            // <br/>
            // <b>Active (Kinetic):</b> Send a beat to all allies and grant them a <span class="effectText">${Math.round(
            //     shieldRatios[unit.starLevel - 1]
            // )} (<img src="general/stats/ability_power.png"/>) Shield for <span class="effectText">${
            //     durationPerLevel[unit.starLevel - 1]
            // }</span> seconds.</span> <br/>
            // <br/>
            // <br/>
            // <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_speed.png"/> Gains 1% Attack Speed every time she attacks.</span>
            // </p>`;

            const abilityMainText = `<p>
            <b>Passive (Ethereal):</b> Attacks instead send a beat to an ally, granting them <span class="attackSpeed">${
                passiveAttackSpeedRatios[unit.starLevel - 1]
            }</span> Attack Speed for 4 seconds.<br/>
            <br/>
            <b>Active (Ethereal):</b> Grants all allies <span class="attackSpeed">${
                activeAttackSpeed[unit.starLevel - 1]
            }</span> Attack Speed and <span class="magicDamage">${Math.round(
                damagePerAttack
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage on attack for 6 seconds.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_speed.png"/> Gains 1% Attack Speed every time she attacks.</span>
            </p>`;
            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            // ethereal (attack speed)
            const passiveAttackSpeedRatios = [0.25, 0.35, 5];
            const activeAttackSpeed = [1.25, 1.75, 7.77];
            const dmgPerAttackRatios = [0.9, 1.35, 7.77];

            const damagePerAttack =
                unit.stats["ability_power"].total *
                dmgPerAttackRatios[unit.starLevel - 1];

            // concussive (damage)
            const apPerLevel = [2, 3, 100];
            const damageRatios = [4.5, 6.75, 9.999];
            const numTargets = [5, 5, 11];

            // kinetic (heal/shield)
            const maxHealthHealRatios = [0.04, 0.07, 1];
            const shieldRatios = [3.5, 5.5, 3.333];
            const durationPerLevel = [2, 2, 30];

            // const abilityDetails = `<p>
            // Passive Attack Speed (Ethereal) <span class="abilityRatios">[ ${Math.round(
            //     passiveAttackSpeedRatios[0] * 100
            // )}% / ${
            //     Math.round(passiveAttackSpeedRatios[1]) * 100
            // }% / ${Math.round(passiveAttackSpeedRatios[2] * 100)}% ]</span><br/>

            // Active Attack Speed (Ethereal) <span class="abilityRatios">[ ${Math.round(
            //     activeAttackSpeed[0] * 100
            // )}% / ${Math.round(activeAttackSpeed[1]) * 100}% / ${Math.round(
            //     activeAttackSpeed[2] * 100
            // )}% ]</span><br/>

            // Damage Per Attack: (Ethereal) <span class="magicDamage">${Math.round(
            //     dmgPerAttack[unit.starLevel - 1]
            // )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
            //     dmgPerAttack[0] * 100
            // )}% / ${Math.round(dmgPerAttack[1] * 100)}% / ${Math.round(
            //     dmgPerAttack[2] * 100
            // )}% ]</span><br/>
            // <br/>

            // Ability Power (Concussive) <span class="abilityRatios">[ ${Math.round(
            //     apPerLevel[0]
            // )} / ${Math.round(apPerLevel[1])} / ${Math.round(
            //     apPerLevel[2]
            // )} ]</span><br/>

            // Damage (Concussive): <span class="magicDamage">${Math.round(
            //     damageRatios[unit.starLevel - 1]
            // )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
            //     damageRatios[0] * 100
            // )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
            //     damageRatios[2] * 100
            // )}% ]</span><br/>

            // Number of Targets (Concussive) <span class="abilityRatios">[ ${Math.round(
            //     numTargets[0]
            // )} / ${Math.round(numTargets[1])} / ${Math.round(
            //     numTargets[2]
            // )} ]</span><br/>
            // <br/>

            // % Max Health (Kinetic) <span class="abilityRatios">[ ${Math.round(
            //     maxHealthHealRatios[0] * 100
            // )}% / ${Math.round(maxHealthHealRatios[1]) * 100}% / ${Math.round(
            //     maxHealthHealRatios[2] * 100
            // )}% ]</span><br/>

            // Shield (Kinetic): <span class="effectText">${Math.round(
            //     shieldRatios[unit.starLevel - 1]
            // )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
            //     shieldRatios[0] * 100
            // )}% / ${Math.round(shieldRatios[1] * 100)}% / ${Math.round(
            //     shieldRatios[2] * 100
            // )}% ]</span><br/>

            // Duration (Kinetic) <span class="abilityRatios">[ ${Math.round(
            //     durationPerLevel[0]
            // )} / ${Math.round(durationPerLevel[1])} / ${Math.round(
            //     durationPerLevel[2]
            // )} ]</span><br/>
            // </p>`;

            const abilityDetails = `<p>
            Passive Attack Speed (Ethereal) <span class="abilityRatios">[ ${Math.round(
                passiveAttackSpeedRatios[0] * 100
            )}% / ${
                Math.round(passiveAttackSpeedRatios[1]) * 100
            }% / ${Math.round(passiveAttackSpeedRatios[2] * 100)}% ]</span><br/>

            Active Attack Speed (Ethereal) <span class="abilityRatios">[ ${Math.round(
                activeAttackSpeed[0] * 100
            )}% / ${Math.round(activeAttackSpeed[1]) * 100}% / ${Math.round(
                activeAttackSpeed[2] * 100
            )}% ]</span><br/>

            Damage Per Attack: (Ethereal) <span class="magicDamage">${Math.round(
                damagePerAttack
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                dmgPerAttackRatios[0] * 100
            )}% / ${Math.round(dmgPerAttackRatios[1] * 100)}% / ${Math.round(
                dmgPerAttackRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>
            <b>Passive (Ethereal):</b> Attacks instead send a beat to an ally, granting them <span class="attackSpeed">???</span> Attack Speed for 4 seconds.<br/>
            <br/>
            <b>Active (Ethereal):</b> Grants all allies <span class="attackSpeed">???</span> Attack Speed and <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage on attack for 6 seconds.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5% <img src="general/stats/attack_speed.png"/> Gains 1% Attack Speed every time she attacks.</span>
            </p>`;
            return abilityMainText;
        },
    },
    tahmkench: {
        name: "tahmkench",
        displayName: "Tahm Kench",
        cost: 1,
        traits: ["country", "bruiser"],
        position_type: "front",
        getAbilityName: () => {
            return `Rawhide`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageReductionRatios = [0.12, 0.15, 0.25];

            const damageReduction =
                unit.stats["ability_power"].total *
                damageReductionRatios[unit.starLevel - 1];

            const abilityMainText = `<p><b>Passive:</b> Reduce each instance of incoming damage by <span class="effectText">${Math.round(
                damageReduction
            )} (<img src="general/stats/ability_power.png"/>)</span>.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +225 <img src="general/stats/health.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageReductionRatios = [0.12, 0.15, 0.25];

            const damageReduction =
                unit.stats["ability_power"].total *
                damageReductionRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage Reduction: <span class="magicDamage">${Math.round(
                damageReduction
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageReductionRatios[0] * 100
            )}% / ${Math.round(damageReductionRatios[1] * 100)}% / ${Math.round(
                damageReductionRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p><b>Passive:</b> Reduce each instance of incoming damage by <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span>.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +225 <img src="general/stats/health.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    taric: {
        name: "taric",
        displayName: "Taric",
        cost: 1,
        traits: ["disco", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `Mirrorball's Blessing`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const baseShieldPerLevel = [240, 290, 330];
            const healthRatio = 0.06;
            const damageRatios = [1, 1.5, 2.25];

            const shield =
                baseShieldPerLevel[unit.starLevel - 1] +
                healthRatio * unit.totalHealth;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Gain a <span class="effectText">${Math.round(
                shield
            )} (<img src="general/stats/ability_power.png"/>)</span> Shield for 4 seconds. Taric's next <span class="effectText">2</span> attacks deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> bonus magic damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +15 <img src="general/stats/armor.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const baseShieldPerLevel = [240, 290, 330];
            const healthRatio = 0.06;
            const damageRatios = [1, 1.5, 2.25];

            const shield =
                baseShieldPerLevel[unit.starLevel - 1] +
                healthRatio * unit.totalHealth;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Base Shield: ${
                baseShieldPerLevel[unit.starLevel - 1]
            }<span class="abilityRatios">[ ${Math.round(
                baseShieldPerLevel[0]
            )} / ${Math.round(baseShieldPerLevel[1])} / ${Math.round(
                baseShieldPerLevel[2]
            )} ]</span><br/>

            Shield: ${Math.round(shield)} = ${
                baseShieldPerLevel[unit.starLevel - 1]
            } + ${
                healthRatio * 100
            }% (<img src="general/stats/health.png"/>)<br/>

            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Gain a <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> Shield for 4 seconds. Taric's next <span class="effectText">2</span> attacks deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> bonus magic damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +15 <img src="general/stats/armor.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    thresh: {
        name: "thresh",
        displayName: "Thresh",
        cost: 4,
        traits: ["country", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `Devil's Round Up`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.5, 2.25, 12];
            const flatHealPerLevel = [250, 300, 600];
            const stunDurations = [1.75, 2, 8];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Stun the largest group of nearby enemies for <span class="effectText">${
                stunDurations[unit.starLevel - 1]
            }</span> seconds and deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to each. Thresh heals for <span class="health">${
                flatHealPerLevel[unit.starLevel - 1]
            }</span> + 50% of the total damage dealth.<br/>
            <br/> 
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> Reduce max Mana by 25.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.5, 2.25, 12];
            const flatHealPerLevel = [250, 300, 600];
            const stunDurations = [1.75, 2, 8];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
 
            Heal: <span class="health">${Math.round(
                flatHealPerLevel[unit.starLevel - 1]
            )}</span> <span class="abilityRatios">[ ${Math.round(
                flatHealPerLevel[0]
            )} / ${Math.round(flatHealPerLevel[1])} / ${Math.round(
                flatHealPerLevel[2]
            )} ]</span><br/>

            Stun Duration" <span class="abilityRatios">[ ${
                stunDurations[0]
            } / ${Math.round(stunDurations[1])} / ${Math.round(
                stunDurations[2]
            )} ]</span><br/></p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Stun the largest group of nearby enemies for <span class="effectText">???</span> seconds and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to each. Thresh heals for <span class="health">???</span> + 50% of the total damage dealth.<br/>
            <br/> 
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> Reduce max Mana by 25.</span>
            </p>`;

            return abilityMainText;
        },
    },
    trainingdummy: {
        name: "trainingdummy",
        displayName: "Target Dummy",
        cost: 0,
        traits: [],
        position_type: "front",
        getAbilityName: () => {
            return `On Duty!`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const abilityMainText = `<p>The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.</p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const abilityDetails = ``;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>The Training Dummy cannot move or attack. It is also dressed like a devilishly handsome Yordle.</p>`;

            return abilityMainText;
        },
    },
    twistedfate: {
        name: "twistedfate",
        displayName: "Twisted Fate",
        cost: 4,
        traits: ["disco", "dazzler"],
        position_type: "back",
        getAbilityName: () => {
            return `Hustle & Shuffle`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [0.5, 0.75, 2.25];
            const bonusAsBreakpoint = 0.4;
            const baseCardCount = 21;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const cardCount =
                baseCardCount +
                Math.floor(
                    unit.stats["attack_speed"].bonus / bonusAsBreakpoint
                );

            const abilityMainText = `<p>Throw <span class="attackSpeed">${Math.round(
                cardCount
            )} (<img src="general/stats/attack_speed.png"/>)</span> cards divided between the current target and 3 nearest enemies. They reduce Magic Resist by 1 and deal <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Throws 3 extra cards.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [0.5, 0.75, 2.25];
            const bonusAsBreakpoint = 0.4;
            const baseCardCount = 21;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const cardCount =
                baseCardCount +
                Math.floor(
                    unit.stats["attack_speed"].bonus / bonusAsBreakpoint
                );

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Card Card: <span class="effectText">${cardCount}</span> = ${baseCardCount} + 1 per ${Math.round(
                bonusAsBreakpoint * 100
            )}% bonus <img src="general/stats/attack_speed.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Throw <span class="attackSpeed">??? (<img src="general/stats/attack_speed.png"/>)</span> cards divided between the current target and 3 nearest enemies. They reduce Magic Resist by 1 and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: Throws 3 extra cards.</span>
            </p>`;

            return abilityMainText;
        },
    },
    twitch: {
        name: "twitch",
        displayName: "Twitch",
        cost: 2,
        traits: ["punk", "executioner"],
        position_type: "back",
        getAbilityName: () => {
            return `Bottled Anarchy`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const initalAdDamageRatio = 2;
            const secondaryMagicDamageRatios = [0.35, 0.5, 0.8];

            const initalAdDamage =
                unit.stats["attack_damage"].total * initalAdDamageRatio;
            const secondaryMagicDamage =
                unit.stats["ability_power"].total *
                secondaryMagicDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Throw a bottle at the current target, which deals <span class="physicalDamage">${Math.round(
                initalAdDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to enemies within 1 hex. It explodes into 6 shards; each dealing <span class="magicDamage">${Math.round(
                secondaryMagicDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to a random enemy within 2 hexes. Each enemy critically struck by the bottle creates 1 more shard.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +20% <img src="general/stats/crit_damage.png"/> </span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const initalAdDamageRatio = 2;
            const secondaryMagicDamageRatios = [0.35, 0.5, 0.8];

            const initalAdDamage =
                unit.stats["attack_damage"].total * initalAdDamageRatio;
            const secondaryMagicDamage =
                unit.stats["ability_power"].total *
                secondaryMagicDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Secondary Magic Damage: <span class="magicDamage">${Math.round(
                secondaryMagicDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                secondaryMagicDamageRatios[0] * 100
            )}% / ${Math.round(
                secondaryMagicDamageRatios[1] * 100
            )}% / ${Math.round(
                secondaryMagicDamageRatios[2] * 100
            )}% ]</span><br/>

            Initial Damage: <span class="physicalDamage">${Math.round(
                initalAdDamage
            )}</span> = ${
                initalAdDamageRatio * 100
            }% <img src="general/stats/attack_damage.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Throw a bottle at the current target, which deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to enemies within 1 hex. It explodes into 6 shards; each dealing <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to a random enemy within 2 hexes. Each enemy critically struck by the bottle creates 1 more shard.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +20% <img src="general/stats/crit_damage.png"/> </span>
            </p>`;

            return abilityMainText;
        },
    },
    urgot: {
        name: "urgot",
        displayName: "Urgot",
        cost: 3,
        traits: ["country", "mosher"],
        position_type: "front",
        getAbilityName: () => {
            return `Fire from his Fingertips`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const apDamageRatio = [0.15, 0.25, 0.4];
            const adDamageRatio = [1.75, 1.75, 1.8];

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityMainText = `<p>For 8 seconds, convert bonus Attack Speed to Attack Damage. Attacks deal <span class="physicalDamage">${Math.round(
                totalDamage
            )} (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage in a cone and grant Urgot <span class="effectText">20%</span> of the damage dealt as a 5 second shield.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +10% Omnivamp</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const apDamageRatio = [0.15, 0.25, 0.4];
            const adDamageRatio = [1.75, 1.75, 1.8];

            const apDamage =
                unit.stats["ability_power"].total *
                apDamageRatio[unit.starLevel - 1];
            const adDamage =
                unit.stats["attack_damage"].total *
                adDamageRatio[unit.starLevel - 1];
            const totalDamage = apDamage + adDamage;

            const abilityDetails = `<p>
            Damage: (<img src="general/stats/ability_power.png"/>) <span class="abilityRatios">[ ${Math.round(
                apDamageRatio[0] * 100
            )}% / ${Math.round(apDamageRatio[1] * 100)}% / ${Math.round(
                apDamageRatio[2] * 100
            )}% ]</span><br/> 

            Damage: (<img src="general/stats/attack_damage.png"/>) <span class="abilityRatios">[ ${Math.round(
                adDamageRatio[0] * 100
            )}% / ${Math.round(adDamageRatio[1] * 100)}% / ${Math.round(
                adDamageRatio[2] * 100
            )}% ]</span><br/> 

            Damage: <span class="physicalDamage">${Math.round(
                totalDamage
            )}</span> = ${
                adDamageRatio[unit.starLevel - 1] * 100
            }% (<img src="general/stats/attack_damage.png"/>) + ${
                apDamageRatio[unit.starLevel - 1] * 100
            }% (<img src="general/stats/ability_power.png"/>)
                                </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>For 8 seconds, convert bonus Attack Speed to Attack Damage. Attacks deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/><img src="general/stats/ability_power.png"/>)</span> physical damage in a cone and grant Urgot <span class="effectText">20%</span> of the damage dealt as a 5 second shield.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +15% <img src="general/stats/attack_damage.png"/> +10% Omnivamp</span>
            </p>`;

            return abilityMainText;
        },
    },
    vex: {
        name: "vex",
        displayName: "Vex",
        cost: 3,
        traits: ["emo", "executioner"],
        position_type: "back",
        getAbilityName: () => {
            return `Your Funeral`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [2.55, 3.8, 6.1];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Send a shadow to the current target that Stuns enemies within 1 hex for 1.5 seconds. Then, it deals <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies within 1 hex.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [2.55, 3.8, 6.1];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];
            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Send a shadow to the current target that Stuns enemies within 1 hex for 1.5 seconds. Then, it deals <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage to enemies within 1 hex.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +25 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    vi: {
        name: "vi",
        displayName: "Vi",
        cost: 1,
        traits: ["punk", "mosher"],
        position_type: "front",
        getAbilityName: () => {
            return `The Harder They Fall`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const stunDurations = [1.5, 1.75, 2];
            const armorReductionRatios = [0.15, 0.18, 0.2];
            const adRatio = 2.2;
            const empoweredAdRatio = 3.2;

            const damage = unit.stats["attack_damage"].total * adRatio;
            const empoweredDamage =
                unit.stats["attack_damage"].total * empoweredAdRatio;

            const abilityMainText = `<p>
            Deal <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target, or <span class="physicalDamage">${Math.round(
                empoweredDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> if they have more current Health than Vi. Stun them for <span class="effectText">${
                stunDurations[unit.starLevel - 1]
            }</span> seconds and reduce their Armor by <span class="effectText">${Math.round(
                armorReductionRatios[unit.starLevel - 1] * 100
            )} (<img src="general/stats/ability_power.png"/>)</span> for the rest of combat.
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const stunDurations = [1.5, 1.75, 2];
            const armorReductionRatios = [0.15, 0.18, 0.2];
            const adRatio = 2.2;
            const empoweredAdRatio = 3.2;

            const damage = unit.stats["attack_damage"].total * adRatio;
            const empoweredDamage =
                unit.stats["attack_damage"].total * empoweredAdRatio;

            const abilityDetails = `<p>
            Stun Duration <span class="abilityRatios">[ ${stunDurations[0]} / ${
                stunDurations[1]
            } / ${stunDurations[2]}% ]</span><br/>

            Armor Reduction: <span class="effectText">${Math.round(
                armorReductionRatios[unit.starLevel - 1] * 100
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                armorReductionRatios[0] * 100
            )}% / ${Math.round(armorReductionRatios[1] * 100)}% / ${Math.round(
                armorReductionRatios[2] * 100
            )}% ]</span><br/>

            Damage: <span class="physicalDamage">${Math.round(
                damage
            )}</span> = ${Math.round(
                adRatio * 100
            )}% <img src="general/stats/attack_damage.png"/></br>
            Empowered Damage: <span class="physicalDamage">${Math.round(
                empoweredDamage
            )}</span> = ${Math.round(
                empoweredAdRatio * 100
            )}% <img src="general/stats/attack_damage.png"/>


            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>
            Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to the current target, or <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> if they have more current Health than Vi. Stun them for <span class="effectText">???</span> seconds and reduce their Armor by <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> for the rest of combat.
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    viego: {
        name: "viego",
        displayName: "Viego",
        cost: 4,
        traits: ["pentakill", "edgelord"],
        position_type: "front",
        getAbilityName: () => {
            return `Riff of the Ruined King`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const slamRatios = [2, 2, 4];
            const empoweredRatios = [1.7, 1.7, 3.4];
            const durationRatio = 0.05;

            const slamDamage =
                unit.stats["attack_damage"].total *
                slamRatios[unit.starLevel - 1];
            const empoweredDamage =
                unit.stats["attack_damage"].total *
                empoweredRatios[unit.starLevel - 1];
            const duration = unit.stats["ability_power"].total * durationRatio;

            const abilityMainText = `<p> Slam on a nearby hex. Deal <span class="physicalDamage">${Math.round(
                slamDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to enemies within two hexes and mark them for <span class="effectText">${Math.round(
                duration
            )} (<img src="general/stats/ability_power.png"/>)</span> seconds. Marked enemies take <span class="effectText">10%</span> increased damage from all sources. <br/>
            <br/>                        
            Viego's attacks on marked enemies deal <span class="physicalDamage">${Math.round(
                empoweredDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage instead.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const slamRatios = [2, 2, 4];
            const empoweredRatios = [1.7, 1.7, 3.4];
            const durationRatio = 0.05;

            const slamDamage =
                unit.stats["attack_damage"].total *
                slamRatios[unit.starLevel - 1];
            const empoweredDamage =
                unit.stats["attack_damage"].total *
                empoweredRatios[unit.starLevel - 1];
            const duration = unit.stats["ability_power"].total * durationRatio;

            const abilityDetails = `<p>
                Slam Damage: <span class="physicalDamage">${Math.round(
                    slamDamage
                )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                slamRatios[0] * 100
            )}% / ${Math.round(slamRatios[1] * 100)}% / ${Math.round(
                slamRatios[2] * 100
            )}% ]</span><br/>

                Empowered Attack Damage: <span class="physicalDamage">${Math.round(
                    empoweredDamage
                )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                empoweredRatios[0] * 100
            )}% / ${Math.round(empoweredRatios[1] * 100)}% / ${Math.round(
                empoweredRatios[2] * 100
            )}% ]</span><br/>

                Duration: <span class="effectText">${duration}</span> = ${Math.round(
                durationRatio * 100
            )}% <img src="general/stats/ability_power.png"/>

            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p> Slam on a nearby hex. Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to enemies within two hexes and mark them for <span class="effectText">??? (<img src="general/stats/ability_power.png"/>)</span> seconds. Marked enemies take <span class="effectText">10%</span> increased damage from all sources. <br/>
            <br/>                        
            Viego's attacks on marked enemies deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage instead.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    yasuo: {
        name: "yasuo",
        displayName: "Yasuo",
        cost: 1,
        traits: ["truedamage", "edgelord"],
        position_type: "front",
        getAbilityName: () => {
            return `Synthesizer Strike`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const permanentAdGain = 0.01;
            const adRatio = 2.9;
            const apRatio = 0.2;
            const executeThreshold = 0.15;

            const adDamage = unit.stats["attack_damage"].total * adRatio;
            const apDamage = unit.stats["ability_power"].total * apRatio;
            const totalDamage = adDamage + apDamage;

            const abilityMainText = `<p> 
            <b>Passive</b>: Yasuo permanently gains <span class="effectText">${Math.round(
                permanentAdGain * 100
            )}%</span> Attack Damage when he kills an enemy champion. (Current: 0.0% <img src="general/stats/attack_damage.png"/>)<br/>
            <br/>
            <b>Active:</b> Deal <span class="physicalDamage">${Math.round(
                totalDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> to the current target.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: Synthesizer Strike executes enemies under <span class="effectText">${Math.round(
                executeThreshold * 100
            )}%</span>Health</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +15% Omnivamp</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const permanentAdGain = 0.01;
            const adRatio = 2.9;
            const apRatio = 0.2;
            const executeThreshold = 0.15;

            const adDamage = unit.stats["attack_damage"].total * adRatio;
            const apDamage = unit.stats["ability_power"].total * apRatio;
            const totalDamage = adDamage + apDamage;

            const abilityDetails = `<p>
                Damage: <span class="physicalDamage">${Math.round(
                    totalDamage
                )}</span> = ${Math.round(
                adRatio * 100
            )}% <img src="general/stats/attack_damage.png"/> + ${Math.round(
                apRatio * 100
            )}% <img src="general/stats/ability_power.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p> 
            <b>Passive</b>: Yasuo permanently gains <span class="effectText">???%</span> Attack Damage when he kills an enemy champion. (Current: 0.0% <img src="general/stats/attack_damage.png"/>)<br/>
            <br/>
            <b>Active:</b> Deal <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> to the current target.<br/>
            <br/>
            <span class="blingBonusText">Bling Bonus: Synthesizer Strike executes enemies under <span class="effectText">???%</span>Health</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> +15% Omnivamp</span>
            </p>`;

            return abilityMainText;
        },
    },
    yone: {
        name: "yone",
        displayName: "Yone",
        cost: 3,
        traits: ["heartsteel", "edgelord", "crowddiver"],
        position_type: "front",
        getAbilityName: () => {
            return `Pop Off`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [2.1, 2.1, 2.15];
            const omnivampRatio = 0.08;

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>
            Gain stacking Move Speed and <span class="effectText">${Math.round(
                omnivampRatio * 100
            )}% (<img src="general/stats/ability_power.png"/>) Omnivamp </span>for the rest of combat. Slash twice, dealing <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage to enemies in a cone each time.<br/>
            <br/>
            <span class="blingBonusText">Omnivamp: Heal for percentage of damage dealt</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [2.1, 2.1, 2.15];
            const omnivampRatio = 0.08;

            const damage =
                unit.stats["attack_damage"].total *
                damageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="physicalDamage">${Math.round(
                damage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Stacking Omnivamp: <span class="effectText">${Math.round(
                omnivampRatio * 100
            )}%</span> = ${Math.round(
                omnivampRatio * 100
            )}% (<img src="general/stats/ability_power.png"/>)
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>
            Gain stacking Move Speed and <span class="effectText">???% (<img src="general/stats/ability_power.png"/>) Omnivamp </span>for the rest of combat. Slash twice, dealing <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage to enemies in a cone each time.<br/>
            <br/>
            <span class="blingBonusText">Omnivamp: Heal for percentage of damage dealt</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +200 <img src="general/stats/health.png"/> +20% <img src="general/stats/attack_damage.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    yorick: {
        name: "yorick",
        displayName: "Yorick",
        cost: 5,
        traits: ["pentakill", "mosher", "guardian"],
        position_type: "front",
        getAbilityName: () => {
            return `GET IN THIS PIT! (ft. Ghouls)`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const ghoulsCount = [9, 10, 25];
            const ghoulDamageRatios = [1.5, 1.5, 10];
            const bigGhoulHealth = [900, 1750, 9001];
            const bigGhoulDamageRatios = [2.5, 2.5, 20];

            const ghoulDamage =
                unit.stats["attack_damage"].total *
                ghoulDamageRatios[unit.starLevel - 1];
            const bigGhoulDamage =
                unit.stats["attack_damage"].total *
                bigGhoulDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>
            Summon <span class="effectText">${
                ghoulsCount[unit.starLevel - 1]
            }</span> headbanging ghouls that pile towards the center of the board. Each deals <span class="physicalDamage">${Math.round(
                ghoulDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage over three attacks. Ghouls' damage 20% <span class="effectText">Sunders</span> for 3 seconds.<br/>
            <br/>
            Every other cast also summons a BIG ghoul with <span class="health">${Math.round(
                bigGhoulHealth[unit.starLevel - 1]
            )} (<img src="general/stats/ability_power.png"/>)</span> Health that deals <span class="physicalDamage">${Math.round(
                bigGhoulDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage each attack.<br/>
            <br/>
            <span class="blingBonusText">Sunder: Reduce Armor by 20%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +50 <img src="general/stats/health.png"/> Summons 2 extra ghouls. The BIG ghoul is BIGGER and deals 10% extra damage.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const ghoulsCount = [9, 10, 25];
            const ghoulDamageRatios = [1.5, 1.5, 10];
            const bigGhoulHealth = [900, 1750, 9001];
            const bigGhoulDamageRatios = [2.5, 2.5, 20];

            const ghoulDamage =
                unit.stats["attack_damage"].total *
                ghoulDamageRatios[unit.starLevel - 1];
            const bigGhoulDamage =
                unit.stats["attack_damage"].total *
                bigGhoulDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Ghouls <span class="abilityRatios">[ ${Math.round(
                ghoulsCount[0]
            )} / ${Math.round(ghoulsCount[1])} / ${Math.round(
                ghoulsCount[2]
            )} ]</span><br/> 

            Ghoul Damage: <span class="physicalDamage">${Math.round(
                ghoulDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span>  <span class="abilityRatios">[ ${Math.round(
                ghoulDamageRatios[0] * 100
            )}% / ${Math.round(ghoulDamageRatios[1] * 100)}% / ${Math.round(
                ghoulDamageRatios[2] * 100
            )}% ]</span><br/> 

            Big Ghoul Health: <span class="health">${Math.round(
                bigGhoulHealth[unit.starLevel - 1]
            )} (<img src="general/stats/ability_power.png"/>)</span>  <span class="abilityRatios">[ ${Math.round(
                bigGhoulHealth[0]
            )} / ${Math.round(bigGhoulHealth[1])} / ${Math.round(
                bigGhoulHealth[2]
            )} ]</span><br/> 

            Big Ghoul Damage: <span class="physicalDamage">${Math.round(
                bigGhoulDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span>  <span class="abilityRatios">[ ${Math.round(
                bigGhoulDamageRatios[0] * 100
            )}% / ${Math.round(bigGhoulDamageRatios[1] * 100)}% / ${Math.round(
                bigGhoulDamageRatios[2] * 100
            )}% ]</span><br/> 
            
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>
            Summon <span class="effectText">???</span> headbanging ghouls that pile towards the center of the board. Each deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage over three attacks. Ghouls' damage 20% <span class="effectText">Sunders</span> for 3 seconds.<br/>
            <br/>
            Every other cast also summons a BIG ghoul with <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> Health that deals <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage each attack.<br/>
            <br/>
            <span class="blingBonusText">Sunder: Reduce Armor by 20%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +50 <img src="general/stats/health.png"/> Summons 2 extra ghouls. The BIG ghoul is BIGGER and deals 10% extra damage.</span>
            </p>`;

            return abilityMainText;
        },
    },
    zac: {
        name: "zac",
        displayName: "Zac",
        cost: 4,
        traits: ["edm", "bruiser"],
        position_type: "front",
        getAbilityName: () => {
            return `Let's Bounce!`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [1.2, 1.8, 12];
            const healRatios = [1, 1.4, 8];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const heal =
                unit.stats["ability_power"].total *
                healRatios[unit.starLevel - 1];

            const abilityMainText = `<p>Bounce 3 times on nearby enemies. Each bounce deals <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage, Stuns for 1 second, and heals Zac for <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/ability_power.png"/>)</span> Health.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [1.2, 1.8, 12];
            const healRatios = [1, 1.4, 8];

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];

            const heal =
                unit.stats["ability_power"].total *
                healRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Heal: <span class="health">${Math.round(
                heal
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                healRatios[0] * 100
            )}% / ${Math.round(healRatios[1] * 100)}% / ${Math.round(
                healRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>Bounce 3 times on nearby enemies. Each bounce deals <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage, Stuns for 1 second, and heals Zac for <span class="health">??? (<img src="general/stats/ability_power.png"/>)</span> Health.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +150 <img src="general/stats/health.png"/> +10 <img src="general/stats/ability_power.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    zed: {
        name: "zed",
        displayName: "Zed",
        cost: 4,
        traits: ["edm", "crowddiver"],
        position_type: "front",
        getAbilityName: () => {
            return `Shadow Dance`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const shadowAttackDamageRatios = [1.85, 1.85, 3.7];
            const markDamageRatios = [3.5, 3.5, 7];
            const healthThresholdRatio = 0.15;

            const shadowAttackDamage =
                unit.stats["attack_damage"].total *
                shadowAttackDamageRatios[unit.starLevel - 1];
            const markDamage =
                unit.stats["attack_damage"].total *
                markDamageRatios[unit.starLevel - 1];
            const healthThreshold =
                unit.stats["ability_power"].total * healthThresholdRatio;

            const abilityMainText = `<p>
            Mark the current target and spawn an untargetable Shadow with <span class="effectText">${Math.round(
                shadowAttackDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> Attack Damage for 4 seconds. After a brief delay or when the marked enemy falls below ${Math.round(
                healthThreshold
            )}% (<img src="general/stats/ability_power.png"/>) health, deal an additional <span class="physicalDamage">${Math.round(
                markDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> physical damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> Zed's Shadows gain +10% <img src="general/stats/attack_damage.png"/> and +10% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const shadowAttackDamageRatios = [1.85, 1.85, 3.7];
            const markDamageRatios = [3.5, 3.5, 7];
            const healthThresholdRatio = 0.15;

            const shadowAttackDamage =
                unit.stats["attack_damage"].total *
                shadowAttackDamageRatios[unit.starLevel - 1];
            const markDamage =
                unit.stats["attack_damage"].total *
                markDamageRatios[unit.starLevel - 1];
            const healthThreshold =
                unit.stats["ability_power"].total * healthThresholdRatio;

            const abilityDetails = `<p>
            Shadow Attack Damage: <span class="effectText">${Math.round(
                shadowAttackDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                shadowAttackDamageRatios[0] * 100
            )}% / ${Math.round(
                shadowAttackDamageRatios[1] * 100
            )}% / ${Math.round(
                shadowAttackDamageRatios[2] * 100
            )}% ]</span><br/>

            Damage: <span class="physicalDamage">${Math.round(
                markDamage
            )} (<img src="general/stats/attack_damage.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                markDamageRatios[0] * 100
            )}% / ${Math.round(markDamageRatios[1] * 100)}% / ${Math.round(
                markDamageRatios[2] * 100
            )}% ]</span><br/>

            Health Threshold: ${Math.round(healthThreshold)}% = ${Math.round(
                healthThresholdRatio * 100
            )}% <img src="general/stats/ability_power.png"/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>
            Mark the current target and spawn an untargetable Shadow with <span class="effectText">??? (<img src="general/stats/attack_damage.png"/>)</span> Attack Damage for 4 seconds. After a brief delay or when the marked enemy falls below ???% (<img src="general/stats/ability_power.png"/>) health, deal an additional <span class="physicalDamage">??? (<img src="general/stats/attack_damage.png"/>)</span> physical damage.<br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +100 <img src="general/stats/health.png"/> Zed's Shadows gain +10% <img src="general/stats/attack_damage.png"/> and +10% <img src="general/stats/attack_speed.png"/></span>
            </p>`;

            return abilityMainText;
        },
    },
    ziggs: {
        name: "ziggs",
        displayName: "Ziggs",
        cost: 5,
        traits: ["hyperpop", "dazzler"],
        position_type: "back",
        getAbilityName: () => {
            return `Chaos Theory`;
        },
        getAbilityMainText: (unit: UnitType): string => {
            const damageRatios = [3.6, 5.4, 40];
            const splitDamageRatios = [0.7, 1.05, 4];
            const initialSplit = 5;
            const subsequentSplits = 2;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];
            const splitDamage =
                unit.stats["ability_power"].total *
                splitDamageRatios[unit.starLevel - 1];

            const abilityMainText = `<p>
            Throw a bomb at the current target that deals <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage. It splits into <span class="effectText">${initialSplit}</span> smaller bombs that <span class="effectText">Shred</span> their target for 4 seconds and deal <span class="magicDamage">${Math.round(
                splitDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> magic damage. Each cast increases the number of smaller bombs by <span class="effectText">${subsequentSplits}</span>.<br/>
            <br/>
            <span class="blingBonusText">Shred: Reduce Magic Resist by 30%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5 <img src="general/stats/ability_power.png"/> Reduce max Mana by 10.</span>
            </p>`;

            return abilityMainText;
        },
        getAbilityDetails: (unit: UnitType): string => {
            const damageRatios = [3.6, 5.4, 40];
            const splitDamageRatios = [0.7, 1.05, 4];
            const initialSplit = 5;
            const subsequentSplits = 2;

            const damage =
                unit.stats["ability_power"].total *
                damageRatios[unit.starLevel - 1];
            const splitDamage =
                unit.stats["ability_power"].total *
                splitDamageRatios[unit.starLevel - 1];

            const abilityDetails = `<p>
            Damage: <span class="magicDamage">${Math.round(
                damage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                damageRatios[0] * 100
            )}% / ${Math.round(damageRatios[1] * 100)}% / ${Math.round(
                damageRatios[2] * 100
            )}% ]</span><br/>

            Split Damage: <span class="magicDamage">${Math.round(
                splitDamage
            )} (<img src="general/stats/ability_power.png"/>)</span> <span class="abilityRatios">[ ${Math.round(
                splitDamageRatios[0] * 100
            )}% / ${Math.round(splitDamageRatios[1] * 100)}% / ${Math.round(
                splitDamageRatios[2] * 100
            )}% ]</span><br/>
            </p>`;

            return abilityDetails;
        },
        getAbilityMainTextWithDefaults: () => {
            const abilityMainText = `<p>
            Throw a bomb at the current target that deals <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage. It splits into <span class="effectText">???</span> smaller bombs that <span class="effectText">Shred</span> their target for 4 seconds and deal <span class="magicDamage">??? (<img src="general/stats/ability_power.png"/>)</span> magic damage. Each cast increases the number of smaller bombs by <span class="effectText">???</span>.<br/>
            <br/>
            <span class="blingBonusText">Shred: Reduce Magic Resist by 30%</span><br/>
            <br/>
            <img src="general/set10_headliner_icon.png"/> <span class="headlinerText">Headliner Effect: +5 <img src="general/stats/ability_power.png"/> Reduce max Mana by 10.</span>
            </p>`;

            return abilityMainText;
        },
    },
};
