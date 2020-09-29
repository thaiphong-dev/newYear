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
    let thang = months - 1;
    let ngay = days + 1;
    //
    var startDate = new Date(year, thang, ngay);
    // Do your operations
    var endDate = new Date("February 12, 2021");
    // endDate = 'Feb, 12, 2020';
    var aaa = (endDate.getTime() - startDate.getTime()) / 86400000;
    document.querySelector('#ngay').innerHTML = `${aaa}`;
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
    // let ngay = 135;






    // let formatHours = convertFormartHours(hours);
    hours = addZeroTime(hours);
    minutes = addZeroTime(minutes);
    seconds = addZeroTime(seconds);

    // countday(ngay, hours, minutes, seconds);

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

// function countday(ngayf, gio, phut, giay) {

//     if (gio === 0 && phut === 0 && giay === 0) {
//         ngayf -= ngayf;
//     }
//     return ngayf;

// }


showtime();
setInterval(showtime, 1000);
// function countdown(a, b, c){

// }