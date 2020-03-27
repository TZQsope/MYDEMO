console.log(document.getElementById("ulchart"));
var item = document.getElementsByTagName("li")
for (var i = 0; i < item.length; i++) {
    console.log(i, typeof item[i])
}
console.log(document.getElementsByTagName("*").length)//查看文档中共有多少元素节点（div,p,h系列等）

// 查询id：ulchart的元素包含多少列表项
var shopping = document.getElementById("ulchart")
console.log("添加title属性前", shopping.getAttribute("title"))
var items = shopping.getElementsByTagName("*")
var ele = shopping.getElementsByClassName("shopping")
console.log(items, items.length, ele.length)
console.log(document.getElementsByClassName("shopping").length)


function getElementsByClassName(node, classname) {
    if (node.getElementsByClassName) {
        return node.getElementsByClassName(classname);
    } else {
        var results = new Array();
        var elems = node.getElementsByTagName("*");
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].className.indexOf(classname) != -1) {
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}

var sales = getElementsByClassName(shopping, "sale")
console.log(sales)

var paras = document.getElementsByTagName("p")
for (var i = 0; i < paras.length; i++) {
    paras[i].setAttribute("title", "xiugai hahaha")
    console.log(paras[i].getAttribute("title"))
}
for (var i = 0; i < item.length; i++) {
    var titleText = item[i].getAttribute("title")
    if (titleText) {
        console.log(item[i].getAttribute("title"))

    } else {
        item[i].setAttribute("title", "brand new title")
        console.log(item[i].getAttribute("title"))
    }
}

shopping.setAttribute("title", "a list of goods")
console.log("添加title属性后", shopping.getAttribute("title"))