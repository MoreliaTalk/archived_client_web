function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

var ws = new WebSocket("ws://77.50.90.123:8000/ws");
ws.onmessage = function(event) {
    var message = JSON.parse(event.data)
    if (message["mode"]=="reg") { 
        if(message["status"]=="true"){
            document.cookie = "username=" + document.getElementById('username').value
            document.cookie = "password=" + document.getElementById('password').value
            document.cookie = "a=" + true
            document.location.href = "/";
        }else if(message["status"]=="false") {
            alert("Неправильный пароль! Повторите попытку")
            document.cookie = "a=" + false
        }else if(message["status"]=="newreg") {
            alert("Успешная регистрация!")
            document.cookie = "username=" + document.getElementById('username').value
            document.cookie = "password=" + document.getElementById('password').value
            document.cookie = "a=" + true
            document.location.href = "/";
        }
    }
};
function reg() {
    var userregdata={
        "mode":"reg",
        "username": document.getElementById('username').value,
        "password":document.getElementById('password').value
    }
    ws.send(JSON.stringify(userregdata))

};