//共享onload事件
function addLoadEvent(func) {
    //把现有的window.onload时间处理函数的值存入变量oldonload
    var oldonload = window.onload;
    //如果在这个处理函数上还没有绑定任何函数，就把新函数添加给它
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        //如果在这个处理函数上已绑定一些函数，就把新函数追加到现有指令的末尾
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//在现有元素后面插入一个新的元素
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling)
    }
}

addLoadEvent(prpareImage);
addLoadEvent(prparePlaceholder)

function prpareImage() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    if (!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            //如果showPic返回true，这里就返回false，浏览器不打开链接，直接在页面切换图片；如果showPic返回false，这里就返回true，浏览器打开此链接
            // return !showPic(this);
            return showPic(this) ? false : true
        }
        // links[i].onkeypress=links[i].onclick;
    }
}
function prparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    var imagesHold = document.createElement("img");
    imagesHold.setAttribute("id", "placeholder");
    imagesHold.setAttribute("src", "image/placeholder.jpg");
    imagesHold.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description")
    var txt = document.createTextNode("Choose an image");
    description.appendChild(txt)
    //把上面的两个元素节点放到文档中
    document.getElementsByTagName("body")[0].appendChild(imagesHold);
    document.getElementsByTagName("body")[0].appendChild(description);

    //放在图片列表之前
    var gallery = document.getElementById("imageGallery");
    gallery.parentNode.insertBefore(imagesHold, gallery);
    gallery.parentNode.insertBefore(description, gallery);

    //放在图片列表之后
    insertAfter(imagesHold, gallery)
    insertAfter(description, imagesHold)
}
function showPic(a) {
    if (!document.getElementById("placeholder")) return false;
    // var b = a.getAttribute("href");
    var b = a.href
    document.getElementById("placeholder").setAttribute("src", b);
    if (document.getElementById("description")) {
        document.getElementById("description").firstChild.nodeValue = a.getAttribute("title")
    }
    return true
}



