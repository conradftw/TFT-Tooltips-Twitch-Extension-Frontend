import styles from "./TraitsList.module.css";
import React from "react";
import { debounce } from "lodash";

const NUMBER_DISPLAYED_TRAITS = 9;

const TraitsList = () => {
    const str1 = "traitRow";
    const rows = [];
    for (let i = 0; i < NUMBER_DISPLAYED_TRAITS; i++) {
        const debouncedHandleMouseEnter = debounce(() => console.log(i), 300);

        const handleOnMouseLeave = () => {
            debouncedHandleMouseEnter.cancel();
        };

        const row = (
            <div
                className={styles.traitRow}
                onMouseEnter={debouncedHandleMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                key={i}
            >
                {/* trait #{i} */}
            </div>
        );
        rows.push(row);
    }

    return <div className={styles.traitsList}>{rows}</div>;
};

export default TraitsList;
