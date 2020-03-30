function moveElement(elementId, finalX, finalY, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    var elem = document.getElementById(elementId);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos == finalX & ypos == finalY) {
        return true;
    }
    if (xpos < finalX) {
        var dist = Math.ceil((finalX - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > finalX) {
        var dist = Math.ceil((xpos - finalX) / 10);
        xpos = xpos - dist;
    }
    if (ypos < finalY) {
        var dist = Math.ceil((finalY - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > finalY) {
        var dist = Math.ceil(( ypos-finalY ) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementId + "'," + finalX + "," + finalY + "," + interval + ")";
    elem.movement = setTimeout(repeat, interval);
}

addLoadEvent(moveElement)