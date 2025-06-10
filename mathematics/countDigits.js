function countDigits(n){
    let res=0;
    while(n>0){
        n=Math.floor(n/10)
        res++;
    }
    return res;
}
console.log(countDigits(9123))