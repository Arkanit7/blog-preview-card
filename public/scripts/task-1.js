// З клавіатури вводиться рік народження учня. Визначити вік учня.
// ---
// Крок 0. Позначення величин
// currentYear : number
// learnerYearOfBirth : number
// learnerAge : number
// Крок 1. Введення необхідних даних
const currentYear = 2025
const learnerYearOfBirth =
  parseInt(prompt('Введіть рік народження', '2010')) || 2025
// Крок 2. Обчислення результатів
const learnerAge = currentYear - learnerYearOfBirth
// Крок 3. Виведення
document.write(`<mark>Вік учня: ${learnerAge} років.</mark>`)
