# Implementation of an iterator in a Сlass that takes array as an argument

---
[![Build status](https://ci.appveyor.com/api/projects/status/yj224iae4k1042i8?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-oop)

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
