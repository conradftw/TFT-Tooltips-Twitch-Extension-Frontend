import { CompactGamestateType } from "../types/Gamestate";
const zlib = require("react-zlib-js");
const Buffer = require("buffer/").Buffer;

// pubsub message is a zlib deflated base64 string

// og uncompressed data is a compactgamestate json which can be 20kb worstcase
// while twitch pubsub message size limit is only 5kb
// thus compress into a base64 string with wiggle room, usually ~4.5kb in size

export const parseCompressedJsonToCompactGamestate = (
    message: string
): CompactGamestateType => {
    const inflated = zlib
        .inflateSync(Buffer.from(message, "base64"))
        .toString();
    const originalData = JSON.parse(inflated);

    return originalData;
};
