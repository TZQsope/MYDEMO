var HEIGHT = parseFloat(prompt("请输入身高，单位是米"));
var WEIGHT = parseFloat(prompt("请输入体重，单位是公斤"));

var BMI = WEIGHT / Math.pow(HEIGHT, 2);
console.log(BMI)

if (BMI < 18.5) {
    alert("过轻")
} else if (BMI < 25) {
    alert("正常")
} else if (BMI < 28) {
    alert("过重")
} else if (BMI <= 32) {
    alert("肥胖")
} else {
    alert("非常肥胖")
}

function oil() {
    var bianhao = parseInt(prompt("您想加什么油？填写92或者97"));
    var sheng = parseFloat(prompt("您想加多少升？"));

    if (bianhao == 92) {
        if (sheng >= 20) {
            var price = sheng * 5.9;
        } else {
            var price = sheng * 6;
        }
    } else if (bianhao == 97) {
        if (sheng >= 30) {
            var price = sheng * 6.95
        } else {
            var price = sheng * 7;
        }
    } else {
        alert("不好意思，没有这个编号的汽油！")
    }

    alert("价格是" + price);

}

function getMaxValue() {
    var max = arguments[0];
    // 通过 arguments 遍历实参
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(getMaxValue(1, 3, 7, 5));

window.onload = function () { getMaxValue() };