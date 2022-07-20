document.querySelector('div').style.textAlign = 'center';


var seconds = 0;
var milli = 0;
var appendMilli = document.getElementById("milli")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('reset');
var Interval;
buttonStart.onclick = function() {
    // clearInterval(Interval)
    Interval = setInterval(startTimer, 10);
    buttonStart.disabled = true;
}

buttonStop.onclick = function() {
    clearInterval(Interval);
    buttonStart.disabled = false;
}


buttonReset.onclick = function() {
    clearInterval(Interval);
    milli = "00";
    seconds = "00";
    appendMilli.innerHTML = milli;
    appendSeconds.innerHTML = seconds;
}



function startTimer() {
    milli++;

    if (milli <= 9) {
        appendMilli.innerHTML = "0" + milli;
    }

    if (milli > 9) {
        appendMilli.innerHTML = milli;

    }

    if (milli > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milli = 0;
        appendMilli.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

}