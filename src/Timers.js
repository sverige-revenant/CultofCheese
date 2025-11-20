class TargetDate {
  constructor(days,hours,minutes,seconds,difficulty) {
    this.days=days;
    this.hours=hours;
    this.minutes=minutes;
    this.seconds=seconds;
    this.difficulty=difficulty;
    document.getElementById(difficulty + "-countdown-days").innerHTML = this.days;
    document.getElementById(difficulty + "-countdown-hours").innerHTML = this.hours;
    document.getElementById(difficulty + "-countdown-minutes").innerHTML = this.minutes;
    document.getElementById(difficulty + "-countdown-seconds").innerHTML = this.seconds;
  }
}

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
  const heroicDifference = heroicTargetDate - date;
  const mythicDifference = mythicTargetDate - date;

  const heroic = new TargetDate(Math.floor(heroicDifference / 1000 / 60 / 60 / 24),
                                Math.floor(heroicDifference / 1000 / 60 / 60) % 24,
                                Math.floor(heroicDifference / 1000 / 60) % 60,
                                Math.floor(heroicDifference / 1000) % 60,
                                "heroic");

  const mythic = new TargetDate(Math.floor(mythicDifference / 1000 / 60 / 60 / 24),
                                Math.floor(mythicDifference / 1000 / 60 / 60) % 24,
                                Math.floor(mythicDifference / 1000 / 60) % 60,
                                Math.floor(mythicDifference / 1000) % 60,
                                "mythic");
}

setInterval(timer, 1000);