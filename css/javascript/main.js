function date() {
    let d = new Date();
    console.log(d);
    let days = d.getDate();
    console.log(days);
    // lay ngay trong thang
    let months = d.getMonth() + 1; // vì thang luon mac dinh tu 0 den 11    
    console.log(months);
    //lay thang trong nam
    let year = d.getFullYear();
    console.log(year);
    // lay nam hien tai
    let formartday = formarttime(days);
    let formartmonth = formarttime(months);
    // them 0 vao ngay va thang khi ngay thang nho hon 10
    document.querySelector('#date').innerHTML = `${formartday} \\ ${formartmonth} \\ ${year}`;


};

function formarttime(time) {

    if (time < 10) {
        time = '0' + time;
    }
    return time;
};

document.querySelector('strong').style.color = 'yellow';
date();




// code dong ho dem nguoc thoi gian den het ngay
function showtime() {
    const hour = 23;
    const minute = 59;
    const second = 59;
    // mac dinh mot ngay co 23h59p59s
    let t = new Date();
    console.log(t);
    let hours = hour - t.getHours();
    console.log(hours);
    let minutes = minute - t.getMinutes();
    console.log(minutes);
    let seconds = second - t.getSeconds();
    console.log(seconds);
    let ngay = 136;
    document.querySelector('#ngay').innerHTML = `${ngay}`;

    countday(ngay, hours);


    // let formatHours = convertFormartHours(hours);
    hours = addZeroTime(hours);
    minutes = addZeroTime(minutes);
    seconds = addZeroTime(seconds);

    document.querySelector('#hour').innerHTML = `${hours}`;
    document.querySelector('#minute').innerHTML = `${minutes}`;
    document.querySelector('#second').innerHTML = `${seconds}`;
}

// function convertFormartHours(time) {
//     let format = "AM";
//     if (time >= 12) {
//         format = "PM";
//     }
//     return format;
// }

function addZeroTime(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

function countday(ngayf, gio) {
    while (ngayf !== 0) {
        if (gio === 0) {
            --ngayf;
        }
        return ngayf;
    }
}


showtime();
setInterval(showtime, 1000);
// function countdown(a, b, c){

// }