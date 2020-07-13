var ws = new WebSocket("ws://77.50.90.123:8000/ws");
var viewtext = ""
var a;
ws.onmessage = function(event) {
    var message = JSON.parse(event.data)
    if (message["mode"]=="message") { 
        var datemessages = new Date(message["timestamp"]*1000)
        var dt = datemessages.getHours()+":"+datemessages.getMinutes()+":"+datemessages.getSeconds()
        viewtext = viewtext + "["+dt+" "+message["username"]+"]\n";
        viewtext = viewtext + message["text"]+"\n\n"
        document.getElementById("view").innerHTML=viewtext
    }else if (message["mode"]=="reg") { 
        if(message["status"]=="true"){
            alert("Успешный вход!")
            a = true
        }else if(message["status"]=="false") {
            alert("Неправильный пароль! Повторите попытку")
            a = false
        }else if(message["status"]=="newreg") {
            alert("Успешная регистрация!")
            a = true
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
function send_message() {
    if(a==true){
            var user={
                "mode":"message",
                "username": document.getElementById('username').value,
                "text":document.getElementById('input').value
            }
            ws.send(JSON.stringify(user))
            document.getElementById('input').value=""
    }else{
        alert("Пожалуйста, авторизуйся!")
    }
};