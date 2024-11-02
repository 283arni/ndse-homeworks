

### Задание 1

Текущая дата и время в формате ISO:  
`current-date current`

Текущий год:  
`current-date current --year` или `current-date current -y`

Текущий месяц:  
`current-date current --month` или `current-date current -m`

Дата в календарном месяце:  
`current-date current --date` или `current-date current -d`

`current-date add -d 2` - дата и время в формате ISO на два дня вперед

`current-date sub --month 1` - дата и время в формате ISO на 1 месяц назад


### Задание 2

`game` - начало игры

Примерный ход работы:
```
game
Загадано число в диапазоне от 0 до 100
1
Больше
75
Меньше
55
Отгадано число 55
```