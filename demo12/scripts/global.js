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

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function highlightPage(href) {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = document.getElementsByTagName("nav");
    if (navs.length == 0) return false;

    // 取得导航后循环遍历
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for (var i = 0; i < links.length; i++) {
        linkurl = links[i].getAttribute("href");
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
            //取得当前链接中的文本，并将文本用toLowerCase转换成小写形式
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext)
            console.log(linktext)
        }
    }
}
function prepareSideshow() {
    var intro = document.getElementById("intro");
    if (!intro) return false;
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "image/BTS9.jpeg");
    preview.setAttribute("alt", "a glimps of what awaits you");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);

    var links = intro.getElementsByTagName("a");
    // var links = document.getElementsByTagName("a");//让导航div中的链接也可以触发幻灯片
    var destination;
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            destination = this.getAttribute("href")
            if (destination.indexOf("index.html") != -1) {
                moveElement("preview", 0, 0, 10);
            }
            if (destination.indexOf("about.html") != -1) {
                console.log(1111111111)
                moveElement("preview", -150, 0, 10);
            }
            if (destination.indexOf("photo.html") != -1) {
                moveElement("preview", -300, 0, 10);
            }
            if (destination.indexOf("live.html") != -1) {
                moveElement("preview", -450, 0, 5);
            }
            if (destination.indexOf("contact.html") != -1) {
                moveElement("preview", -600, 0, 5);
            }
        }
    }

    // var frame=document.createElement("img");
    // frame.setAttribute("src", "image/BTS9.jpeg");
    // frame.setAttribute("alt", "");
    // frame.setAttribute("id", "frame");
    // slideshow.appendChild(frame);
}
function moveElement(elementId, finalX, finalY, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    var elem = document.getElementById(elementId);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px"
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos == finalX & ypos == finalY) {
        return true;
    }
    if (xpos < finalX) {
        console.log("22222")
        var dist = Math.ceil((finalX - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > finalX) {
        console.log("33333")
        var dist = Math.ceil((xpos - finalX) / 10);
        xpos = xpos - dist;
    }
    if (ypos < finalY) {
        var dist = Math.ceil((finalY - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > finalY) {
        var dist = Math.ceil((ypos - finalY) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementId + "'," + finalX + "," + finalY + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}

function showSection(id) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute("id") != id) {
            sections[i].style.display = "none";
        } else {
            sections[i].style.display = "block";
        }
    }
}
function prepareInternalnav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var articles = document.getElementsByTagName("article");
    if (articles.length == 0) return false;
    var navs = articles[0].getElementsByTagName("nav");
    if (navs.length = 0) return false;
    var nav = navs[0];
    if (!nav) return false;
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var sectionId = links[i].getAttribute("href").split("#")[1];
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }
    }
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
            return showPic(this);
        }
        // links[i].onkeypress=links[i].onclick;
    }
}
function prparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imageGallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "image/placeholder.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description")
    var desctxt = document.createTextNode("Choose an image");
    description.appendChild(desctxt)

    //放在图片列表之前
    var gallery = document.getElementById("imageGallery");
    //放在图片列表之后
    insertAfter(description, gallery)
    insertAfter(placeholder, description)
}
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (!document.getElementById("despcription")) return false;
    if (whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }

    return false;
}

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (i = 0; i < tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (j = 0; j < rows.length; j++) {
            if (odd == true) {
                // console.log(rows[j])
                addClass(rows[j], "odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function () {
            addClass(this, "highlight");
        }
        rows[i].onmouseout = function () {
            this.className = this.oldClassName;
        }
    }
}

function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (i = 0; i < abbreviations.length; i++) {
        var currentAbbr = abbreviations[i];
        if (currentAbbr.childNodes.length < 1) continue;
        var definition = currentAbbr.getAttribute("title");
        var key = currentAbbr.lastChild.nodeValue;
        defs[key] = definition;
    }
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
    if (dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h3");
    var headerText = document.createTextNode("Abbreviations:");
    header.appendChild(headerText);
    var article = document.getElementsByTagName("article");
    if (article.length == 0) return false;
    var container = article[0];
    container.appendChild(header);
    container.appendChild(dlist);
}

function focusLabels() {
    if (!document.getElementsByTagName("label")) return false;
    var labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
        if (!labels[i].getAttribute("for")) continue;
        labels[i].onclick = function () {
            var id = this.getAttribute("for");
            if (!document.getElementById(id)) return false;
            var element = document.getElementById(id);
            element.focus();
        }
    }
}

function resetFields(whichform) {
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.type == "submit") continue;
        var check = element.placeholder || element.getAttribute("placeholder");
        if (!check) continue;
        element.onfocus = function () {
            var text = this.placeholder || this.getAttribute("placeholder");
            if (this.value == text) {
                this.className = "";
                this.value = "";
            }
        }
        element.onblur = function () {
            if (this.value == "") {
                this.className = "placeholder";
                this.value = this.placeholder || this.getAttribute("placeholder");
            }
        }
        element.onblur();

    }
}

function prepareForm() {
    for (var i = 0; i < document.forms.length; i++) {
        var thisForm = document.forms[i];
        resetFields(thisForm);
        console.log("111111", thisForm)
        thisForm.onsubmit = function () {
            console.log("!!!!!!!!!!!", this)
            if (!validateForm(this)) return false;
            var article = document.getElementsByTagName('article')[0];
            if (submitFormWithAjax(this, article)) return false;
            return true;
            // return validateForm(this);
        }
    }
}
function validateForm(whichform) {
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.required == "required") {
            if (!isFilled(element)) {
                alert("Please fill in the " + element.name + " field.");
                return false;
            }
        }
        if (element.type = "email") {
            if (!isEmail(element)) {
                alert("The " + element.name + " field must be a valid email address");
                return false;
            }
        }
    }
    return false;
}
function isFilled(field) {
    if (field.value.replace('', '').length == 0) return false;
    var placeholder = field.placeholder || field.getAttribute("placeholder");
    return (field.value != placeholder);
}
function isEmail(field) {
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}
function getHTTPObject() {
    if (typeof XMLHttpRequest == "undefined")
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) { }
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch (e) { }
            return false;
        }
    return new XMLHttpRequest();
}
function displayAjaxLoading(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src", "image/ajax-loader.gif");
    content.setAttribute("alt", "Loading...");
    element.appendChild(content);
}
function submitFormWithAjax(whichform, thetarget) {
    var request = getHTTPObject();
    if (!request) {
        return false;
    }
    displayAjaxLoading(thetarget);
    var dataParts = [];
    var element;
    for (i = 0; i < whichform.length; i++) {
        element = whichform.elements[i];
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
    }
    var data = dataParts.join('&');
    request.open('post', whichform.getAttribute("action"), true)
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if (matches.length > 0) {
                    thetarget.innerHTML = matches[1];
                } else {
                    thetarget.innerHTML = '<p>Oops,there was an error.Sorry.</p>'
                }
            } else {
                thetarget.innerHTML = '<p>' + request.statusText + '</p>'
            }
        }
    };
    request.send(data);
    return true;
}


addLoadEvent(prepareSideshow);
addLoadEvent(highlightPage);
addLoadEvent(prepareInternalnav);
addLoadEvent(prpareImage);
addLoadEvent(prparePlaceholder);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);
addLoadEvent(focusLabels);
addLoadEvent(prepareForm);