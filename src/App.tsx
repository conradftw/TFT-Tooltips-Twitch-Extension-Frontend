import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import TraitInfoBox from "./components/TraitInfoBox/TraitInfoBox";
import ShopUnitInfoBox from "./components/ShopUnitInfoBox/ShopUnitInfoBox";
import UnitInfoBox from "./components/UnitInfoBox/UnitInfoBox";
import AbilityInfoBox from "./components/AbilityInfoBox/AbilityInfoBox";
import StatInfoBox from "./components/StatInfoBox/StatInfoBox";
import HoverWrapper from "./components/HoverWrapper/HoverWrapper";
import {
    ShopUnitInfo,
    TraitInfo,
    UnitInfo,
    AbilityInfo,
    UnitStatsInfo,
} from "./types/InfoBoxProps";
import {
    createTraitInfo,
    createShopUnitInfo,
    createUnitInfo,
    createUnitStatsInfo,
} from "./utils/createInfoBoxProps";
import { GamestateType, UnitType } from "./types/Gamestate";
import { expandCompactGamestate } from "./utils/expandCompactGamestate";
import { ErrorBoundary } from "react-error-boundary";

const zlib = require("react-zlib-js");
const Buffer = require("buffer/").Buffer;

const NO_TRAIT_SELECTED = -1;
const NO_SHOP_UNIT_SELECTED = -1;

const NO_UNIT_TRAIT_SELECTED = "";
const NO_STAT_SELECTED = "";

type OverlayResolution = {
    width: number;
    height: number;
};

type ErrorBoundaryProps = {
    error: Error;
};

function ErrorFallback({ error }: ErrorBoundaryProps) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
    );
}

