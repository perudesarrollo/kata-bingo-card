const { random, forEach, shuffle, keys } = require("lodash");

const range = (start, end, length = end - start) =>
    Array.from({ length }, (_, i) => start + i);

const randomCard = (start, end, n = false) => {
    let rango = shuffle(range(start, end)).slice(0, 5);
    if (n) {
        rango[2] = "";
    }
    return rango;
};

const card = () => {
    const label = [
        { label: "B", lb: 1, ub: 15 },
        { label: "I", lb: 16, ub: 30 },
        { label: "N", lb: 31, ub: 45 },
        { label: "G", lb: 46, ub: 60 },
        { label: "O", lb: 61, ub: 75 },
    ];

    let objectoX = {};
    label.forEach((e) => {
        let x = e.label === "N" ? true : false;
        Object.assign(
            objectoX,
            ...randomCard(e.lb, e.ub, x).map((r) => {
                if (r) {
                    return {
                        [`${e.label}${r}`]: `${e.label}${r}`,
                    }
                }
            })
        );
    });

    return keys(objectoX);
};

module.exports = card;
