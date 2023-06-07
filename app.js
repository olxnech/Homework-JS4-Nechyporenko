'use strict'

// Завдання 1

function num(a, b){
    if(a<b || a>b)
    return console.log(1);
    else return console.log(0);
}
num(6, 6);

// ***********************************************
// Завдання 2

// let factorial=(n)=>{
//     let rez=1, i=1;
//     for(; i<=n; i++)
//     rez*=i;
//     console.log(rez);
// }
// factorial(5);

// ***********************************************
// Завдання 3

// let num=(a,b,c)=>{
//     let rez=a*100+b*10+c;
//     console.log(rez);
// }
// num(3,2,8);

// ***********************************************
// Завдання 4

// let square=(a, b=a)=>{
//     let rez=a*b;
//     console.log(rez);
// }
// square(10);

// ***********************************************
// Завдання 5

// function perfect(num){
//     let a='Число досконале';
//     let b='Число не досконале';
//     let rez=0;
//     for(let i=0; i<num; i++){
//         if(num%i==0){
//             rez+=i;
//         }
//     }
//     if(rez==num && rez!=0){
//         console.log(rez)
//         return a
// } else return b;
// }
// alert(perfect(1));

// ***********************************************
// Завдання 6

// function perfectRange(from, to){
//     for(let i=from; i<=to; i++){
//         if(!perfect(i)) 
//                 console.log(i);
//         }
// }
// perfectRange(1, 8128);

// ***********************************************
// Завдання 7
// Варіант 1
// Варіант 2

// let watch=function(hour='00', minute='00', second='00'){
//     alert(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`);
// }
// watch(2,15);

// ***********************************************
// Завдання 8

// let secondsCount=(hour, minute, second)=>{
//     let rez=hour*60*60+minute*60+second;
//     return rez;
// }
// console.log(secondsCount(3,48,20));

// ***********************************************
// Завдання 9

// function time(second){
//     let hour=Math.floor(second/3600);
//     let minute=Math.floor(second%3600/60);
//     let seconds=second%3600%60;
//     alert(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
// }
// time(13700);

// ***********************************************
// Завдання 10

// function differenceTime(hour, minute, second, hour2, minute2, second2){
//     let seconds=secondsCount(hour, minute, second);
//     let seconds2=secondsCount(hour2, minute2, second2);
//     let rez=seconds2-seconds;
//     return time(rez);
// }
// differenceTime(1,22,30,7,25,45);