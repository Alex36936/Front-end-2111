
//first task

 let firstValue = Number(prompt('firstValue'));
 let secondValue = Number(prompt('secondValue'));

 if (firstValue > secondValue) {
     console.log(`${firstValue} > ${secondValue}`);
 }
 else if(firstValue == secondValue) {
     console.log(`${firstValue} == ${secondValue}`)
 }
 else {
     console.log(`${secondValue} > ${firstValue}`);
 }


//second task

 let yourNumber = Number(prompt('your number'));

 if (yourNumber % 2 == 0) {
     console.log(`${yourNumber % 2 == 0}`, 'odd');
 }
 else if(yourNumber % 1 == 0) {
     console.log(`${yourNumber % 1 == 0}`, 'even');
 }


//third task

 let birthYear = Number(prompt('Birth Year'));
 let thisYear = 2024;
 console.log(Number(thisYear - birthYear));


//fourth task

 let myNumber = Number(prompt('Write your number'));
 let fixNumber = 25;
 if (myNumber === fixNumber) {
     console.log('Congratulated, you right!');
 }
 else if (myNumber > fixNumber) {
     console.log('Sorry,your number much bigger');
 }
 else if(myNumber < fixNumber) {
     console.log('Sorry,your number much smaller');
 }


//fifth task

 let rating = Number(prompt('Оцініть за 10-ти бальною шкалою'));

 if (rating >= 8 && rating <= 10) {
     console.log('"Відмінно" (8-10)');
 }
 else if(rating >= 5 && rating <= 7) {
     console.log('"Добре" (5-7)');
 }
 else if(rating >= 3 && rating <= 4) {
     console.log('"Задовільно" (3-4)');
 }
 else if(rating <= 3) {
     console.log('"Незадовільно" (менше 3)');
 }

//sixth task

 let numberValue = Number(prompt('Вкажіть ваше число'));

 if(numberValue >= 1 && numberValue <= 100) {
     console.log('Число знаходиться в діапазоні');
 }
 else if(numberValue <= 1) {
     console.log('Число поза діапазоном');
 }
 else if(numberValue >= 100) {
     console.log('Число поза діапазоном');
 }


//seventh task
//условие ? выражение1 : выражение2

 let result = '';
 let score = 75;

 if (score > 50) {
     result ="Пройшов";
     } else {
     result ="Не пройшов";
     }
 result = score > 75 ? score : 75;
 console.log(result);



 let tempResult = "";
 let temperature = 30;

 if (temperature > 25) {
     tempResult ="Гаряче";
     } else {
     tempResult ="Прохолодно";
 }
 tempResult = temperature > 25 ? temperature : 25;
 console.log(tempResult);  


//eighth task

let yourOld = Number(prompt('Вкажіть ваш вік'));
let yourCountry = (prompt('Вкажіть країну проживання'));

if (yourOld >= 18 && yourCountry === 'Україна') {
    console.log("Вітаємо, ви маєте право голосу в Україні");
}
else if (yourOld <= 17) {
    console.log("Ви ще занадто молоді для голосування");
}
else (yourOld >= 18 && yourCountry != 'Україна'); {
    console.log("Перевірте правила голосування у вашій країні");
}