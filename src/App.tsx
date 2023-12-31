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
    TraitDetailsType,
    AbilityDetailsType,
} from "./utils/createInfoBoxProps";
import { GamestateType, UnitType } from "./types/Gamestate";
import { expandCompactGamestate } from "./utils/expandCompactGamestate";
import { isPointInsideBoundingBox } from "./utils/isPointInsideBoundingBox";
import { parseCompressedJsonToCompactGamestate } from "./utils/parseCompressedJsonToCompactGamestate";
import { ErrorBoundary } from "react-error-boundary";

const TRAIT_NOT_HOVERED = -1;
const SHOP_UNIT_NOT_HOVERED = -1;
const UNIT_TRAIT_NOT_HOVERED = "";
const UNIT_ABILITY_NOT_HOVERED = false;
const UNIT_STAT_NOT_HOVERED = "";

const RESET_DATA_DURATION = 10000;

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
            <h1 style={{ color: "red" }}>EXTENSION CRASHED ICANT</h1>
            <p style={{ color: "red" }}>
                If you can see this text, it means the extension has crashed due
                to an unforeseen error. Please refresh the page to restart the
                extension and get rid of this message. If you keep encountering
                errors, disable the extension by using widget on the right and
                toggling "Visible", then message the dev on Discord so that they
                can investigate and fix the bug.
            </p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
    );
}

