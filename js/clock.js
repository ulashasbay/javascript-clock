let userName = prompt(`İsminiz Nedir?`);
let userNameDOM = document.querySelector(`#myName`);

userNameDOM.innerHTML = userName;


function showTime(){
    let dayList = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let dayName = today.getDay();
    m = checkTime(m)
    s = checkTime(s)
    document.querySelector(`#myClock`).innerHTML = `${h}:${m}:${s} ${dayList[dayName]}`
    setTimeout(showTime, 1000)

}
function checkTime(i){
    if (i < 10){
        i = "0" + i;  
    }
    return i
}

