var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
    paras[i].onclick = function () {
        alert("you clicked on a paragraph. ")
    }
}

window.onload = function () {
    var example = document.getElementById('example');
    example.style.color = "red";
    styleHeaderSiblings();
}

function styleHeaderSiblings() {
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        // 方法一直接设置style
        // elem.style.fontWeight = "bold";
        // elem.style.fontSize = "1.2em";
        // elem.style.color = "green"
        
        //方法二设置class
        // elem.setAttribute("class","intro")
        elem.className = "intro"
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) {
        // console.log(node)
        return node;

    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

