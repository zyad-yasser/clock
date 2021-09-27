const clockContainer = document.querySelector('.clock');
const toggleButton = document.querySelector('.toggle');
let clockSystem = '24-hours';

const clockCallBack = () => {
    let momentHourFormat = 'hh';
    let momentTimeSystem = '';
    if (clockSystem === '24-hours') {
        momentHourFormat = 'HH'
        momentTimeSystem = 'a'
    }
    const clock = moment().format(momentHourFormat + ':mm:ss ' + momentTimeSystem);
    clockContainer.innerHTML = clock;
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