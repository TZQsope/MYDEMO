function positionMessage() {
    if (!document.getElementById) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message",200,200,20);
}
// function moveMessage() {
//     if (!document.getElementById) return false;
//     var elem = document.getElementById("message");
//     // console.log("111111111")
//     var xpos = parseInt(elem.style.left);
//     var ypos = parseInt(elem.style.top);
//     if (xpos == 200 & ypos == 100) {
//         return true;
//     }
//     if (xpos < 200) {
//         xpos++;
//     }
//     if (xpos > 200) {
//         xpos--;
//     }
//     if (ypos < 100) {
//         ypos++;
//     }
//     if (ypos > 100) {
//         ypos--;
//     }
//     elem.style.left = xpos + "px";
//     elem.style.top = ypos + "px";
//     movement = setTimeout("moveMessage()", 20);
// }