function App() {
    const [overlayResolution, setOverlayResolution] =
        useState<OverlayResolution>({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });

    const [shopUnitIndex, setShopUnitIndex] = useState(NO_SHOP_UNIT_SELECTED);
    const [isShopListHovered, setIsShopListHovered] = useState(false);

    const [traitIndex, setTraitIndex] = useState(NO_TRAIT_SELECTED);
    const [isTraitListHovered, setIsTraitListHovered] = useState(false);

    const [hoveredUnitTrait, setHoveredTrait] = useState(
        NO_UNIT_TRAIT_SELECTED
    );
    const [isUnitTraitsHovered, setIsUnitTraitsHovered] = useState(false);

    const [showAbilityInfoBox, setShowAbilityInfoBox] = useState(false);

    const [hoveredStat, setHoveredStat] = useState(NO_STAT_SELECTED);
    const [showStatInfoBox, setShowStatInfoBox] = useState(false);

    const [gamestate, setGamestate] = useState<GamestateType | null>(null);

    const [traitToDisplay, setTraitToDisplay] = useState<TraitInfo | null>(
        null
    );
    const [shopUnitToDisplay, setShopUnitToDisplay] =
        useState<ShopUnitInfo | null>(null);

    const [unitToDisplay, setUnitToDisplay] = useState<UnitInfo | null>(null);

    const [abilityToDisplay, setAbilityToDisplay] =
        useState<AbilityInfo | null>(null);

    const [statsToDisplay, setStatsToDisplay] = useState<UnitStatsInfo | null>(
        null
    );

    console.log("rerender");

    const handleResize = () => {
        console.log(
            `resized: ${document.body.clientWidth} x ${document.body.clientHeight}`
        );
        setOverlayResolution({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });
    };

    const clearInfoBoxes = () => {
        setUnitToDisplay(null);
        setAbilityToDisplay(null);
        setStatsToDisplay(null);
    };

    useEffect(() => {
        console.log("pretty sure therse is a rerender per useeffect lol");
        function handleListen(
            target: string,
            contentType: string,
            message: string
        ) {
            const inflated = zlib
                .inflateSync(Buffer.from(message, "base64"))
                .toString();

            const data = JSON.parse(inflated);
            console.log(data);
            setGamestate(expandCompactGamestate(data));
        }
        const test = () => {
            console.log(
                "test() wat: calling a new listen setup dafuq? monkaHmm. So this will get called by clean up, and then once more by the setup. Should there be an unlisten and then listen event?"
            );
            return (target: string, contentType: string, message: string) => {
                console.log(contentType);
            };
        };

        if (window.Twitch.ext) {
            console.log("plSs only get called once");
            window.Twitch.ext.onAuthorized(function (auth) {
                console.log(
                    "The JWT that will be passed to the EBS is",
                    auth.token
                );
                console.log("The Helix JWT is ", auth.helixToken);
                console.log("The channel ID is", auth.channelId);
            });

            // okay the problem is it seems I can attach more than one function to this broadcast listen
            window.Twitch.ext.listen("broadcast", test());
            console.log(
                " two things should happen, console shows an extra data object log, and there should be a new listen event in the ws logs"
            );
            // console.log("setting up listen broadcast?");
        } else {
            console.error("Twitch Extension Helper Library not found");
        }

        // handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            console.log("Calling MAIN APP ONMOUNT CLEAN UP");
            window.removeEventListener("resize", handleResize);
            // window.Twitch.ext.unlisten("broadcast", handleListen);
            window.Twitch.ext.unlisten("broadcast", test());
        };
    }, []);

    useEffect(() => {
        let timer: number;
        const handleMouseMove = (event: MouseEvent) => {
            window.clearTimeout(timer);
            timer = window.setTimeout(() => {
                console.log(
                    `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`
                );

                const x_1920 = (event.clientX * 1920) / overlayResolution.width;
                const y_1080 =
                    (event.clientY * 1080) / overlayResolution.height;

                clearInfoBoxes();

                if (gamestate?.units.length) {
                    let hoveredUnit = {} as UnitType;
                    for (const unit of gamestate.units) {
                        const corner1 = unit.bounding_box.corner1;
                        const corner2 = unit.bounding_box.corner2;

                        if (
                            x_1920 >= corner1.x &&
                            x_1920 <= corner2.x &&
                            y_1080 >= corner1.y &&
                            y_1080 <= corner2.y
                        ) {
                            if (Object.keys(hoveredUnit).length) {
                                const hoveredUnitCorner1 =
                                    hoveredUnit.bounding_box.corner1;
                                const hoveredUnitCorner2 =
                                    hoveredUnit.bounding_box.corner2;

                                if (
                                    x_1920 >= hoveredUnitCorner1.x &&
                                    x_1920 <= hoveredUnitCorner2.x &&
                                    y_1080 >= hoveredUnitCorner1.y &&
                                    y_1080 <= hoveredUnitCorner2.y &&
                                    corner2.y > hoveredUnitCorner2.y
                                ) {
                                    hoveredUnit = unit;
                                }
                            } else {
                                hoveredUnit = unit;
                            }
                        }
                    }

                    if (Object.keys(hoveredUnit).length) {
                        const unitInfo = createUnitInfo(hoveredUnit);
                        console.log(unitInfo);
                        const unitStatsInfo = createUnitStatsInfo(hoveredUnit);
                        console.log(unitStatsInfo);
                        setUnitToDisplay(unitInfo);
                        setAbilityToDisplay(unitInfo.ability);
                        setStatsToDisplay(unitStatsInfo);
                    }
                }
            }, 300);
        };

        document.addEventListener("click", handleMouseMove);

        return () => {
            document.removeEventListener("click", handleMouseMove);
        };
    }, [overlayResolution, gamestate?.units]);

    useEffect(() => {
        try {
            if (
                traitIndex > -1 &&
                isTraitListHovered &&
                gamestate?.traits.length &&
                traitIndex < gamestate.traits.length
            ) {
                console.log(gamestate.traits);
                // index into gamestates.trait and create a TraitInfo state to pass into TraitInfoBox
                console.log("traitIndex is: " + traitIndex);
                setTraitToDisplay(
                    createTraitInfo(gamestate.traits[traitIndex])
                );
            } else {
                setTraitToDisplay(null);
                setTraitIndex(NO_TRAIT_SELECTED);
            }
        } catch (error) {
            console.log("Error with: Hovering TraitsList");
            // log to server
            console.log(error);
        }
    }, [traitIndex, isTraitListHovered, gamestate?.traits]);

    useEffect(() => {
        try {
            if (isShopListHovered && gamestate?.shopUnits.length) {
                console.log(gamestate.shopUnits);
                // index into gamestates.trait and create a TraitInfo state to pass into TraitInfoBox
                console.log("shopIndex is: " + shopUnitIndex);
                const shopUnit = gamestate.shopUnits[shopUnitIndex];

                if (shopUnit.cost && shopUnit.shopUnitName !== "sold") {
                    setShopUnitToDisplay(
                        createShopUnitInfo(gamestate.shopUnits[shopUnitIndex])
                    );
                } else {
                    setShopUnitToDisplay(null);
                    setShopUnitIndex(NO_SHOP_UNIT_SELECTED);
                }
            } else {
                setShopUnitToDisplay(null);
                setShopUnitIndex(NO_SHOP_UNIT_SELECTED);
            }
        } catch (error) {
            console.log("Error with: Hovering Shop");

            console.log(error);
        }
    }, [shopUnitIndex, isShopListHovered, gamestate?.shopUnits]);

    useEffect(() => {
        try {
            if (isUnitTraitsHovered && gamestate?.traits.length) {
                console.log(gamestate.traits);
                console.log("hoveredUnitTrait is: " + hoveredUnitTrait);

                let unitTrait = { count: 0, traitName: hoveredUnitTrait };

                for (const trait of gamestate.traits) {
                    if (hoveredUnitTrait === trait.traitName) {
                        unitTrait = trait;
                        break;
                    }
                }

                setTraitToDisplay(createTraitInfo(unitTrait));
            } else {
                setTraitToDisplay(null);
                setHoveredTrait(NO_UNIT_TRAIT_SELECTED);
            }
        } catch (error) {
            console.log("Error with: Hovering Unit Traits");
            // log error to server?
            console.log(error);
        }
    }, [hoveredUnitTrait, isUnitTraitsHovered, gamestate?.traits]);

    const traitTiles = [];
    for (let i = 0; i < 9; i++) {
        const traitTile = (
            <HoverWrapper
                type="traitTile"
                setIsHovered={setIsTraitListHovered}
                valueHovered={i}
                sendValueHovered={setTraitIndex}
                key={i}
            >
                <div></div>
            </HoverWrapper>
        );
        traitTiles.push(traitTile);
    }

    const shopTiles = [];
    for (let i = 0; i < 5; i++) {
        const shopTile = (
            <HoverWrapper
                type="shopTile"
                setIsHovered={setIsShopListHovered}
                valueHovered={i}
                sendValueHovered={setShopUnitIndex}
                key={i}
            >
                <div></div>
            </HoverWrapper>
        );

        shopTiles.push(shopTile);
    }

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className={styles.App} id="overlay">
                {unitToDisplay && (
                    <UnitInfoBox
                        onHoverAbilitySquare={setShowAbilityInfoBox}
                        onHoverTrait={setIsUnitTraitsHovered}
                        setHoveredTrait={setHoveredTrait}
                        onHoverStat={setShowStatInfoBox}
                        setHoveredStat={setHoveredStat}
                        unit={unitToDisplay || undefined}
                    />
                )}

                <div className={styles.traitsList}>{traitTiles}</div>
                {traitIndex > -1 && traitToDisplay && (
                    <TraitInfoBox
                        type="traitsList"
                        traitObj={traitToDisplay || undefined}
                    />
                )}

                {shopUnitToDisplay && (
                    <ShopUnitInfoBox ability={shopUnitToDisplay || undefined} />
                )}

                <div className={styles.shopList}>{shopTiles}</div>

                {showAbilityInfoBox && (
                    <AbilityInfoBox ability={abilityToDisplay || undefined} />
                )}

                {hoveredUnitTrait && traitToDisplay && (
                    <TraitInfoBox
                        type="unitTrait"
                        traitObj={traitToDisplay || undefined}
                    />
                )}

                {hoveredStat && statsToDisplay && showStatInfoBox && (
                    <StatInfoBox
                        stats={statsToDisplay}
                        hoveredStat={hoveredStat}
                    />
                )}
            </div>
        </ErrorBoundary>
    );
}

export default App;
