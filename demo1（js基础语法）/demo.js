var xpos = document.getElementById("mydemo1")
// console.log(xpos)
var mood = "happy", age = "23"
var height = "about 5 \"10\" tall"
console.log(height)

var BTS = Array()
BTS[0] = "Jin";
BTS[1] = "Suga";
BTS[2] = "JHope";
BTS[3] = "RM";
BTS[4] = "JImin";
BTS[5] = "V";
BTS[6] = "JK";

console.log(BTS)

var BTS1 = Array("Jin", "Suga", "JHope", "RM", "Jimin", "V", "JK")

console.log(BTS1)

console.log(1 + 4 * 5)

var count = 1;
while (count <= 7) {
    console.log(count);
    count++;
}

var cost=1;
do{
    console.log(cost)
    cost++;
}while(cost<=7)

for(var coin=7;coin>=1;coin--){
    console.log(coin)
}

for( var num=0;num<BTS1.length;num++){
    console.log(BTS1[num])
}

function multiply(num1,num2){
    var total=num1*num2;
    console.log(total)
    return total
}

multiply(5,6)

function square(num){
    all=num*num
    return all
}
var all=50;
var number=square(20)
console.log(all)

function square1(num){
    var all1=num*num
}

var all1=50;
console.log(all1)

var num3=7.651;
var num3=Math.round(num3)
console.log(num3)

var currentDate=new Date();
var today=currentDate.getHours();
console.log(today)