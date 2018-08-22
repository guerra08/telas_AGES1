function capsLock(e){
    var kc = e.keyCode ? e.keyCode : e.which;
    var sk = e.shiftKey ? e.shiftKey : kc === 16;
    var visibility = ((kc >= 65 && kc <= 90) && !sk) || 
        ((kc >= 97 && kc <= 122) && sk) ? 'visible' : 'hidden';
    document.getElementById('capslock-indicator').style.visibility = visibility
}
