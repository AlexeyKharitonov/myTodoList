const monthDate = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

function getDateFormat(date, separator) {
  const day = addZero(date.getDate()); // получаем день месяца
  const month = monthDate[date.getMonth()]; // получаем месяц
  const year = date.getFullYear(); // получаем год
  //складываем все данные в строку через сепаратор и возвращаем
  return `${day}${separator}${month}${separator}${year}г.`;
}

export function displayDate(ms) {
  function addZero(number) {
    if (number < 10) number = `0${number}`;
    return number;
  }
  const date = new Date(ms);
  const dateNow = new Date();

  //сравниваем текущую дату и с датой, котоорую мы передали в ms
  const yearDif = dateNow.getFullYear() - date.getFullYear();
  if (yearDif === 0) {
    const dayDif = dateNow.getDate() - date.getDate();
    if (dayDif === 0) {
      const hourDif = dateNow.getHours() - date.getHours();
      if (hourDif === 0) {
        const minutesDif = dateNow.getMinutes() - date.getMinutes();
        if (minutesDif >= 0 && minutesDif < 1) return "только что";
        if (minutesDif >= 1 && minutesDif < 5) return "минуту назад";
        if (minutesDif >= 5 && minutesDif < 10) return "5 минут назад";
        if (minutesDif >= 10 && minutesDif < 30) return "10 минут назад";
        return "10 минут назад";
      }
      return `${addZero(date.getHours())}: ${addZero(date.getMinutes())}`;
    }
    return `${addZero(date.getDate())} ${monthDate[date.getMonth()]}`;
  }
  return getDateFormat(date, " ");
}
