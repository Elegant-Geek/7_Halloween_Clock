// js part

let clockH = document.querySelector('.clock-hours');
let clockM = document.querySelector('.clock-minutes');
let clockS = document.querySelector('.clock-seconds');
let countdownDays = document.querySelector('.countdown-days');
let countdownHours = document.querySelector('.countdown-hours');
let countdownMinutes = document.querySelector('.countdown-minutes');
let countdownSeconds = document.querySelector('.countdown-seconds');

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

let finalDate = new Date('Oct 31, 2023 00:00:00'); //internally setting the countdown date


let startClock = () => {
	updateTime();               //setting initial value for time as soon as page loads
	updateCountdown();          //setting initial value for the countdown as soon as page loads
	setInterval(() => {
		updateTime();            //means time updates every second
		updateCountdown();       //means countdown updates every second
	}, 1000); 
}

let updateTime = () => {
	let now = new Date();
	let hours = now.getHours() % 12;
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
	clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`;
	clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}

let updateCountdown = () => { //calculates this in milliseconds initially
	let now = new Date();
	let diff = finalDate - now;
	// console.log(convertMsToDHMS(diff)); // the "diff" is the difference variable (really large # in milliseconds) that gets passed to the function!
	let diffObj = convertMsToDHMS(diff); //storing result in new variable
	countdownDays.textContent = diffObj.days >= 10 ? diffObj.days : '0' + diffObj.days;  //ternary operators
	countdownHours.textContent = diffObj.hours >= 10 ? diffObj.hours : '0' + diffObj.hours;
	countdownMinutes.textContent = diffObj.minutes >= 10 ? diffObj.minutes : '0' + diffObj.minutes;
	countdownSeconds.textContent = diffObj.seconds >= 10 ? diffObj.seconds : '0' + diffObj.seconds;
}

let convertMsToDHMS = (mS) => {
	let days = Math.floor(mS / day);
	let hours = Math.floor(mS % day / hour); //REMAINDER
	let minutes = Math.floor(mS % hour / minute); //REMAINDER
	let seconds = Math.floor(mS % minute / second); //REMAINDER
	return {days, hours, minutes, seconds};

}

startClock();


