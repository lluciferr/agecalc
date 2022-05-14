var date = new Date(2002,02,04);
var today = [date.getFullYear(), (date.getMonth() + 1 ) <10 ? ("0"+date.getMonth() ):date.getMonth(), date.getDate()<10 ?("0"+date.getDate() ): date.getDate()];

console.log(today.join("-"));


console.table(today)




const getdiff = (dob) => {
    var diff = [];
    var date = new Date();
    var today = [date.getFullYear(), date.getMonth() + 1, date.getUTCDate()];
    if (today[1] > parseInt(dob[1])) {
      diff[0] = today[0] - parseInt(dob[0]);
      diff[1] = today[1] - parseInt(dob[1]);
    } else {
      diff[0] = today[0] - parseInt(dob[0]) - 1;
      diff[1] = 12 - Math.abs(today[1] - parseInt(dob[1]));
    }
  
    if (today[2] > parseInt(dob[2])) {
      diff[2] = today[2] - parseInt(dob[2]);
    } else {
      diff[1] = diff[1] - 1;
      diff[2] = 30 - Math.abs(today[2] - parseInt(dob[2]));
    }
  
    return diff;
};