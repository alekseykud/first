'use strict';
console.log (100+ '10');
console.log (100+ + '10');

let incr=10,
    decr=10;
incr++;
decr--;
console.log (incr);
console.log (decr);

console.log (++incr);
console.log (--decr);

console.log (incr++);
console.log (decr--);

console.log (5*9==45); //== - не строгое значение
console.log (5*9==="45"); // === - строгое значение

const isCheked=true,
    isClose=false;
    console.log(isCheked&&isClose); //$$ - оператор сравнения И
    console.log(isCheked||isClose); //$$ - оператор сравнения ИЛИ
    console.log(isCheked||!isClose); //! - оператор отрицания

console.log (2*8+6!==22);
console.log (2*8+6==22);
console.log (2*8+6==65);
console.log (2*8+6!==65); 
  



