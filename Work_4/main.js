// Задание 1

function numbers(a, b) {
    if (a > b) { return (1) }
    else if (a < b) {
        return (-1)
    }
    else {
        return (0)
    }
}
let a = prompt('Введите число:')
let b = prompt('Введите второе число:')
let result = numbers(a, b)
alert(result)

// Задание 2

function factorial(n) {
return (n != 1) ? n*factorial(n-1) : 1;
}
let n = prompt('Введите число: ')
alert (factorial(n))

// Задание 3

function digits(d,e,k){
    return (d+e+k)
}
let d = prompt('Введите число:')
let e = prompt('Введите второе число:')
let k = prompt('Введите третье число:')
alert (digits(d,e,k))

// Задание 4

function square(x,y = x){
    return (x*y)
}
let x = prompt('Введите число:')
let y = prompt('Введите второе число:')
alert (square(x,y=x))

// Задание 8

h = +prompt('часы');
m = +prompt('минуты');
s = +prompt('секунды');
function seconds (a,b,c) {
return (h * 3600) + (m * 60) + s
}
alert(seconds(h,m,s))