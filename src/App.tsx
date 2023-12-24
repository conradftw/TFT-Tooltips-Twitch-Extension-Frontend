import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import TraitInfoBox from "./components/TraitInfoBox/TraitInfoBox";
import ShopUnitInfoBox from "./components/ShopUnitInfoBox/ShopUnitInfoBox";
import UnitInfoBox from "./components/UnitInfoBox/UnitInfoBox";
import AbilityInfoBox from "./components/AbilityInfoBox/AbilityInfoBox";
import HoverWrapper from "./components/HoverWrapper/HoverWrapper";
import StatInfoBox from "./components/StatInfoBox/StatInfoBox";
import { ShopUnitInfo, TraitInfo, AbilityInfo } from "./types/InfoBoxProps";
import { GamestateType } from "./types/Gamestate";
import { expandCompactGamestate } from "./utils/expandCompactGamestate";

const zlib = require("react-zlib-js");
const Buffer = require("buffer/").Buffer;

const NO_TRAIT_SELECTED = -1;
const NO_SHOP_UNIT_SELECTED = -1;

type OverlayResolution = {
    width: number;
    height: number;
};

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

    // when trait in UnitInfoBox is hovered
    const [hoveredTrait, setHoveredTrait] = useState("");
    const [isUnitTraitsHovered, setIsUnitTraitsHovered] = useState(false);
    const [showUnitTraitInfoBox, setShowUnitTraitInfoBox] = useState(false);

    const [showAbilityInfoBox, setShowAbilityInfoBox] = useState(false);

    const [showStatInfoBox, setShowStatInfoBox] = useState(false);

    const [testAbility, setTestAbility] = useState<AbilityInfo>({
        champion: "",
        name: "",
        mainBody: "",
        details: "",
    });

    const [testShopUnit, setTestShopUnit] = useState<ShopUnitInfo>({
        champion: "",
        name: "",
        mainBody: "",
    });

    const [hoveredTraitObj, setHoveredTraitObj] = useState<TraitInfo>({
        name: "",
        displayName: "",
        activeCount: 0,
        description: "",
        intervals: [],
        champions: [],
    });

    // pubsub states
    const [gamestate, setGamestate] = useState<GamestateType | null>(null);

    console.log("rerender");

    useEffect(() => {
        const handleResize = () => {
            console.log("resized");
            setOverlayResolution({
                width: document.body.clientWidth,
                height: document.body.clientHeight,
            });
        };

        if (window.Twitch.ext) {
            window.Twitch.ext.onAuthorized(function (auth) {
                console.log(
                    "The JWT that will be passed to the EBS is",
                    auth.token
                );
                console.log("The Helix JWT is ", auth.helixToken);
                console.log("The channel ID is", auth.channelId);
            });

            window.Twitch.ext.onContext(function (contextCallback) {
                // console.log(document.body.clientWidth);
                // console.log(document.body.clientHeight);
                // setOverlayResolution({
                //     width: document.body.clientWidth,
                //     height: document.body.clientHeight,
                // });
                // console.log(
                //     `Display Resolution (including black bars): ${contextCallback.displayResolution}`
                // );
                // console.log(
                //     `Video Resolution: ${contextCallback.videoResolution}`
                // );
            });

            window.Twitch.ext.listen(
                "broadcast",
                function (target, contentType, message) {
                    console.log("target is: " + target);
                    console.log("contentType is: " + contentType);
                    console.log("message is: " + message);

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
            timer = window.setTimeout(async () => {
                console.log(
                    `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`
                );

                const x_1920 = (event.clientX * 1920) / overlayResolution.width;
                const y_1080 =
                    (event.clientY * 1080) / overlayResolution.height;

                try {
                    const req = await fetch(
                        `http://localhost:8000/thepookguy/units?x=${x_1920}&y=${y_1080}`
                    );

                    if (req.ok) {
                        const data1 = await req.json();

                        console.log(data1);
                        if (data1) {
                            console.log(data1.name);
                            setTestAbility({
                                champion: data1.name,
                                name: data1.ability.name,
                                mainBody: data1.ability.mainBody,
                                details: data1.ability.details,
                            });
                        }
                    }
                } catch (error) {
                    console.log("There was an error", error);
                }
            }, 300);
        };

        document.addEventListener("click", handleMouseMove);

        return () => {
            document.removeEventListener("click", handleMouseMove);
        };
    }, [overlayResolution, gamestate?.units]);

    useEffect(() => {
        if (isTraitListHovered) {
        }

        setShowTraitInfoBox(isTraitListHovered);
    }, [traitIndex, isTraitListHovered]);

    useEffect(() => {
        const testDataFetch = async (num: number) => {
            //clear
            setTestShopUnit({
                champion: "",
                name: "",
                mainBody: "",
            });

            const req = await fetch(
                `http://localhost:8000/thepookguy/shop/${shopUnitIndex}`
            );

            // const req = await fetch(`https://swapi.dev/api/people/${num}`);

            if (!req.ok) {
                setShowShopUnitInfoBox(false);
                return;
            }

            const data = await req.json();

            setTestShopUnit({
                champion: data.champion,
                name: data.name,
                mainBody: data.mainBody,
            });
        };

        if (isShopListHovered) {
            testDataFetch(shopUnitIndex);
        }

        setShowShopUnitInfoBox(isShopListHovered);
    }, [isShopListHovered, shopUnitIndex]);

    useEffect(() => {
        setShowUnitTraitInfoBox(isUnitTraitsHovered);

        if (isUnitTraitsHovered && hoveredTrait) {
            console.log("Xdd");
        }
    }, [hoveredTrait, isUnitTraitsHovered]);

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
        <div className={styles.App} id="overlay">
            {/* <div className={styles.testDisplay}>
                Current selected trait is: {traitIndex}
                <br />
                Current Video Resolution is: {overlayResolution.width} x{" "}
                {overlayResolution.height}
                <br />
                Current selected unit is: {testUnitName}
            </div> */}

            <UnitInfoBox
                onHoverAbilitySquare={setShowAbilityInfoBox}
                onHoverTrait={setIsUnitTraitsHovered}
                setHoveredTrait={setHoveredTrait}
                onHoverStat={setShowStatInfoBox}
            />

            <div className={styles.traitsList}>{traitTiles}</div>
            {showTraitInfoBox && (
                <TraitInfoBox type="traitsList" traitObj={hoveredTraitObj} />
            )}

            {showShopUnitInfoBox && <ShopUnitInfoBox ability={testShopUnit} />}

            <div className={styles.shopList}>{shopTiles}</div>

            {showAbilityInfoBox && <AbilityInfoBox ability={testAbility} />}

            {showUnitTraitInfoBox && <TraitInfoBox type="unitTrait" />}

            {showStatInfoBox && <StatInfoBox />}
        </div>
    );
}

export default App;
