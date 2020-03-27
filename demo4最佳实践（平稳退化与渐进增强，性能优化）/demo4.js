function prepareLinks() {
    if(!document.getElementsByTagName) return false;//对象检测（平稳退化，考虑古老服务器可以正常访问）
    var links = document.getElementsByTagName("a")
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == 'popup') {
            links[i].onclick = function () {
                popup(this.getAttribute("href"));
                return false;
            }

        }
    }
}


function popup(winURL) {
    window.open(winURL, "popup", "width=320,height=480")
}

window.onload = prepareLinks