let date = document.getElementById("date")
let day = document.querySelector(".day")
let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let month = document.querySelector(".month")

// Geburtstag
let birthday = new Date(2022,1,5)
let birthdayValue = birthday.valueOf()
console.log(birthdayValue)

// Differenz zwischen Geburtstag und heutiges Datum
// let bisGeburtstag = birthdayValue - todayValue
// console.log(bisGeburtstag)
// Sekunden bis zum Geburtstag
// let sekund = bisGeburtstag/1000
// Minuten bis zum Geburtstag
// let minut = sekund/60
// Stunden bis zum Geburtstag
// let stund = minut/60
// Tage bis zum Geburtstag
// let tag = stund/24

// console.log(stund)

/* //-------------------------------------------
// new Date() als Parameter
function ausrechnen(date){
    let dateValue = date.valueOf()-todayValue
    let dateSeconds = dateValue/1000
    let dateMinutes = dateSeconds/60
    let dateHours = dateMinutes/60
    let dateDays = dateHours/24
    return dateDays
}
// ausgabe in Tagen bis zum Geburtstag
console.log(ausrechnen(new Date(2022,5,10)))
//-------------------------------------------- */
// Formel:
let timer
let _sekunden = 1000
let _minuten = _sekunden * 60
let _stunden = _minuten * 60
let _tage = _stunden * 24
let _monate = _tage * 30
// Datum-Form onChange
function countdown(){
    let counter = () => {
        let today = new Date()
        let todayValue = today.valueOf()
        let ende = new Date(date.value)
        let entfernung = ende - todayValue
        if(entfernung < 0){
            clearInterval(counter)
        }
        let monate = Math.floor(entfernung / _monate)
        let tage = Math.floor((entfernung % _monate) / _tage)
        let stunden = Math.floor((entfernung % _tage) / _stunden)
        let minuten = Math.floor((entfernung % _stunden) / _minuten)
        let sekunden = Math.floor((entfernung % _minuten) / _sekunden)
        month.innerHTML = monate
        day.innerHTML = tage
        hour.innerHTML = stunden
        minute.innerHTML = minuten
        second.innerHTML = sekunden
    }
    timer = setInterval(counter, 1000)
}


