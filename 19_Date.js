let dateString = '4-6-2021'

let dayIndex = new Date(dateString).getDay()
let monthName = new Date(dateString).getMonth() + 1
let year = new Date(dateString).getFullYear()

let dayName = ''
if (dayIndex == 0) dayName = 'Sunday';
else if (dayIndex == 1) dayName = 'Monday';
else if (dayIndex == 2) dayName = 'Tuesday';
else if (dayIndex == 3) dayName = 'Wednesday';
else if (dayIndex == 4) dayName = 'Thursday';
else if (dayIndex == 5) dayName = 'Friday';
else    dayName = "Saturday";

console.log(`${dayName} ${monthName} ${year}`)
