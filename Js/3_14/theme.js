var x=prompt("Введите число"); // Инициализируем переменную x значением, введённым пользователем в модальное окно
var y=prompt("Введите степень"); // Инициализируем переменную y значением, введённым пользователем в модальное окно
counter = 1; // Начальное значение переменной counter
chislo = x;
while (y!=counter){ // Условие
	chislo*=x; // Программа возводит число в степень
	counter++; // Значение переменной counter +1

}
alert(chislo);