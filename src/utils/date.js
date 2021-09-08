export default function convertDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const utcDate = `${date}Z`;
  const newDate = new Date(utcDate);
  const newDateString = newDate.toLocaleString("en-US", options);
  return newDateString;
}
