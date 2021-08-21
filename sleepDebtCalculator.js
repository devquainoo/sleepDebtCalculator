const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
     return 7;
     break;
    case 'tuesday':
     return 8;
     break;
    case 'wednesday':
     return 6;
     break;
    case 'thursday':
     return 9;
     break;
    case 'friday':
     return 10;
     break;
    case 'saturday':
     return 5;
     break;
    case 'sunday':
     return 8;
     break;
    default:
    break;
  }
}

const getActualSleepHours = () => 7+8+9+4+8+7+5;

const getIdealSleepHours = (IdealHoursPerNight) => {
  return IdealHoursPerNight * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours){
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours){
    console.log(`Got ${actualSleepHours - idealSleepHours} hours more sleep than needed!`);
  } else {
    console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than needed this week. Get some rest!`);
  }
}

calculateSleepDebt();