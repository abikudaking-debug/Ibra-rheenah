const loveStartDate = new Date("2025-06-01T00:00:00");

function updateLoveCounter() {

    const now = new Date();

    const difference = now - loveStartDate;

    const seconds = Math.floor(difference / 1000);

    const days = Math.floor(seconds / (60 * 60 * 24));

    const hours = Math.floor(
        (seconds % (60 * 60 * 24)) / (60 * 60)
    );

    const minutes = Math.floor(
        (seconds % (60 * 60)) / 60
    );

    const remainingSeconds = seconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = remainingSeconds;
}

setInterval(updateLoveCounter, 1000);

updateLoveCounter();