'use strict';

/**
 * Сортировка массива из массивов строк по первому слову подмассива
 * @function strSort
 * @param {Array.<string>} a - первый массив
 * @param {Array.<string>} b - второй массив
 */
const strSort = (a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
};

/**
 * Получение массива массивов анаграмм
 * @param {Array.<Array<string> | Map.<string, number>>} acc - аккумулятор для reduce
 * @param {string} el - слово
 */
const getAnagramArr = (acc, el) => {
    const formatEl = el?.split('').sort().join('');
    if (acc[1].has(formatEl)) {
        acc[0][acc[1].get(formatEl)].push(el);
    } else {
        acc[1].set(formatEl, acc[0].length);
        acc[0].push([el]);
    }
    return acc;
};

/**
 * Фильтрация массива анаграмм
 * @function filterAndSortAnagrams
 * @param {Array.<Array<string>>} acc - аккумулятор для reduce
 * @param {Array<string>} author - очередной элемент
 */
const filterAndSortAnagrams = (acc, el) => {
    if (el.length > 1) {
        acc.push(el.sort());
    }
    return acc;
};

/**
 * Получение отсортированного массива массивов анаграмм, последние из которых состоят больше чем из 1 слова
 * @function anagram
 * @param {Array.<string>} words - Массив слов
 */
const anagram = (words) =>
    Array.isArray(words)
        ? words
            .filter(el => typeof(el) === 'string')
            .reduce(getAnagramArr, [[], new Map()])[0]
            .reduce(filterAndSortAnagrams, [])
            .sort(strSort)
        : [];
