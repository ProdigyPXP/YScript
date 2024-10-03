// Сортирует массив по самой длинной Yopta фразе перед сборкой
import * as fs from "fs";
import { dictionary } from "./dictionary.mjs";

/**
 * Сортирует массив по убыванию длины Yopta перевода и сохраняет в JSON файл sortedYopta.json
 * @param dictionary массив 2D массивов ключей
 */
export function sortDictionaryToFile (dictionary /*: string[][] */)  {
    dictionary.sort((a, b) => b[1].length - a[1].length);

    const file = JSON.stringify(dictionary, null, '\t').replace(/\\/g, '');

    fs.writeFile("src/dictionary/sortedYopta.json", file, err => {
        if (err) return console.error(err);
        console.log("Yopta array sorted!");
    });
};

sortDictionaryToFile(dictionary);
