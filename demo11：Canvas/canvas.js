function draw() {
    var canvas = document.getElementById("draw-in-me");
    if (canvas.getContext) {
        var cxt = canvas.getContext('2d');
        cxt.beginPath();
        cxt.moveTo(120.0, 32.0);
        cxt.bezierCurveTo(120.0, 36.4, 116.4, 40.0, 112.0, 40.0);
        cxt.lineTo(8.0, 40.0);
        cxt.bezierCurveTo(3.6, 40.0, 0.0, 36.4, 0.0, 32.0);
        cxt.lineTo(0.0, 8.0);
        cxt.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
        cxt.lineTo(112.0, 0.0);
        cxt.bezierCurveTo(116.4, 0.0, 120.0, 3.6, 120.0, 8.0);
        cxt.lineTo(120.0, 32.0);
        cxt.closePath();
        cxt.fill();
        cxt.lineWidth = 2.0;
        cxt.strokeStyle = "rbg(255,255,255)";
        cxt.stroke();
    }
}
window.onload = draw;