function App() {
    const [abilityDetails, setAbilityDetails] =
        useState<AbilityDetailsType | null>(null);
    const [traitDetails, setTraitDetails] = useState<TraitDetailsType | null>(
        null
    );

    const [gamestate, setGamestate] = useState<GamestateType | null>(null);

    const [overlayResolution, setOverlayResolution] =
        useState<OverlayResolution>({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });

    const [traitIndex, setTraitIndex] = useState(TRAIT_NOT_HOVERED);

    const [shopUnitIndex, setShopUnitIndex] = useState(SHOP_UNIT_NOT_HOVERED);

    const [hoveredUnitTrait, setHoveredTrait] = useState(
        UNIT_TRAIT_NOT_HOVERED
    );

    const [showAbilityInfoBox, setShowAbilityInfoBox] = useState(
        UNIT_ABILITY_NOT_HOVERED
    );

    const [hoveredStat, setHoveredStat] = useState(UNIT_STAT_NOT_HOVERED);

    const [traitToDisplay, setTraitToDisplay] = useState<TraitInfo | null>(
        null
    );
    const [shopUnitToDisplay, setShopUnitToDisplay] =
        useState<ShopUnitInfo | null>(null);

    const [unitToDisplay, setUnitToDisplay] = useState<UnitInfo | null>(null);

    const [unitTraitToDisplay, setUnitTraitToDisplay] =
        useState<TraitInfo | null>(null);

    const [abilityToDisplay, setAbilityToDisplay] =
        useState<AbilityInfo | null>(null);

    const [statsToDisplay, setStatsToDisplay] = useState<UnitStatsInfo | null>(
        null
    );

    // console.log("rerender");

    const handleResize = () => {
        console.log(
            `Resized: ${document.body.clientWidth} x ${document.body.clientHeight}`
        );
        setOverlayResolution({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });
    };

    const clearUnitRelatedInfoBoxes = () => {
        setUnitToDisplay(null);
        setAbilityToDisplay(null);
        setStatsToDisplay(null);
    };

    useEffect(() => {
        console.log("appDidMount: runs only on initial mount");
        let receivedDataTimer: number;

        const clearAllState = () => {
            setGamestate(null);

            setTraitIndex(TRAIT_NOT_HOVERED);
            setShopUnitIndex(SHOP_UNIT_NOT_HOVERED);
            setHoveredTrait(UNIT_TRAIT_NOT_HOVERED);
            setShowAbilityInfoBox(UNIT_ABILITY_NOT_HOVERED);
            setHoveredStat(UNIT_STAT_NOT_HOVERED);

            setTraitToDisplay(null);
            setShopUnitToDisplay(null);
            setUnitTraitToDisplay(null);
            setUnitToDisplay(null);
            setAbilityToDisplay(null);
            setStatsToDisplay(null);
        };

        function handleListen(
            target: string,
            contentType: string,
            message: string
        ) {
            const data = parseCompressedJsonToCompactGamestate(message);
            console.log(data);
            // console.log("message: hello 123");
            setGamestate(expandCompactGamestate(data));

            window.clearTimeout(receivedDataTimer);
            receivedDataTimer = window.setTimeout(() => {
                console.log(
                    `Did not receive data within ${
                        RESET_DATA_DURATION / 1000
                    } second window, clearing all info boxes.`
                );
                clearAllState();
            }, RESET_DATA_DURATION);
        }

        const getAbilityAndTraitDetails = async () => {
            const abilitiesUrl =
                "https://raw.githubusercontent.com/conradftw/TFT_Data/main/details/abilities/latest.json";
            const abilitiesResponse = await fetch(abilitiesUrl);

            const traitsUrl =
                "https://raw.githubusercontent.com/conradftw/TFT_Data/main/details/traits/latest.json";
            const traitsResponse = await fetch(traitsUrl);

            if (abilitiesResponse.ok && traitsResponse.ok) {
                const abilitiesData = await abilitiesResponse.json();
                const traitsData = await traitsResponse.json();
                console.log(abilitiesData);
                setAbilityDetails(abilitiesData);
                console.log(traitsData);
                setTraitDetails(traitsData);
            } else {
                console.log("Trouble fetching from github");
                // should prolly throw error here since you can't continue w/o this file
            }
        };

        getAbilityAndTraitDetails();

        if (window.Twitch.ext) {
            console.log("Twitch Extension Helper is set up");
            window.Twitch.ext.onAuthorized(function (auth) {
                // console.log(
                //     "The JWT that will be passed to the EBS is",
                //     auth.token
                // );
                // console.log("The Helix JWT is ", auth.helixToken);
                // console.log("The channel ID is", auth.channelId);
            });

            // okay the problem is it seems I can attach more than one function to this broadcast listen
            // like with StrictMode, this gets called twice and two handleListens are binded to broadcast
            window.Twitch.ext.listen("broadcast", handleListen);
        } else {
            console.error(
                "Unable to setup the Twitch Extension Helper Library"
            );
            console.error(
                "Should probably throw an error here and display ErrorBoundary because extension will not work w/o library"
            );
        }

        window.addEventListener("resize", handleResize);

        return () => {
            console.log(
                "appWillUnmount: called when this component is unMounted"
            );
            window.removeEventListener("resize", handleResize);
            window.clearTimeout(receivedDataTimer);
        };
    }, []);

    useEffect(() => {
        let timer: number;
        const handleMouseMove = (event: MouseEvent) => {
            window.clearTimeout(timer);
            timer = window.setTimeout(() => {
                try {
                    console.log(
                        `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`
                    );

                    const x_1920 =
                        (event.clientX * 1920) / overlayResolution.width;
                    const y_1080 =
                        (event.clientY * 1080) / overlayResolution.height;

                    clearUnitRelatedInfoBoxes();

                    if (gamestate?.units.length) {
                        let hoveredUnit = {} as UnitType;
                        for (const unit of gamestate.units) {
                            const corner2 = unit.bounding_box.corner2;

                            if (
                                isPointInsideBoundingBox(
                                    { x: x_1920, y: y_1080 },
                                    unit.bounding_box
                                )
                            ) {
                                // if point is in overlapping boxes, return the "closest" unit, (which is the box with the y coord closest to the bottom of screen)
                                if (Object.keys(hoveredUnit).length) {
                                    const hoveredUnitCorner2 =
                                        hoveredUnit.bounding_box.corner2;

                                    if (
                                        isPointInsideBoundingBox(
                                            { x: x_1920, y: y_1080 },
                                            hoveredUnit.bounding_box
                                        ) &&
                                        corner2.y > hoveredUnitCorner2.y
                                    ) {
                                        hoveredUnit = unit;
                                    }
                                } else {
                                    hoveredUnit = unit;
                                }
                            }
                        }

                        console.log(hoveredUnit);

                        if (Object.keys(hoveredUnit).length && abilityDetails) {
                            console.log("Creating unit to display");

                            // const unitInfo = createUnitInfo(hoveredUnit);
                            const unitInfo = createUnitInfo(
                                hoveredUnit,
                                abilityDetails
                            );
                            console.log(unitInfo);

                            const unitStatsInfo =
                                createUnitStatsInfo(hoveredUnit);
                            console.log(unitStatsInfo);

                            setUnitToDisplay(unitInfo);
                            setAbilityToDisplay(unitInfo.ability);
                            setStatsToDisplay(unitStatsInfo);
                        }
                    }
                } catch (error) {
                    console.error(
                        "Error inside setTimeout function for handleMouseMove (clicking)"
                    );

                    console.error(error);
                }
            }, 300);
        };

        document.addEventListener("click", handleMouseMove);

        return () => {
            document.removeEventListener("click", handleMouseMove);
            window.clearTimeout(timer);
        };
    }, [overlayResolution, gamestate?.units, abilityDetails]);

    useEffect(() => {
        try {
            // console.log("traitList useEffect");
            if (
                traitIndex > -1 &&
                gamestate?.traits.length &&
                traitIndex < gamestate.traits.length &&
                traitDetails
            ) {
                console.log(gamestate.traits);
                console.log("traitIndex is: " + traitIndex);
                setTraitToDisplay(
                    createTraitInfo(gamestate.traits[traitIndex], traitDetails)
                );
            }
        } catch (error) {
            console.error("Error with: Hovering TraitsList");
            console.error("TraitIndex: " + traitIndex);
            console.error("TraitList: ");
            console.error(gamestate?.traits);
            // log to server
            console.error(error);
        }

        // return () => {
        //     console.log("traitList cleanup");
        //     setTraitToDisplay(null);
        // };
    }, [traitIndex, gamestate?.traits, traitDetails]);

    useEffect(() => {
        // console.log("Shop useEffect");

        try {
            if (
                shopUnitIndex > -1 &&
                shopUnitIndex < 5 &&
                gamestate?.shopUnits.length
            ) {
                console.log(gamestate.shopUnits);
                console.log("shopIndex is: " + shopUnitIndex);
                const shopUnit = gamestate.shopUnits[shopUnitIndex];

                if (shopUnit.cost && shopUnit.shopUnitName !== "sold") {
                    setShopUnitToDisplay(
                        createShopUnitInfo(gamestate.shopUnits[shopUnitIndex])
                    );
                } else {
                    console.log("Shop: shop slot is sold");
                    setShopUnitToDisplay(null);
                }
            }
        } catch (error) {
            console.error("Error with: Hovering Shop");
            console.error("shopUnitIndex: " + shopUnitIndex);
            console.error("Shop: ");
            console.error(gamestate?.shopUnits);
            // log to server
            console.error(error);
        }
    }, [shopUnitIndex, gamestate?.shopUnits]);

    useEffect(() => {
        // console.log("unitTraits useEffect");

        try {
            if (hoveredUnitTrait && gamestate?.traits.length && traitDetails) {
                console.log(gamestate.traits);
                console.log("hoveredUnitTrait is: " + hoveredUnitTrait);

                let unitTrait = { count: 0, traitName: hoveredUnitTrait };

                for (const trait of gamestate.traits) {
                    if (hoveredUnitTrait === trait.traitName) {
                        unitTrait = trait;
                        break;
                    }
                }

                setUnitTraitToDisplay(createTraitInfo(unitTrait, traitDetails));
            }
        } catch (error) {
            console.error("Error with: Hovering Unit Traits");
            console.error("Unit Trait Hovered: " + hoveredUnitTrait);

            console.error("TraitsList: ");
            console.error(gamestate?.traits);

            // log to server
            console.error(error);
        }
    }, [hoveredUnitTrait, gamestate?.traits, traitDetails]);

    const traitTiles = [];
    for (let i = 0; i < 9; i++) {
        const traitTile = (
            <HoverWrapper
                type="traitTile"
                valueHovered={[i, TRAIT_NOT_HOVERED]}
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
                valueHovered={[i, SHOP_UNIT_NOT_HOVERED]}
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
                        setHoveredTrait={setHoveredTrait}
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

                {shopUnitIndex > -1 && shopUnitToDisplay && (
                    <ShopUnitInfoBox ability={shopUnitToDisplay || undefined} />
                )}

                <div className={styles.shopList}>{shopTiles}</div>

                {showAbilityInfoBox && abilityToDisplay && (
                    <AbilityInfoBox ability={abilityToDisplay || undefined} />
                )}

                {hoveredUnitTrait && unitTraitToDisplay && (
                    <TraitInfoBox
                        type="unitTrait"
                        traitObj={unitTraitToDisplay || undefined}
                    />
                )}

                {hoveredStat && statsToDisplay && (
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
