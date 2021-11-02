client_name = prompt("Enter your name")
let params = new URLSearchParams(window.location.search)

function getParams(paramName){
    return params.get(paramName);
}

heading1 = document.getElementById("heading1")

if (params.has('n')){
document.write(`<h1>Happy diwali to ${client_name} from ${getParams('n')}.</h1>`)
}
else{
    document.write(`<h1>Happy diwali to ${client_name} from me.</h1>`)
}

function sendMessage(){
    if (params.has('n') == true){
    var url = `https://wa.me/?text=Hello ${client_name} have sent you a greeting ${window.location.href.replace(`n=${getParams('n')}`, '')}=${client_name} to visit.`;
    }
    else{
    var url = `https://wa.me/?text=Hello ${client_name} have sent you a greeting click ${window.location.href}?n=${client_name} to visit.`;
    }
    window.open(url, '_blank')
}

function copyURL(){
    let current_url = window.location.href
    navigator.clipboard.writeText(current_url);
}


 function diwaliTimer(){
    var d = new Date()
    var hrs = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    var day = d.getDay()


    let days_left = 3 - day
    let hours_left = 23 - hrs
    let minutes_left = 59 - min
    let seconds_left = 59 - sec

    if (days_left==1){
        document.getElementById("timer").innerText = `Diwali starts in ${days_left} day ${hours_left} hours ${minutes_left} minutes and ${seconds_left} seconds.`
    }
    if (hours_left==1){
        document.getElementById("timer").innerText = `Diwali starts in ${days_left} days ${hours_left} hour ${minutes_left} minutes and ${seconds_left} seconds.`
    }
    if (minutes_left==1){
        document.getElementById("timer").innerText = `Diwali starts in ${days_left} days ${hours_left} hours ${minutes_left} minute and ${seconds_left} seconds.`
    }
    if (seconds_left==1){
        document.getElementById("timer").innerText = `Diwali starts in ${days_left} days ${hours_left} hours ${minutes_left} minutes and ${seconds_left} second.`
    }
    
    if (days_left==0&&hours_left==0&&minutes_left==0&&seconds_left==0){
        document.getElementById("timer").innerText = `Diwali is live.`
    }

}

setInterval(diwaliTimer, 1000)