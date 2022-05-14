// import getdiff from "./index.js";

const dob = document.querySelector("#dob");
const diff = document.querySelector("#diff");
var dobIns;
var date = new Date();
var today = [date.getFullYear(), date.getMonth() + 1, date.getUTCDate()];

var attr = [
  date.getFullYear(),
  date.getMonth() + 1 < 10 ? "0" + date.getMonth() : date.getMonth(),
  date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
].join("-");
dob.max = attr;

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

dob.value.split("-");

dob.addEventListener("change", (e) => {
  if (dob.value != '') {
      var dobIns = dob.value.split("-");
      var agediff = getdiff(dobIns);
      console.log(agediff);
      diff.innerText = `${agediff[0]} years ${agediff[1]} months ${agediff[2]} days`;
     
      localStorage.setItem("dobLast" , dob.value)
  }

});

if (localStorage.getItem("dobLast") != '') {

    dob.value = localStorage.getItem("dobLast")
    let dobIns = localStorage.getItem("dobLast").split("-");
      let agediff = getdiff(dobIns);
      console.log(agediff);
      diff.innerText = `${agediff[0]} years ${agediff[1]} months ${agediff[2]} days`;
      
}
