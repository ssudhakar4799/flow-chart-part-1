//prime number
// var a=parseInt(prompt('enter prime number'))

// if(a%a==0 ||a%1==0){
//     console.log('a is not prime number');
// }
// else{
//     console.log('a is prime number');
// }

var n=10;
for(i=2;i<n;i++){
    if(n%i==0){
        console.log(n, 'is a prime number');
    break;
    }
    else{
        console.log(n ,'is a not prime number');
        break;
    
    }

}