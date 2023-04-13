//Print odds from 1-20

for(var i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

//Decreasing multiples of 3

var i = 100;
while(i >= 0){
    if(i % 3 == 0){
        console.log(i);
    }
    i--;
}

//Print the sequence

for(var i = 4; i >= -3.5; i-=1.5){
    console.log(i);
}

//Sigma

var i = 1;
var sum = 0;
while(i <= 100){
    sum += i;
    i++
}
console.log(sum);

//Factorial

var product = 1;
for(var i = 1; i <= 12; i++){
    product *= i;
}
console.log(product);