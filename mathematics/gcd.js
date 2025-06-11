function gcd(a,b){
    let res=Math.floor(a,b)
    while(res>0){
        if(a%res===0 && b%res===0){
            return res;
        }
        res--;
    }
    return res;
}
// console.log(gcd(4,6))

function gcdEuc(a,b){
    if(b==0)
        return a;
    return gcd(b,a%b)
}
console.log(gcdEuc(15,10));



