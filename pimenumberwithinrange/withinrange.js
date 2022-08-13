var n=67;
for(i=1;i<=n;i++){
    var a=0;
    for(j=2;j<i;j++){
        if(i%j==0){
            a=1;

        }
    }
    if(a==0){
        console.log(i);
    }
}

var n=4;
if( n%2==0){
    console.log(n,'not prime');
}
else{
    console.log(n,'prime');
}
