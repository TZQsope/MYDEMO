var a = prompt("请输入您的年龄");
alert(a>=18 && a<= 65);

var a1 = 100;
var a2 = 200;
var temp;
temp = a1;
a1 = a2;
a2 = temp;
console.log(temp, a1, a2)

var A = "我说:\"今天\t天气真不错！\"";
var B = "\\\b\\\\";
console.log(A);
console.log(B);

var str1 = '千古壹号' + '永不止步';
var str2 = '千古壹号' + 666;
var str3 = '千古壹号' + true;
var str4 = '千古壹号' + null;
var str5 = '千古壹号' + undefined;
var obj = { name: '千古壹号', age: 28 };
var str6 = '千古壹号' + obj;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);

console.log(typeof []); 
console.log(typeof {});

var a = 123; // Number 类型
console.log(a + ''); // 转换成 String 类型
console.log(a + 'haha'); // 转换成 String 类型

var n1 = 10;
var n2 = 20;
var result1 = n1++;
var result=++n1;

console.log(result,n1,result1)