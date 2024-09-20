// Set the date for Durga Puja
const durgaPujaDate = new Date('October 10, 2024 00:00:00').getTime();

const countdown = () => {
    const now = new Date().getTime();
    const distance = durgaPujaDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = "Happy Durga Puja!";
    }
};

setInterval(countdown, 1000);
