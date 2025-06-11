function lcm(a,b){
    let res=Math.max(a,b)
    while(true){
        if(a%res==0 && a%res==0){
            return res;
        }
        res++;
    }
}
// console.log(console.log(lcm(4,6)));

function gcdEuc(a,b){
    if(b==0)
        return a;
    return gcdEuc(b,a%b)
}

function lcm2(a,b){
    return (a*b)/gcdEuc(a,b)
}
console.log(lcm2(4,6))