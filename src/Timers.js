const heroicDays = document.getElementById("heroic-countdown-days");
const heroicHours = document.getElementById("heroic-countdown-hours");
const heroicMinutes = document.getElementById("heroic-countdown-minutes");
const heroicSeconds = document.getElementById("heroic-countdown-seconds");
const mythicDays = document.getElementById("mythic-countdown-days");
const mythicHours = document.getElementById("mythic-countdown-hours");
const mythicMinutes = document.getElementById("mythic-countdown-minutes");
const mythicSeconds = document.getElementById("mythic-countdown-seconds");

var getNextDay = function (dayName) {
    var date = new Date();
    var now = date.getUTCDay();
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    var day = days.indexOf(dayName.toLowerCase());
    var diff = day - now;

    diff = diff < 1 ? 7 + diff : diff;

    var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

    var d = new Date(nextDayTimestamp);
    d.setUTCHours(1, 45, 0);

    return d;
}

function timer () {
  const heroicTargetDate = getNextDay('wednesday');
  var date = new Date();
  var mythicTargetDate;
  if (date.getUTCDay() === 6) {
    mythicTargetDate = getNextday('sunday');
  } else {
    mythicTargetDate = getNextDay('saturday');
  }
  const currentDate = new Date();
  const heroicDifference = heroicTargetDate - currentDate;
  const mythicDifference = mythicTargetDate - currentDate;

  const hDays = Math.floor(heroicDifference / 1000 / 60 / 60 / 24);
  const hHours = Math.floor(heroicDifference / 1000 / 60 / 60) % 24;
  const hMinutes = Math.floor(heroicDifference / 1000 / 60) % 60;
  const hSeconds = Math.floor(heroicDifference / 1000) % 60;

  const mDays = Math.floor(mythicDifference / 1000 / 60 / 60 / 24);
  const mHours = Math.floor(mythicDifference / 1000 / 60 / 60) % 24;
  const mMinutes = Math.floor(mythicDifference / 1000 / 60) % 60;
  const mSeconds = Math.floor(mythicDifference / 1000) % 60;

  heroicDays.innerHTML = hDays;
  heroicHours.innerHTML = hHours;
  heroicMinutes.innerHTML = hMinutes;
  heroicSeconds.innerHTML = hSeconds;

  mythicDays.innerHTML = mDays;
  mythicHours.innerHTML = mHours;
  mythicMinutes.innerHTML = mMinutes;
  mythicSeconds.innerHTML = mSeconds;
}

setInterval(timer, 1000);