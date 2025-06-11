function fact(num){
    if(num==0){
        return 1;
    }
    return num*fact(num-1);
}
function trailingZeros(num) {
    let count = 0;
    for (let i = 5; i<=num; i *= 5) {
        count += Math.floor(num / i);
    }
    return count;
}
console.log(trailingZeros(100))