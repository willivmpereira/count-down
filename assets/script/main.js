const countDown = () => {
    const dateCountDown = new Date("2023-06-09");

    const upDateCountDown = () => {
        const dateActual = new Date();
        const dateDifference = dateCountDown - dateActual;

        let seconds = Math.floor(dateDifference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
    
        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        document.getElementById("days").innerText = days + ':';
        document.getElementById("hours").innerText = hours + ':';
        document.getElementById("minutes").innerText = minutes + ':';
        document.getElementById("seconds").innerText = seconds;
    }


    upDateCountDown()
    setInterval(upDateCountDown, 1000);
};


countDown()