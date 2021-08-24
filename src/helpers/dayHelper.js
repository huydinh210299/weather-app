const Day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayHelper = () => {
  const getCurrentDay = (value) => {
    return Day[new Date(value).getDay()];
  };

  const getCurrentDate = (value) => {
    const current = new Date(value);
    let date = current.getDate();
    switch (date) {
      case 1:
        date += "st";
        break;
      case 2:
        date += "nd";
        break;
      case 3:
        date += "rd";
        break;
      default:
        date += "th";
    }
    const month = Month[current.getMonth()];
    return `${month} ${date}`;
  };

  return { getCurrentDay, getCurrentDate };
};

export default dayHelper;
