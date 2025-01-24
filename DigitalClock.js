function displayDateInformations() {
    let dateObject = new Date();
    var day = dateObject.getDay();
    var date = dateObject.getDate();
    var month = dateObject.getMonth();
    var fullYear = dateObject.getFullYear();
    var hour = dateObject.getHours();
    var minute = dateObject.getMinutes();
    var second = dateObject.getSeconds();
    var ampm;

    var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var day = dayArray[day];
    var month = monthArray[month];

    if (hour>=12){
        ampm='pm'
    }
    else{
        ampm='am'
    }
    var completeDate=`${date}/${month}/${fullYear}`;
    var completeTime = `${addingZero(hour)}:${addingZero(minute)}${ampm}`;

    document.getElementById("date_heading").innerText = completeDate;
    document.getElementById("day_heading").innerText = day;
    document.getElementById("time_heading").innerText = completeTime;
    document.getElementById("second_heading").innerText = addingZero(second);
}
setInterval(displayDateInformations, 1000);

function addingZero(value) {
    if (value < 10) {
        value = `${0}${value}`;
        return value;
    }
    else{
        return value;
    }
}