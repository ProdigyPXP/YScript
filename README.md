# YScript
### A flavor of [YoptaScript](https://github.com/samgozman/YoptaScript) maintained by [ProdigyPXP](https://github.com/ProdigyPXP)

[![yoptascript logo](./docs/assets/img/YoptaScript.png)](https://yopta.space/)

Support original author
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C1DI4VL)

[![yoptascript](https://img.shields.io/badge/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-YoptaScript-green?style=for-the-badge)](https://github.com/samgozman/YoptaScript/tree/master/dist/yopta.js)
[![npm](https://img.shields.io/npm/v/@ppxp/yopta?style=for-the-badge)](https://www.npmjs.com/package/@ppxp/yopta)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge)](https://github.com/ProdigyPXP/YScript/issues)
[![license](https://img.shields.io/packagist/l/doctrine/orm.svg?style=for-the-badge)](https://github.com/ProdigyPXP/YScript/blob/master/LICENSE.txt)

[YoptaScript](http://yopta.space/) это первый в мире скриптовый язык программирования для гопников и реальных пацанов, транслируемый в чистый JavaScript. YoptaScript позволит "чётким пацанам" быстро влиться в ряды программистов и процесс разработки.

Очень **приветствуются** добавления новых определений в [словарь](./src/dictionary/dictionary.ts) языка, а также поиск багов и расширение функционала!

Смотрите интервью о создании языка на канале Хекслет: [https://www.youtube.com/watch?v=Rk5wNGBIilM](https://www.youtube.com/watch?v=Rk5wNGBIilM)

[![yoptascript logo](./docs/assets/img/Yopta2.png)](https://github.com/samgozman/YoptaScript/blob/master/CONTRIBUTE.md)

## Разработка

При разработке языка использовались основные лексические и фразеологические единицы диалекта "нормальных пацанов" позаимствованные из следующих словарей:

* [ГСР](http://lurkmore.to/ГСР)
* [Краткий словарь блатного жаргона](http://www.aferizm.ru/jargon/slovar.htm)

Так же были заимствованы крылатые слова и выражения в ходе наблюдения за некоторыми индивидами из представителей "чётких пацанов".

Толчком к разработке **YoptaScript** послужили события, произошедшие в середине 2016 года, в ходе которых журналистами Piter.TV была открыта такая категория программистов как [**гопники-программисты**](http://piter.tv/event/V_Peterburge_pyatero_studentov_kolledzha_grabili_shkol_nikov/).

Вся разработка и поиск ошибок ведётся в ветке **develop**!

## Предупреждения

YoptaScript не несёт в себе цели оскорбить кого-то или унизить. YoptaScript создан для облегчения обучению программированию определённых слоёв населения.

YoptaScript содержит **множество нецензурной лексики**.

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

```bash
pnpm install @ppxp/yopta
```

или введите `pnpm install -g @ppxp/yopta` чтобы установить йопту глобально.

## Поддержка разных диалектов

YoptaScript отлично работает с разными локальными диалектами!

Например:

* `трулио` -> `чётко` -> `четко` -> `чотко` -> **true**
* `нетрулио` -> `пиздишь` -> `нечётко` -> `нечетко` -> `нечотко` -> **false**
* `эквалио` -> `ровно` -> `однахуйня` -> `типа` -> **==**

И другие

Все методы и свойства, содержащие букву `ё` можно писать без `ё`, используя `е`. Если в середине слова может присутствовать буква `ё`, то можно писать вместо неё букву `о`. Yopta поймёт.
