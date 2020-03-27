function showPic(whichPic) {
    // console.log(whichPic)
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description")
    // console.log(placeholder);
    var source = whichPic.getAttribute("href");
    var title = whichPic.getAttribute("title")
    console.log(source, title)
    placeholder.setAttribute("src", source)//等价于placeholder.src=source
    // console.log(description.firstChild.nodeValue)
    description.firstChild.nodeValue = title
    // placeholder.src=source

}

//压缩后的精简代码
// function showPic(a) {
//     var b = a.getAttribute("href");
//     document.getElementById("placeholder").setAttribute("src", b);
//     document.getElementById("description").firstChild.nodeValue = a.getAttribute("title")
// }

function countBodyElement() {
    var bodyElement = document.getElementsByTagName("ul")[0]
    console.log(bodyElement.childNodes.length, bodyElement.nodeType)
}
window.onload = countBodyElement;//页面加载时调用countBodyEleme方法
