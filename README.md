# YScript
### A flavor of [YoptaScript](https://github.com/samgozman/YoptaScript) maintained by [ProdigyPXP](https://github.com/ProdigyPXP)

[![YoptaScript thumbnail](./docs/assets/img/YoptaScript.png)](https://yopta.space/)

Support the original author of YoptaScript: 
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C1DI4VL)

[![yoptascript](https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-YoptaScript-green?style=for-the-badge)](https://github.com/samgozman/YoptaScript/tree/master/dist/yopta.js)
[![npm](https://img.shields.io/npm/v/@ppxp/yopta?style=for-the-badge)](https://www.npmjs.com/package/@ppxp/yopta)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/ProdigyPXP/YScript/issues)
[![license](https://img.shields.io/packagist/l/doctrine/orm.svg?style=for-the-badge)](https://github.com/ProdigyPXP/YScript/blob/master/LICENSE.txt)

[YoptaScript](http://yopta.space/) это первый в мире скриптовый язык программирования для гопников и реальных пацанов, транслируемый в чистый JavaScript. YoptaScript позволит "чётким пацанам" быстро влиться в ряды программистов и процесс разработки.

Очень **приветствуются** добавления новых определений в [словарь](./src/dictionary/dictionary.ts) языка, а также поиск багов и расширение функционала!

Смотрите интервью о создании языка на канале Хекслет: [https://www.youtube.com/watch?v=Rk5wNGBIilM](https://www.youtube.com/watch?v=Rk5wNGBIilM)

[![yoptascript logo](./docs/assets/img/Yopta2.png)](https://github.com/samgozman/YoptaScript/blob/master/CONTRIBUTE.md)

## Разница YScript с Йоптаскриптом
- YScript использует [ESBuild](https://esbuild.github.io) вместо [webpack](https://github.com/webpack/webpack/issues/5032).
- YScript доступен для [много различных версий JavaScript](https://github.com/ProdigyPXP/YScript/tree/master/dist).
- [yscript.min.js](https://github.com/ProdigyPXP/YScript/blob/master/dist/yscript.min.js) на 5kb меньше чем [yopta.js](https://github.com/samgozman/YoptaScript/blob/master/dist/yopta.js)

## Предупреждения

YScript не несёт в себе цели оскорбить кого-то или унизить. YScript создан для облегчения обучению программированию определённых слоёв населения.

YScript содержит **множество нецензурной лексики**.

## Использование

Скачайте [последнюю версию](https://github.com/ProdigyPXP/YScript/tree/master/dist) языка и следуйте дальнейшим инструкциям.

### Браузер

1. Положите файл `yscript.min.js` из папки `dist` в папку c вашим проектом. Или используйте CDN
2. Подключите файл к вашей `html` странице в самый конец перед закрытием тега `body`:

```html
<body>
    <script src="yscript.min.js"></script>
</body>
```

3. Создайте внутри `body` элемент `script` с атрибутом  `language="YoptaScript"` на странице до подключения основного скрипта

```html
<body>
    ... ...
    <script language="YoptaScript">
        //ваш йоптакод
    </script>
    <!-- Пример с CDN -->
    <script src="https://cdn.statically.io/gh/ProdigyPXP/YScript/master/dist/yscript.min.js"></script>
</body>
```

```url
https://cdn.statically.io/gh/ProdigyPXP/YScript/master/dist/yscript.min.js
```

Можно так же вынести йоптакод в отдельный файл и подключить через атрибут `src`.

4. Начните писать код!

```html
<script language="YoptaScript">
    ксива.малява(" Оно работает ") нах
</script>
```

Полный пример можно посмотреть в файле [index.html](https://github.com/ProdigyPXP/YScript/blob/master/demo/page/index.html) в директории `demo/page`. Конвертером из JavaScript в YoptaScript можно воспользоваться открыв файл [index.html](https://github.com/ProdigyPXP/YScript/blob/master/demo/converter/index.html) в директории `demo/converter`.

### NodeJS

**YScript** можно так же подключить для вашего проекта с помощью пакетного менеджера **pnpm**.

```sh
pnpm install @ppxp/yopta
```

или введите `pnpm install -g @ppxp/yopta` чтобы установить йопту глобально.

## Поддержка разных диалектов

**YScript** отлично работает с разными локальными диалектами!

Например:

* `трулио` -> `чётко` -> `четко` -> `чотко` -> **true**
* `нетрулио` -> `пиздишь` -> `нечётко` -> `нечетко` -> `нечотко` -> **false**
* `эквалио` -> `ровно` -> `однахуйня` -> `типа` -> **==**

И другие

Все методы и свойства, содержащие букву `ё` можно писать без `ё`, используя `е`. Если в середине слова может присутствовать буква `ё`, то можно писать вместо неё букву `о`. Yopta поймёт.
