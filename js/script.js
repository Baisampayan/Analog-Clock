setInterval(() => {
    let d = new Date();
    let clkHour = d.getHours();
    let clkMinute = d.getMinutes();
    let clkSecond = d.getSeconds();

    // For Hour
    // 12 -> 360 degree
    // 1 -> 360/12 = 30 degree

    // For Minute
    // 60 -> 30 degree
    // 1 -> 1/2 degree

    let hrRotation = 30 * clkHour + clkMinute / 2;
    let minRotation = 6 * clkMinute;
    let secRotation = 6 * clkSecond;

    let hr = document.getElementById("hourHand");
    let min = document.getElementById("minuteHand");
    let sec = document.getElementById("secondHand");

    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
},1000);