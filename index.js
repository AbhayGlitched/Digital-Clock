let so; // Declare interval ID globally to manage start/stop

function update() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
let ms = now.getMilliseconds();
let meridiem = hours >= 12 ? 'PM' : 'AM';
if(meridiem === 'PM') {
    hours = hours - 12;
}
    // Format time to always have two digits for hours, minutes, and seconds
    let timestring = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridiem}`;

    // Select the clock element and update it with the current time
    let clock = document.querySelector('.time');
    clock.textContent = timestring;
}

function startClock() {
    if (!so) {
        update();
        so = setInterval(update, 1);
    }
}

function stopClock() {
    if (so) {
        clearInterval(so);
        so = null; 
    }
}

startClock();
