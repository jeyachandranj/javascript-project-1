const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function hostal()
{
    const currentYear = new Date().getFullYear();
    const currentDate = new Date();
    const hostalDate = new Date(`March 23 ${currentYear} 00:00:00`);
    console.log(currentYear)
    console.log(currentDate)
    console.log(hostalDate)
    const diff = hostalDate-currentDate;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor((diff/1000/60/60)%24);
    const m = Math.floor((diff/1000/60)%60);
    const s = Math.floor((diff/1000)%60);

    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    
}
setInterval(hostal,1000)