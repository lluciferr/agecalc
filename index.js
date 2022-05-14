const dateOfB = [2003, 2, 25];


var date = new Date();
var today = [date.getFullYear(), date.getMonth() + 1, date.getUTCDate()];

const getTotalDays = () => {
    return 30;
};

const getdiff = (dob) => {
  var diff = [];
  if (today[1] > dob[1]) {
    diff[0] = today[0] - dob[0];
    diff[1] = today[1] - dob[1];
  } else {
    diff[0] = today[0] - dob[0] - 1;
    diff[1] = 12 - Math.abs(today[1] - dob[1]);
  }

  if (today[2] > dob[2]) {
    diff[2] = today[2] - dob[2];
  } else {
    diff[1] = diff[1] - 1;
    diff[2] = getTotalDays() - Math.abs(today[2] - dob[2]);
  }

  return diff;
};

const agediff = getdiff(dateOfB);

console.table(agediff);
