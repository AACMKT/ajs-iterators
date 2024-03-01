# Implementation of an iterator in a Сlass that takes array as an argument

---
[![Build status](https://ci.appveyor.com/api/projects/status/vilxs7a0c9av745s?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-iterators)

### Описание

Представлены условные типы игровых персонажей, как дочерние классы от класса Character:

```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```


Для создания команды персонажей, реализован класс `Team`(принимающий список персонажей в качестве аргумента).

Реализован итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Character`).

---

Обеспечено покрытие тестами.
