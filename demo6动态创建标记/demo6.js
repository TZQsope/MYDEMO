document.write("<P>this is demo6</P>")
window.onload = function () {
    var testdiv = document.getElementById("testdiv");
    // test2.innerHTML="<p>I inserted <em>this test </em> content</p>"
    var para = document.createElement("p");
    var info = "nodeName: ";
    info = info + para.nodeName;
    info = info + ", nodeTypr: ";
    info = info + para.nodeType;
    //上面这段可以简写为：
    info += "   也可以简写为：";
    info += " nodeName: ";
    info += para.nodeName;
    info += ", nodeType: ";
    info += para.nodeType
    // alert(info)
    testdiv.appendChild(para)
    var txt = document.createTextNode("Hello World")
    para.appendChild(txt)

    var para1=document.createElement("p")
    var test2 = document.getElementById("yelo");
    var txt1 = document.createTextNode("This is ");
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode(" my ");
    var txt3 = document.createTextNode("content!");
    para1.appendChild(txt1);
    emphasis.appendChild(txt2)
    para1.appendChild(emphasis);
    para1.appendChild(txt3)
    test2.appendChild(para1)
}
