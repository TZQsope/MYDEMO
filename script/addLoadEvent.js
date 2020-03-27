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