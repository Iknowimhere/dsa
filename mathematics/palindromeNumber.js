function isPalidrome(n){
    let rev=0;temp=n;
    while(temp!=0){
        let ld=temp%10;
        rev=rev*10+ld;
        temp=Math.floor(temp/10);
    }
    return rev===n;
}
console.log(isPalidrome(363))
console.log(isPalidrome(721))