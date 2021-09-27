const clockContainer = document.querySelector('.clock');
const toggleButton = document.querySelector('.toggle');
let clockSystem = '24-hours';

const clockifyNumber = (number) => {
    const stringFromNumber = String(number);

    if (stringFromNumber.length >= 2) {
        return number
    } else {
        return '0' + stringFromNumber;
    }
}

const clockCallBack = () => {
    const date = new Date();
    let timeOfDay = '';
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (clockSystem === '12-hours') {
        if (hours >= 12) {
            timeOfDay = 'pm'
        } else {
            timeOfDay = 'am'
        }

        if (hours > 12) {
            hours = hours - 12;
        } else if (hours === 0) {
            hours = 12;
        }
    }
    
    const numbersArray = [hours, minutes, seconds];
    const clock = numbersArray
        .map((item) => clockifyNumber(item))
        .join(':');
    const readyClock = clock + timeOfDay;
    clockContainer.innerHTML = readyClock;
}

const toggleCallBack = () => {
    if (clockSystem === '24-hours') {
        clockSystem = '12-hours'
        toggleButton.innerHTML = '24-hours';
    } else {
        clockSystem = '24-hours'
        toggleButton.innerHTML = '12-hours';
    }
}

const addToggleLogic = () => {
    toggleButton.addEventListener('click', toggleCallBack)
}

const main = () => {
    setInterval(clockCallBack, 1000);
    toggleButton.innerHTML = '12-hours';
    addToggleLogic();
}

main();