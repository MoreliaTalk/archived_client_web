function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

var ws = new WebSocket("ws://77.50.90.123:8000/ws");
ws.onmessage = function(event) {
    var viewtext;
    var message = JSON.parse(event.data)
    if (message["mode"]=="message") { 
        var dt = String(new Date(message["timestamp"]*1000)).substring(15,24)
        infomes = "["+dt+" "+message["username"]+"]";
        textmes = message["text"]
        if (message["username"]==getCookie("username")){
            outchat('<div class="msg"> <div class="bubble alt"><div class="txt">'+
                                    '<span class="name alt">'+message["username"]+
                                    '</span><span class="timestamp">'+dt+'</span><br/>'+
                                    '<p class="message">'+message["text"]+
                                    '</p></div><div class="bubble-arrow alt"></div></div></div>');
        }else{
            outchat('<div class="msg"> <div class="bubble"><div class="txt">'+
                                '<span class="name">'+message["username"]+
                                '</span><span class="timestamp">'+dt+'</span><br/>'+
                                '<p class="message">'+message["text"]+
                                '</p></div><div class="bubble-arrow"></div></div></div>');
        }
    };
}
function outchat(str) {
      var chat = document.getElementById("mes");
      var escaped = str;
      chat.innerHTML = chat.innerHTML + "<br>" + escaped;
      chat.scrollTop = chat.scrollHeight;
}

function send_message() {
    if(getCookie("a")){
            var user={
                "mode":"message",
                "username": getCookie("username"),
                "text":document.getElementById('input').value
            }
            ws.send(JSON.stringify(user))
            document.getElementById('input').value=""
    }else{
        alert("Пожалуйста, авторизуйся!")
    }
}