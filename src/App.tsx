import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import TraitInfoBox from "./components/TraitInfoBox/TraitInfoBox";
import ShopUnitInfoBox from "./components/ShopUnitInfoBox/ShopUnitInfoBox";
import UnitInfoBox from "./components/UnitInfoBox/UnitInfoBox";
import AbilityInfoBox from "./components/AbilityInfoBox/AbilityInfoBox";
import HoverWrapper from "./components/HoverWrapper/HoverWrapper";
import StatInfoBox from "./components/StatInfoBox/StatInfoBox";
import { ShopUnitInfo, TraitInfo, AbilityInfo } from "./types/InfoBoxProps";

const zlib = require("react-zlib-js");
const Buffer = require("buffer/").Buffer;
// import zlib from "react-zlib-js"

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

    const [hoveredTraitObj, setHoveredTraitObj] = useState<TraitInfo>({
        name: "",
        displayName: "",
        activeCount: 0,
        description: "",
        intervals: [],
        champions: [],
    });

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

    const handleResize = () => {
        console.log("resized");
        setOverlayResolution({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });
    };

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

                var input = "hello world";
                var deflated = zlib.deflateSync(input).toString("base64");
                console.log("deflated:" + deflated);
                // var inflated = zlib.inflateSync(new Buffer(deflated, 'base64')).toString();
                var inflated = zlib
                    .inflateSync(Buffer.from(deflated, "base64"))
                    .toString();

                const str2 =
                    "eJyVW9luI0cS/Jd+5kNV1s238ey9lrHYA35YLBaU1BgRpkihybE9NubfF1V5VLZYsrhvlLp5RQcjIyOzf53Ol2XePc/LtJ12P87L7tN83D3P02Z6mvefni7T1ppsNtNP+8fL07S1Bcxmevi8LPPx8s1ptzxO27CZ9uePp+f73eVvT7vzPG0vy+d5M50vu0/ztIXNtJw+Hx+nrd9Ml2W3v5yn7b9/nR5On4/t5em/39W33U4v8/Gy+2F/OExfN3KSX5/zw+NOH3Xro+eX+XD4aa7fRp8V1mfNzyd91K6PPu9/ft6dL+tXeHXOT/vD40NFQJ2S1qfcL5/351cv8ur7nufjZX+cD791ztO8Wy7ny1zP+s9mOj+dXv517DieLw3lz0f1osvu5Wl/nOlVz/jp1Rm743Gvj5r180+HR3XQrQ/unvfL7s3Dn5dPp0v7nJ/lMx7x0D9Pxy+7aTO9nM77y/50nLa/Tj9PW7Cb6cu0dWEz/TJtHXzdTPeVMfvjp//en36uZz2cluO8WHqCdR6fUeLXDR0DOuaTo2Nfv26mw4+HaZvTZlp2x0pG7zfTw59epq31lTX1UY6b6eGuvm/eTJf6wFeqfHisJ6XNdF8fOefqo5dpCx7q0WXaRlP/tUxbgMrPu2XaOls20319ZFOoR8/1qZvp8nH5OG1dtu3h76atBdhM97vzXD8BOIN/3E1bmz0+bu9qI/1RX7vQSe0xHzhPW8i+XgvC+G735RphhwhDbAhDeRdhl0N7hg/2GmHAY+CiQGy9FYwhMMhQP38DuSQE2dZrXUEG6xjk+i8EuX6+BrKLlkCGaAllFxKjHIBQdgkIZYiJYQbTYW7PJpjrVyKUXVAo2+A6yhCgwwzJd5iz0Siflv1xwOSE3MvIZPM+zi7iMyBc41yZVnE2HWdnveBc2YQwVyY2mF0wiHNimIFhhuIJZluYy7Z+vwazy4nJ7AhlPK3B4CxzOYKQuT0XUc4KZRuLwAwQO8yQkiJzCh1ma0qH2bmgcP7jsvtxPg8IjRSsv61K6PeBjvQEcAOc6Zg3gjP4jnO9qKgZUAhnawPi3MSgftP6FRrOLgSmM5KzXpbMmgGZRaMYwhkSawZdojPKFMJMtP4ds54lw3cyAytDf3smc4xKM5ySjPqz7mR++GGeBxgbpF+5lczWIv2DhWuQM/80bBeN2EWjPUaUiyWUoSryQ+MR0dkmIJiTI5QhijIHRyiHwmS2mdlsWDMQ74qCzcJmSE7YzGqMHyaORcOBVzhrzQhGkdkkhfO3u4eRNqMC1K94W/WDghcmwKD61S/8ZdoW16lc34CpbEQzLKOcuP5x+atXEalcClM5JqEyS4Y1gVC2TRWQY4mV2bAyFxHmpu8IMkSvQNb1z2cFssY4pw5yVIJRf9EC8Z+fT5/m44jMK8Fw+X1lFjKna5Tp1WwZK0ar2w1ml9hmQAWukdkXApq5bF1kaTaMs4XEkuGBK6BnnBOT2RrHBTCLZtjuM9pTGGcHqePMj9tvCJTPCFqZHSgyZ430d6f5cA2zJ80wt5I50XUZ2IyARg5yF4yKO2FcPyYyObEqe0LY5sTVLxPEUYofsCg34UAmtx92feRZLqL4uJJZLawADLarsq59LvfaZ9luNIC91UzOCuGYOsIRFMB/P91/GVkMrxFu5ewduaietBLZDVQ5MJG7XjTKEsgxE8i5CI0Ta3K60ovIdrlVpwpy4cKHv3E0GKIWDVv0zYlpXM+j0ieSzIDhB9BmGTrGFpSNc+zc8NWDkous/cW3+8N+dxz0JKzK+VbHbC167OjfrH3WdLlw9TsxyoapXP+JBiNYUuVIpc+V9Lr0NTeGXHaBjZxltbCBHYYzkXEuXPuYwh+nbb0KVPqSVmWBsL6TNnKQO9C2qNrXPrUAnXTt+9O8uzzNywBoWAmzfd/JYYVzsbwpGdYmVf66LDOb0UageMS1ketspg6uqXIWw1yYz9irLPJDaP8z7DEy4+zAdlkOXZa1avguy1lZOdB+Oa/aktxhtk5buW/ny9OIzYVUFkFON/QlJAx5IMw5kmh0Za5vwCj7LH0JFz/rqS+xxSPOJYtfzgyzZyfnrbDZMZtB/LKgbMUv2yiqwS1KpXMoSjeCorOLWje0NrN7w+KqcHZBi/PvD/NINYA6NrjVMgNC6ePIyuGL2eiG7V9lLLK5/fiRzaTNkVC2lmEGIx5DVCOKxeAeOwnIDdomGd4wyK39wQKYpflbYWyVwbC6xbZGSQb323esUsJl0D32P59Ozy/n06AGcpxBgVF8F+ZCau4HJdB60gwlzkYlRo6tXO+yCxmNeOUzmkojzFn6kuas0cpxl+2ky64XDzVDHDPnRBXoIOLMclA/Qcgd56JqoLPKMeNnEZyVz1gFRn8Z1j/K5DzZjBsUI5Eup4FiJHy1rOyy6fXPSYfd+t4GseH61/zAHWV+rzD2nBc1sInKAnFwV6kcGPYZ1nTF6AUQWBhe50VGkVk6Eax/KpbDAkAg+7RO5Y41Kn6rLwEsf/6GxMiSMo8kI5D9zkU12d0zFzYakeufjdRii2WOUv/QKT+SY8Puz7PPiGwzoGSxc9z8eemwoXvmjrIzTnvmrhkuqPLXid0unOpKYNX+rWzGH5bdL/uhzTDEzlv5DCS/aRDM0YslpRiqANosBdCxbW62Yp0yV0uF0gzcZmPWWXtyL4ohUUa16mTnypVkgOlAJymAKPoSZdguGk41J73llpdkoLPKP2HVnfz+fJkPI92gmAeT5prlveebM+pG8APjnMgcghIOl1ScwdrsWJuhErPVQBMIaMfibC0DjSncqgnsCWj7SV96+3vHTXFDoTM6Gca5BO0zOp2LVo2Y31ANKLo9WduM88v+ePpl5OjW+uzf57Mnfc4DQqf0mtCgHZ0YZ4zYsNSToYuBA/0iMJvXbSBIaARedCMSypn9HMr5mWoJNYFiNJzWZogdZm8Uys5qlLXRyCr/XBuNj6fjcaQZxGXC+BbXXMiy2QHGkUwLBAG5ns4Y9/yzN4GOpybZvM4/W+BMcb4XMrPRwN96gzmxbIA4DbHNfTQFvTcB3QR2P8ztPQNtlDrbqLtt7eggFQX0P/bPp1E4BzyyuzWcszwyHCXNHpudmFSz3YHOkhvFIOJM2sytdmSrgT9aacY+cMeIIGfhsgSgOMrrwQ7GzGXQnKyKoMo0nA7mrFe+uadLiwqm2zv4sAqOzvPzbhlEzZzOwc3iHEic3aDZJsOXoXuN1KPm9lQUZ8mOIjXbLRStmlFkOhXZbDiseC80ykCkk9DZcYeCoR3+shlpV4I020Uy0KR6bXC9CwTNZ69ngFmXQJWA5rxONEZ+bg3xDTmzI122eaAZ1Gl7lYFahXGR0VSJ0mqnV8rcmoJL98uPnP42OhumM3WIC1ETrUbusykGuUgBdF0zoq6AWXUnb04ArdXdSdQ5s9Xi/D0ucrzVatPSwC0jbcpBXRmIc+4NolTAmFSHInm+zKZoAthCgkbmzAUwG4FZgiMrk1YnPkMaFKxaUguxBEahspUaCFZpc8+E1HBQ3p/TfJVnFF0Bowb5r8v+fNmPlBl0DOretxlWhlMDxYgUz5migqPenjQoUZsL+4zGwObnWJ17h0JSsepQcK6F7a9kR573M8DzTJvy6DM9IkJ7sXQuqymgs53RUSd0xWjV0J7O6ilg0lh/tzs97980dA5uRbp10C2iM29qs4tq2lq/JyPtnLgNkCpIGV2kKNTG60Fg68KxRWHjnLgKOgk10NHeLXJhzjRaaSh7GZ7I3Ak9fAcZkupPnNFFsChCO6vyZmd0Efxw+HG3zL+8OT/xN89P2gSoPmM0ozIgi0iiG2oTpsi6kYxb24ivwlzKa93AcQauG8m8NWVpUGQTBthuWC+DQOlQMKMmVycjFJfUDCWqoXZyHWnh9mt9bs17bwR1sLE/HEb7GXm1n3EDyqlQEDJgs6XmPSh1dk7phgxQpAxGkudEZG6R2quELnIXGNlooCXARkWmVMA1EK0ZpvpiNFyWobbsbuGMoXs6qYg9iWXRSHoWuM71dSP4zWlsnNMqCL2hQ6FdF+8GboMmWDZ7RWaVaxSZasuGhgtsnbkKNglFoHt+JG2gJM5ZvIZY5xyududwS4+2uvq+kVFcxiJA2qxVo+hFmOy0Nq/qoM5C/zYfj/vjp8swdCZK+1sFOtLFgQHUgbyIgrr9lqUbjNKlXLlnSNQNdvecGGoaV7cENV9FdSARkmWsXeYFAqfaFCO6If63fQSjR4KrcEPPXvNKonW+b/QGwV9Ou+Mwes56IQZuSPe5s367GayXebSp0VYvkNMgERLPXi1ndV6mKF5mr5bFo2FJ4YYodJTZq6wqGjYcRSoh7pJSVKf9RuzOroUA0g9G1XWvxihZRaLOa05/N/805DONnm5foWvLQ82+DZLnTGsJis9JJfyBDXQIV4sEzr02di2rulcxR/UbPHktIh22iN+QMijTKqf2YYLaO9K9YDccfW3uUa0YXCm01wLtdR388Pg48s/OrabbN6wRsA80v7Wo2F2dSvdbBv1qIthEGOco7Opk8VZ2Ymi/s40DpBvMvN2VOaeDIMtdkRdCcY0XyQx98FpWC6FqVdErmPVOjNeSoacosErqvln2l8txHm3Rwf+5rEhy7v1AnQ13Pb1Picpu9G6wcDvY7ALi7K7zfV5wxpkoDqwEaFkkaJuzDenAezGBxdkqNkfTozpNZ7XdJQJS31U3KbaopA50JOq8Tuq+Py0/PO9GqlFWOL9P6MiLNANxjjz97omo6rmjTAUFZcclkKeCDT20GyIZTkqg5KEFrjDGCB6nKNJzdzJ7lW3oCXdUrs6sWkHl6qxVmtFGmd3Vrdru3TJa8VpvhMINcShFG9aP1uiIzD12bmrMZLZGtpvz671bx9lGM7NIZtlVbHJDVkO2YlIfokjPHRjoxEDjCiQB3a1GSVo19FhQWY2gehTwugQWNeG2ZWXrTofD25u3HCHdku8zzqMKSJPconLnpHZCcxSg2T474HyfV0KDJM+5WzpWZ1wP+9Bd22r7SMYouASAbUqPNkLfCbV5XAR7pnw15TZqkdxmpc/ruyJ2P++Hy7fk6PytQ26gYUkYLWxQiqSaQady5+YKHmS2vbr7xPFeDLIOb/7w4ujk7hOmM3SvIZuhfWGD9pXOLDS4TNcD/rBKkHrLDTrhX917AqoK9pXR1tOv5lW7ZVgDwehdgv9jYR+GERLdY+X7+lFb1pG7fNJVN8i+2RCdE6PsBWQRZ9xRQk2W4Nlzg4IzRLzFR7yGFzanvksQdX8Cisx6/0jWoK9XNvReTND5/je7ZZmXt5fpOBN9f8e53bnUpiijiJ8uge9eA9QGbl8lx2YB2wPHO7hEZ75hDTh5dn30WpjN9D+ORi99doJVULyGEXW2nc6yz8x7OpJtwBts5lEsslkHSKuVxZog7R/m42VA6LDadb4BabrNp7nGK4GmBt7AsBUUu+HkNp9W/3ChjofcsoRknegzXEENgfW5VUnKnuFaOILaQurZs97ZjyoVXd0bmJThiIrRemfDJh0i3X2Zl9+4lyrcvIJEc0QHg5UNMohW7Xq15kru8+H5a3MhDebAri74q5UNkO3QzN65b4eCoFwkRep3rVnZ2ejJhu2Li7YofZYdmLs+L0S7o+2GM7oK6uzZ5a//+fo/EFmh+Q==";
                var inflated = zlib
                    .inflateSync(Buffer.from(str2, "base64"))
                    .toString();
                console.log(JSON.parse(inflated));

                try {
                    const req = await fetch(
                        // `http://localhost:3000/units?x=${x_1920}&y=${y_1080}`
                        // `http://localhost:8000/thepookguy/units?x=600&y=625`
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

                            console.log("testing json compress");

                            const jsonStr1 = JSON.stringify(data1);
                            const compressedJson64 = zlib
                                .deflateSync(jsonStr1)
                                .toString("base64");
                            console.log(
                                "JSON zipped then base64d is: " +
                                    compressedJson64
                            );
                            const original = zlib
                                .inflateSync(
                                    Buffer.from(compressedJson64, "base64")
                                )
                                .toString();
                            console.log("OG is: ");
                            console.log(JSON.parse(original));
                        }
                    }
                } catch (error) {
                    console.log("There was an error", error);
                }
            }, 100);
        };

        if (window.Twitch.ext) {
            window.Twitch.ext.onAuthorized(function (auth) {
                console.log(
                    "The JWT that will be passed to the EBS is",
                    auth.token
                );
                console.log("The Helix JWT is ", auth.helixToken);
                console.log("The channel ID is", auth.channelId);

                const test1 = async () => {
                    console.log("testing twitch api from frontend");
                    try {
                        const response = await fetch(
                            `https://api.twitch.tv/helix/streams?first=10`,
                            {
                                headers: {
                                    "client-id":
                                        "k6gciizb6q65wmj7kdzmfgfye2sm2e",
                                    authorization: `Extension ${auth.helixToken}`,
                                },
                            }
                        );

                        if (response.ok) {
                            const data = await response.json();
                            console.log(data);
                        } else {
                            console.log(response.status);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                };
                // test1();
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
                    console.log("message is: " + message);
                    const data = JSON.parse(message);
                    console.log(data.units);
                }
            );
        } else {
            console.error("Twitch Extension Helper Library not found");
        }
        handleResize();

        document.addEventListener("click", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("click", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const testDataFetch = async (index: number) => {
            setHoveredTraitObj({
                name: "",
                displayName: "",
                activeCount: 0,
                description: "",
                intervals: [],
                champions: [],
            });

            try {
                const response = await fetch(
                    `http://localhost:8000/thepookguy/traits/${index}`,
                    { signal }
                );

                if (!signal.aborted) {
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);

                        setHoveredTraitObj({
                            name: data.name,
                            activeCount: data.activeCount,
                            displayName: data.displayName,
                            description: data.description,
                            intervals: data.intervals,
                            champions: data.champions,
                        });
                    } else {
                        setShowTraitInfoBox(false);
                        console.log(`HTTP error! Status: ${response.status}`);
                    }
                }
            } catch (error) {
                if (!signal.aborted) {
                    console.log(error);
                }
            }
        };

        if (isTraitListHovered) {
            testDataFetch(traitIndex);
        }

        setShowTraitInfoBox(isTraitListHovered);

        return () => {
            abortController.abort();
        };
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
