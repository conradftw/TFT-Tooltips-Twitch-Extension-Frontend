import React, { useState, useEffect, ReactNode } from "react";
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
import { GamestateType, TraitType, UnitType } from "./types/Gamestate";
import { expandCompactGamestate } from "./utils/expandCompactGamestate";
import { ErrorBoundary } from "react-error-boundary";

const zlib = require("react-zlib-js");
const Buffer = require("buffer/").Buffer;

const NO_TRAIT_SELECTED = -1;
const NO_SHOP_UNIT_SELECTED = -1;

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
            width: 1920,
            height: 1080,
        });

    const [shopUnitIndex, setShopUnitIndex] = useState(NO_SHOP_UNIT_SELECTED);
    const [isShopListHovered, setIsShopListHovered] = useState(false);
    const [showShopUnitInfoBox, setShowShopUnitInfoBox] = useState(false);

    const [traitIndex, setTraitIndex] = useState(NO_TRAIT_SELECTED);
    const [isTraitListHovered, setIsTraitListHovered] = useState(false);
    const [showTraitInfoBox, setShowTraitInfoBox] = useState(false);

    const [showUnitInfoBox, setShowUnitInfoBox] = useState(false);

    // when trait in UnitInfoBox is hovered
    const [hoveredTrait, setHoveredTrait] = useState("");
    const [isUnitTraitsHovered, setIsUnitTraitsHovered] = useState(false);
    const [showUnitTraitInfoBox, setShowUnitTraitInfoBox] = useState(false);

    const [hoveredStat, setHoveredStat] = useState("");

    const [showAbilityInfoBox, setShowAbilityInfoBox] = useState(false);

    const [showStatInfoBox, setShowStatInfoBox] = useState(false);

    // pubsub states
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
        setShowUnitInfoBox(false);
    };

    useEffect(() => {
        if (window.Twitch.ext) {
            window.Twitch.ext.onAuthorized(function (auth) {
                console.log(
                    "The JWT that will be passed to the EBS is",
                    auth.token
                );
                console.log("The Helix JWT is ", auth.helixToken);
                console.log("The channel ID is", auth.channelId);
            });

            window.Twitch.ext.listen(
                "broadcast",
                function (target, contentType, message) {
                    const inflated = zlib
                        .inflateSync(Buffer.from(message, "base64"))
                        .toString();

                    const data = JSON.parse(inflated);
                    console.log(data);
                    setGamestate(expandCompactGamestate(data));
                }
            );
        } else {
            console.error("Twitch Extension Helper Library not found");
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
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
                        setShowUnitInfoBox(true);
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
            }
        } catch (error) {
            console.log("Error with: Hovering TraitsList");
            // log to server
            console.log(error);
        }

        setShowTraitInfoBox(isTraitListHovered);
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
                }
            } else {
                console.log("xdd");
                setShopUnitToDisplay(null);
            }
        } catch (error) {
            console.log("Error with: Hovering Shop");

            console.log(error);
        }

        setShowShopUnitInfoBox(isShopListHovered);
    }, [shopUnitIndex, isShopListHovered, gamestate?.shopUnits]);

    useEffect(() => {
        try {
            if (isUnitTraitsHovered && gamestate?.traits.length) {
                console.log(gamestate.traits);
                console.log("hoveredTrait is: " + hoveredTrait);

                let unitTrait = { count: 0, traitName: hoveredTrait };

                for (const trait of gamestate.traits) {
                    if (hoveredTrait === trait.traitName) {
                        unitTrait = trait;
                        break;
                    }
                }

                setTraitToDisplay(createTraitInfo(unitTrait));
            }

            setShowUnitTraitInfoBox(isUnitTraitsHovered);
        } catch (error) {
            console.log("Error with: Hovering Unit Traits");
            // log error to server?
            console.log(error);
        }
    }, [hoveredTrait, isUnitTraitsHovered, gamestate?.traits]);

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
                {traitToDisplay && (
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

                {showUnitTraitInfoBox && (
                    <TraitInfoBox
                        type="unitTrait"
                        traitObj={traitToDisplay || undefined}
                    />
                )}

                {hoveredStat && showStatInfoBox && (
                    <StatInfoBox
                        stats={statsToDisplay || undefined}
                        hoveredStat={hoveredStat}
                    />
                )}
            </div>
        </ErrorBoundary>
    );
}

export default App;
