function showTime() {
    const date = new Date();
    return "Hrs: " + date.getHours() + "Minutes: " + date.getMinutes() +
            "Seconds: " +  date.getSeconds();
}

function showSessionExpire() {
    console.log("Activity-B your session is expired " + showTime());
}

console.log("Activity-A : Trigerring Activity-B at " + showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A: Trigerred Activity-B at " + showTime() + " will execute after 5 seconds");