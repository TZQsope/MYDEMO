window.onload = function () {
    showAbbrList();
    displayCitations();
}

function showAbbrList() {
    //获取所有缩略词
    var abbrs = document.getElementsByTagName("abbr");
    if (abbrs.length < 1) return false;
    var defs = new Array();
    //遍历所有缩略词
    for (var i = 0; i < abbrs.length; i++) {
        var currentAbbr = abbrs[i];
        if(currentAbbr.childNodes.length<1) continue;
        var definition = currentAbbr.getAttribute("title");
        var key = currentAbbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //遍历定义
    for (key in defs) {
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitleText = document.createTextNode(key);
        dtitle.appendChild(dtitleText);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddescText = document.createTextNode(definition);
        ddesc.appendChild(ddescText);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc)
    }

    if(dlist.childNodes.length<1) return false;
    //创建标题
    var header = document.createElement("h2");
    var headerText = document.createTextNode("Abbreviations:");
    header.appendChild(headerText);
    //把标题和定义列表添加到页面主体
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

function displayCitations(){
    var quotes =document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute("cite")) continue;
        var url=quotes[i].getAttribute("cite");
        var quoteElements =quotes[i].getElementsByTagName("*");
        console.log(quoteElements)
        if(quoteElements.length<1) continue;
        var elem=quoteElements[quoteElements.length - 1]; 

        //创建链接
        var link=document.createElement("a");
        var linkText =document.createTextNode("source");
        link.appendChild(linkText);
        link.setAttribute("href",url);

        //插入链接
        var superscript=document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript)
    }
}