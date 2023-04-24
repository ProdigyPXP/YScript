import { compile } from './core';
import "./yscript/imp";

// Экспорт для модуля
const yscript = compile;
export default yscript;

// Поиск скриптов при работе из браузера
if (typeof window !== 'undefined') {
    //Получаем йопту из скрипта
    document.querySelectorAll('[language="YoptaScript"]').forEach(yoptaToJs);
    document.querySelectorAll('[language="YScript"]').forEach(yoptaToJs);
    document.querySelectorAll('[language="Yopta"]').forEach(yoptaToJs);
    document.querySelectorAll('[type="text/x-yoptascript"]').forEach(yoptaToJs);
}

export async function yoptaToJs(scriptNode: Element) {
    if (scriptNode.parentNode !== null) {
        //Получаем йопту из скрипта
        const yoptaText: string =
            scriptNode.textContent || (await getTxtFromSrc(scriptNode));
        //удаляем старый скрипт
        scriptNode.parentNode.removeChild(scriptNode);
        //создаём обработанный скрипт с блекджеком и шлюхами
        addScriptNode(compile(yoptaText, 'ys'));
    }
}

export async function getTxtFromSrc(node: Element) {
    //Пошли искать сорцы
    const src = node.getAttribute("src");
    let resp = "";
    if (src !== null && src.length) {
        const fe = await fetch(src);
        resp = await fe.text();
    }
    return resp;
}

export function addScriptNode(compiled: string) {
    const script = document.createElement('script');
    script.innerHTML = compiled;
    document.body.appendChild(script);
}
