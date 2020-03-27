window.onload = function () {
    prpareImage();
}
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

function showPic(a) {
    if (!document.getElementById("placeholder")) return false;
    // var b = a.getAttribute("href");
    var b=a.href
    document.getElementById("placeholder").setAttribute("src", b);
    if (document.getElementById("description")) {
        document.getElementById("description").firstChild.nodeValue = a.getAttribute("title")
    }
    return true
}
