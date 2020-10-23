function formatDuration(seconds) {
  if (seconds <= 0) return "now";
  //BEGIN how many sec in ....
  const SEC_IN_MIN = 60;
  const SEC_IN_HOUR = SEC_IN_MIN * 60;
  const SEC_IN_DAY = SEC_IN_HOUR * 24;
  const SEC_IN_YEAR = SEC_IN_DAY * 365;
  //END how many sec in ....

  let minutes = seconds / SEC_IN_MIN;
  let hours = seconds / SEC_IN_HOUR;
  let days = seconds / SEC_IN_DAY;
  let years = seconds / SEC_IN_YEAR;

  const getTime = (value, time, timeName) => {
    const rightTime = Math.floor(value % time);
    if (rightTime === 0) {
      return null;
    }

    return rightTime + " " + timeName + (rightTime === 1 ? "" : "s");
  };

  const time = {
    seconds: getTime(seconds, 60, "second"),
    minutes: getTime(minutes, 60, "minute"),
    hours: getTime(hours, 24, "hour"),
    days: getTime(days, 365, "day"),
    years: getTime(years, ++years, "year"),
  };

  const getString = (timeType, afterTimeArr = []) => {
    if (timeType) {
      const isAfterTime = afterTimeArr.filter((item) => item);
      if (isAfterTime.length === 1) {
        return timeType + " and ";
      } else if (isAfterTime.length > 1) {
        return timeType + ", ";
      } else {
        return timeType;
      }
    } else {
      return "";
    }
  };
  let resultString = "";
  resultString += getString(time.years, [
    time.days,
    time.hours,
    time.minutes,
    time.seconds,
  ]);
  resultString += getString(time.days, [
    time.hours,
    time.minutes,
    time.seconds,
  ]);
  resultString += getString(time.hours, [time.minutes, time.seconds]);
  resultString += getString(time.minutes, [time.seconds]);
  resultString += getString(time.seconds);

  return resultString;
}

console.log(formatDuration(1)); //"1 second"
console.log(formatDuration(62)); //"1 minute and 2 seconds"
console.log(formatDuration(120)); //"2 minutes"
console.log(formatDuration(3600)); //"1 hour"
console.log(formatDuration(3600 * 24)); //"1 day"
console.log(formatDuration(3600 * 24 * 365 * 6 + 3600 * 24 + 3600 + 62)); //"6 year, 1 day, 1 hour, 1 minute and 2 seconds"
console.log(formatDuration(3662)); //"1 hour, 1 minute and 2 seconds"
