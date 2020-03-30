function displayAccesskey() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得文档里面所有的链接
    var link = document.getElementsByTagName("a");
    //创建一个数组，保存访问键
    var akeys = new Array();
    //遍历链接
    for (var i = 0; i < link.length; i++) {
        var currentLink = link[i];
        //如果没有accesskey属性，继续循环
        if (!currentLink.getAttribute("accesskey")) continue;
        //取得accesskey的值
        var key = currentLink.getAttribute("accesskey");
        //取得链接文本
        var text = currentLink.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    }
    //创建列表
    var list = document.createElement("ul");
    //遍历访问键
    for (key in akeys) {
        var text = akeys[key];
        //创建放到列表项中的字符串
        var str = key + " : " + text;
        //创建列表项
        var item = document.createElement("li");
        var itemText = document.createTextNode(str);
        item.appendChild(itemText);
        //把列表项添加到列表中
        list.appendChild(item);
    }
    //创建标题
    var header = document.createElement("h3");
    var headerText = document.createTextNode("AccessKey:");
    header.appendChild(headerText);
    //把标题和列表添加到页面主体
    document.body.appendChild(header);
    document.body.appendChild(item);
}

addLoadEvent(displayAccesskey);