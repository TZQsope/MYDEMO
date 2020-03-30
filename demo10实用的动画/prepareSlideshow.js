function prepareSlideshow() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;

    //为图片应用样式
    var preview = document.getElementById("preview");
    preview.style.left = "0px";
    preview.style.top = "0px";
    //取得页面所有的链接
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");

    //为mouseover事件添加动画效果
    links[0].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    }
    links[1].onmousemove = function () {
        moveElement("preview", -400, 0, 10);

    }
    links[2].onmousemove = function () {
        moveElement("preview", -600, 0, 10);

    }
}

addLoadEvent(prepareSlideshow)