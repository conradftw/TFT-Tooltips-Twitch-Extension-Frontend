type PointType = {
    x: number;
    y: number;
};

type BoundingBoxType = {
    corner1: {
        x: number;
        y: number;
    };
    corner2: {
        x: number;
        y: number;
    };
};

export const isPointInsideBoundingBox = (
    point: PointType,
    box: BoundingBoxType
): boolean => {
    return (
        point.x >= box.corner1.x &&
        point.x <= box.corner2.x &&
        point.y >= box.corner1.y &&
        point.y <= box.corner2.y
    );
};
