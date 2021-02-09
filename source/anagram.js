'use strict'

const strSort = (a, b) => {
    // В данном кейсе лаконичнее без {}
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
}

let anagram = (words) => (
    Array.isArray(words) ? words.reduce(
        (acc, el) => {
            const formatEl = el.split('').sort().join('');
            if (acc[1].has(formatEl)) {
                acc[0][acc[1].get(formatEl)].push(el);
            } else {
                acc[1].set(formatEl, acc[0].length);
                acc[0].push([el]);
            }
            return acc;
        }, 
        [[], new Map()]
    )[0].reduce(
        (acc, el) => {
            if (el.length > 1) {
                acc.push(el.sort())
            }
            return acc;
        }, 
        []
    // тест не очень, смылс сортировки по первому слову....
    ).sort(strSort) : null
)