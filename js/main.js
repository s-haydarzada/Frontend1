
function fn1(n) {

    let sum = 0;
    let num;

    while (n > 0) {
        num = n % 10;
        sum += num;
        n = Math.floor(n / 10)
    }
    return sum;
}
console.log(fn1(342))