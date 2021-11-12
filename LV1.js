// factorial(1) = 1
// factorial(2) = 2 * 1 = 2
// factorial(3) = 3 * 2 * 1 = 6
// factorial(4) = 4 * 3 * 2 * 1 = 24
// ...
// factorial(10) = 10 * 9 * ... * 2 * 1 = 3628800
// ...

let a = 1;
for (var i = 1; i <= 10; i++) {
    a *= i;
}
console.log(a);
// 期待老师的修改

function digui(x, n) {
    x++;
    return n == 10 ? x : (x * digui(x, n + 1));

}
var result = digui(0, 1);
console.log(result);



// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
// }
// var result = pow(3, 5)
// console.log(result);