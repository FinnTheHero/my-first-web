// ==================== date/time ==================== //

function getDate() {
    var now1     = new Date(); 
    var month   = now1.getMonth()+1; 
    var day     = now1.getDate();
    
    switch(month){
        case 1:
            month = 'January';
            break;
        case 2: 
            month = 'February';
            break;
        case 3: 
            month = 'March';
            break;
        case 4: 
            month = 'April';
            break;
        case 5: 
            month = 'May';
            break;
        case 6: 
            month = 'June';
            break;
        case 7: 
            month = 'July';
            break;
        case 8: 
            month = 'August';
            break;
        case 9: 
            month = 'September';
            break;
        case 10: 
            month = 'October';
            break;
        case 11: 
            month = 'November';
            break;
        case 12: 
            month = 'December';
            break;
    }
    switch(day) {
        case 1:
            day = day+'st'
            break;
        case 2:
            day = day+'nd'
            break;
        case 3:
            day = day+'rd'
            break;
        case 4:
            day = day+'th'
            break;
        case 5:
            day = day+'th'
            break;
        case 6:
            day = day+'th'
            break;
        case 7:
            day = day+'th'
            break;
        case 8:
            day = day+'th'
            break;
        case 9:
            day = day+'th'
            break;
        case 10:
            day = day+'th'
            break;
        case 11:
            day = day+'th'
            break;
        case 12:
            day = day+'th'
            break;
        case 13:
            day = day+'th'
            break;
        case 14:
            day = day+'th'
            break;
        case 15:
            day = day+'th'
            break;
        case 16:
            day = day+'th'
            break;
        case 17:
            day = day+'th'
            break;
        case 18:
            day = day+'th'
            break;
        case 19:
            day = day+'th'
            break;
        case 20:
            day = day+'th'
            break;
        case 21:
            day = day+'th'
            break;
        case 22:
            day = day+'th'
            break;
        case 23:
            day = day+'th'
            break;
        case 24:
            day = day+'th'
            break;
        case 25:
            day = day+'th'
            break;
        case 26:
            day = day+'th'
            break;
        case 27:
            day = day+'th'
            break;
        case 28:
            day = day+'th'
            break;
        case 29:
            day = day+'th'
            break;
        case 30:
            day = day+'th'
            break;
        case 31:
            day = day+'th'
            break; 
    } 

    var date = month+'/'+day;   
    
    return date;
}

function getTime() {
    var now2     = new Date(); 
    var hour    = now2.getHours();
    var minute  = now2.getMinutes();
    var second  = now2.getSeconds(); 
        
    if(hour.toString().length == 1) {
        hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        second = '0'+second;
    }

    var time = hour+' : '+minute+' : '+second;
    return time;
    
}

setInterval(function(){
    currentDate = getDate();
    document.getElementById("date").innerHTML = currentDate;

    currentTime = getTime()
    document.getElementById("time").innerHTML = currentTime;
}, 1000);

// ==================== battery ==================== //
function showBatteryLevel() {
    const batteryLevel= document.querySelector('.battery-level')

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            let level = Math.floor(batt.level * 100)
            batteryLevel.innerHTML = 'battery level:'+'<br/>'+level+'%'
        }
        updateBattery()
    })
}

setInterval(showBatteryLevel(),1000);

// ==================== network ==================== //

const internet_panel = document.querySelector('.internet-panel')
testNetworkSpeed()
function testNetworkSpeed(){
        internet_panel.innerHTML = "measuring internet speed"

        var imageAddr = "https://hackthestuff.com/images/test.jpg";
        var downloadSize = 13055440;
        
        var startTime, endTime;
        var download = new Image();
        
        download.onload = function () {
            endTime = (new Date()).getTime();
            showResults();
        }
        download.onerror = function () {
            alert("Invalid image, or error downloading");
        }
        
        startTime = (new Date()).getTime();
        var cacheBuster = "?nnn=" + startTime;
        download.src = imageAddr + cacheBuster;
        
        function showResults() {
            var duration = (endTime - startTime) / 1000;
            var bitsLoaded = downloadSize * 8;
            var speedBps = (bitsLoaded / duration).toFixed(2);
            var speedKbps = (speedBps / 1024).toFixed(2);
            var speedMbps = (speedKbps / 1024).toFixed(2);

            internet_panel.innerHTML = "your network speed is: "+speedMbps+"Mbps"
                

        }
    
}
setInterval(testNetworkSpeed,60000)

// ==================== weather ==================== //
const weather_panel = document.querySelector('.weather-panel')
function weatherBalloon() {
    var key = '5045733a6eabb6387dd89e3cbac5e068'
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+key)
        .then((Response) => Response.json())
        .then((data) => {
            
            weather_panel.innerHTML = 'todays weather :<br/>'+data.weather[0].description
        })

}
window.onload = function() {
    weatherBalloon();
}
//////////////////////////////////////////////////////
var long 
var lat
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
        long = location.longitude
        lat = location.latitude
    }
  });
//////////////////////////////////////////basics
