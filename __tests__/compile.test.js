/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-var-requires */

require('../dist/yscript.min.js');
const dictionary = require('../src/dictionary/sortedYopta.json');

test('Компиляция из JS в YoptaScript по словам', () => {
    const synonims = (word) =>
        dictionary
            .filter((el) => el[0] === word)
            .map((el) => {
                return el[1];
            });
    // Проверка каждого перевода на вхождение в список синонимов
    for (const element of dictionary) {
        const js = element[0];
        const ys = global.yscript.compile(js, 'js');
        expect(synonims(js)).toContain(ys);
    }
});

test('Компиляция из YS в JavaScript по словам', () => {
    for (const element of dictionary) {
        const ys = element[1];
        const js = global.yscript.compile(ys, 'ys');
        expect(js).toBe(element[0]);
    }
});
