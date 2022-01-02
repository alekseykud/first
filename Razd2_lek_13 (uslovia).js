'use strict';
if (87==96) {
    console.log ('Ok!');

} 
else {
    
    console.log('Error');

}

const number = 50;

if (number < 100) 
{console.log ('Число меньше 100'); } 
else if (number ==99)
{console.log ('Число равно 99'); }

if (number > 99)
{console.log ('Число больше 100'); }

(number === 50) ? (console.log ("число равно number!")) : (console.log ("не равно number"));

const number2=652;
switch (number2) {
    case 99:
        console.log ('Не верно!');
        break;
    case 150:
        console.log ('Не верно!');
        break;
    case 100:
    console.log ('Вы угадали!!!');
    break;
    default:
        console.log ('Вы ничего не угадали!!!!!!!');

}
